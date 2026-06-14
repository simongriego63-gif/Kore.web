"use client"

import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

const easeOut = [0.22, 1, 0.36, 1] as const

// Fade + slide up on scroll into view
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

// Container that staggers its children
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: "div" | "section" | "span" | "li" | "header" | "footer"
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  once?: boolean
  amount?: number
}

// Wrap a group; direct children using `staggerItem` will animate in sequence
export function Stagger({ children, className, once = true, amount = 0.2 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
