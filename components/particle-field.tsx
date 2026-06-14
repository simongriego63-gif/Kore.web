"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let rafId = 0
    let running = true

    // Blue palette stops used for particles + links
    const LINK_COLOR = "56, 152, 236" // bright tech blue
    const CONNECT_DIST = 150

    const seedParticles = () => {
      // Scale particle count to viewport area, capped for performance
      const count = Math.min(90, Math.floor((width * height) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.5 + 0.3,
      }))
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedParticles()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Update + render particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges for a seamless, endless field
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${LINK_COLOR}, ${p.alpha})`
        ctx.fill()
      }

      // Draw connecting lines (the "data stream" web)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.22
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${LINK_COLOR}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (running) rafId = requestAnimationFrame(draw)
    }

    resize()

    if (prefersReduced) {
      // Render a single static frame for reduced-motion users
      draw()
      running = false
      cancelAnimationFrame(rafId)
    } else {
      rafId = requestAnimationFrame(draw)
    }

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    const handleVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!prefersReduced) {
        running = true
        rafId = requestAnimationFrame(draw)
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  )
}
