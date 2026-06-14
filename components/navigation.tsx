"use client"

import { useState } from "react"
import { KoreLogo } from "./kore-logo"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Apps", href: "#modulos" },
  { name: "Loyalty", href: "#loyalty" },
  { name: "Control", href: "#finance" },
  { name: "Booking", href: "#booking" },
  { name: "Web", href: "#web" },
  { name: "Link", href: "#link" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#0A0A0A]/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <KoreLogo size="sm" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[#6B7280] hover:text-white text-sm transition-colors duration-300 ease-in-out group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0A5A8C] transition-all duration-300 ease-in-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacto"
              className="bg-[#0A5A8C] hover:bg-[#0A5A8C] text-white px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(10,90,140,0.45)]"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md transition-colors duration-300 hover:bg-white/5"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#6B7280] hover:text-white text-sm py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="block bg-[#0A5A8C] text-white px-5 py-3 text-sm font-medium text-center mt-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,90,140,0.45)]"
              >
                Solicitar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
