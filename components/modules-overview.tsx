"use client"

import { Heart, LayoutDashboard, Calendar, Globe, Share2 } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "./motion-primitives"

const easeOut = [0.22, 1, 0.36, 1] as const

const tools = [
  {
    name: "Loyalty",
    description: "Retención automatizada y fidelización real.",
    icon: Heart,
    href: "#loyalty",
  },
  {
    name: "Control",
    description: "Finanzas, stock y métricas en un solo lugar.",
    icon: LayoutDashboard,
    href: "#finance",
  },
  {
    name: "Booking",
    description: "Agenda inteligente y gestión de turnos.",
    icon: Calendar,
    href: "#booking",
  },
  {
    name: "Web",
    description: "Tu identidad digital y presencia en un solo lugar, una web.",
    icon: Globe,
    href: "#web",
  },
  {
    name: "Link",
    description: "Conectá todas tus redes en un solo punto.",
    icon: Share2,
    href: "#link",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export function ModulesOverview() {
  return (
    <section id="modulos" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-20">
          <span className="text-[#0A5A8C] text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Digitalizá y automatizá tu día a día.
          </h2>
          <p className="text-[#6B7280] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Aplicaciones web enfocadas en eliminar las tareas repetitivas y tomar el control de tus datos en tiempo real desde cualquier dispositivo. Resolvemos toda la gestión interna de tu local,hacemos que tengas toda la informacion ordenada, una web y además, sumamos un sistema integral para fidelizar a tus clientes y lograr que siempre quieran volver.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map((tool) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group p-8 bg-[#121212]/80 backdrop-blur-sm border border-white/5 hover:border-[#0A5A8C]/50 hover:shadow-[0_8px_40px_-8px_rgba(10,90,140,0.4)] transition-all duration-300 ease-in-out flex flex-col items-center text-center rounded-lg"
            >
              {/* Icono limpio, sin recuadro interno */}
              <tool.icon
                size={36}
                className="text-[#6B7280] mb-6 group-hover:text-[#0A5A8C] group-hover:scale-110 transition-all duration-300"
                strokeWidth={1.5}
              />

              {/* Título limpio, todo en blanco y sin prefijo */}
              <h3 className="text-white text-lg font-bold mb-2 font-heading tracking-wide">
                {tool.name}
              </h3>

              <p className="text-[#6B7280] text-xs leading-relaxed">
                {tool.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
