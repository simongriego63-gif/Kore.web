"use client"

import { KoreLogo } from "./kore-logo"
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react"
import { motion } from "motion/react"

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#0A5A8C]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 bg-white/[0.03] backdrop-blur-sm px-4 py-2 mb-8 border border-white/10 rounded-full"
            >
              <div className="w-2 h-2 bg-[#0A5A8C] rounded-full animate-pulse" />
              <span className="text-[#6B7280] text-xs uppercase tracking-wider">Ecosistema de Aplicaciones</span>
            </motion.div>

            <motion.div variants={item}>
              <KoreLogo size="xl" className="mb-6" />
            </motion.div>

            <motion.h1
              variants={item}
              className="text-white text-3xl lg:text-4xl font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              El <span className="text-[#0A5A8C] font-medium">core</span> de tu gestión.
              <br />
              Todo digitalizado, todo automatizado.
            </motion.h1>

            <motion.p variants={item} className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-xl">
              Una suite de herramientas digitales a tu medida. No te atamos a una plataforma rígida: ofrecemos aplicaciones web separadas que se adaptan al ritmo de tu proyecto. Software seguro, rápido y enfocado en escalar tus ideas sin complicaciones.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#modulos"
                className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(10,90,140,0.5)] group"
              >
                Conocer Herramientas
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#0A5A8C] bg-white/[0.02] hover:bg-white/[0.04] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105"
              >
                Solicitar Demo
              </a>
            </motion.div>

            {/* Key features (Los 3 Pilares) */}
            <motion.div variants={item} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              {[
                { Icon: Smartphone, title: "Digitalizado", desc: "Todos tus datos al alcance de tu mano" },
                { Icon: Zap, title: "Automatizado", desc: "Procesos que funcionan solos, sin intervención" },
                { Icon: Shield, title: "Seguro", desc: "Tus datos siempre protegidos en la nube" },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-2 group cursor-default transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} className="text-[#0A5A8C] transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-white text-sm font-medium">{title}</span>
                  <span className="text-[#6B7280] text-xs leading-relaxed">{desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element (Gráfico de la derecha) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Rotating orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {/* Orbiting modules (Actualizados a los 5 nuevos) */}
                {[
                  { name: "Loyalty", angle: -90 },
                  { name: "Control", angle: -18 },
                  { name: "Booking", angle: 54 },
                  { name: "Web", angle: 126 },
                  { name: "Link", angle: 198 },
                ].map((module) => {
                  const radius = 160
                  const x = Math.cos((module.angle * Math.PI) / 180) * radius
                  const y = Math.sin((module.angle * Math.PI) / 180) * radius
                  return (
                    <div
                      key={module.name}
                      className="absolute w-20 h-20 bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-[#0A5A8C] hover:bg-[#121212] hover:shadow-[0_0_20px_rgba(10,90,140,0.4)] z-10"
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`,
                      }}
                    >
                      {/* Counter-rotate so labels stay upright */}
                      <motion.span
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="text-[#6B7280] text-xs font-medium"
                      >
                        {module.name}
                      </motion.span>
                    </div>
                  )
                })}
              </motion.div>

              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ boxShadow: ["0 0 30px rgba(10,90,140,0.3)", "0 0 50px rgba(10,90,140,0.55)", "0 0 30px rgba(10,90,140,0.3)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 bg-[#0A5A8C] rounded-lg flex items-center justify-center z-20"
                >
                  <span className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    kore.
                  </span>
                </motion.div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                {[-90, -18, 54, 126, 198].map((angle, i) => {
                  const x = Math.cos((angle * Math.PI) / 180) * 120 + 200
                  const y = Math.sin((angle * Math.PI) / 180) * 120 + 200
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#0A5A8C"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.3"
                    />
                  )
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
