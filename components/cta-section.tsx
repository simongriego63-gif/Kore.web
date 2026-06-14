"use client"

import { KoreLogo } from "./kore-logo"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "motion/react"

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5A8C]/5 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#0A5A8C]/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <KoreLogo size="lg" className="mx-auto mb-6" />
        </motion.div>

        <motion.h2
          variants={item}
          className="text-white text-3xl lg:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Automatiza tu gestión.
          <br />
          <span className="text-[#0A5A8C]">Empieza hoy.</span>
        </motion.h2>

        <motion.p variants={item} className="text-[#6B7280] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Únete a negocios que ya optimizaron sus operaciones con Kore. 
          Sin compromisos, sin costos ocultos.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Configuración asistida",
            "30 días de prueba",
            "Soporte incluido",
            "Sin tarjeta requerida",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:bg-white/[0.04]"
            >
              <Check size={16} className="text-[#0A5A8C]" />
              <span className="text-[#9CA3AF] text-sm">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#0A5A8C] hover:bg-[#0A5A8C] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(10,90,140,0.5)] group"
          >
            Solicitar Demo Gratuita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#0A5A8C] bg-white/[0.02] hover:bg-white/[0.04] text-white px-8 py-4 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            Contactar Ventas
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
