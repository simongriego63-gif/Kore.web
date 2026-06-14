"use client"

import { KoreLogo } from "./kore-logo"
import { Reveal } from "./motion-primitives"

const footerLinks = {
  producto: [
    { name: "Loyalty", href: "#loyalty" },
    { name: "Finance", href: "#finance" },
    { name: "Inventory", href: "#inventory" },
    { name: "Analytics", href: "#analytics" },
    { name: "POS", href: "#pos" },
    { name: "Booking", href: "#booking" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Casos de Éxito", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
  ],
  soporte: [
    { name: "Centro de Ayuda", href: "#" },
    { name: "Documentación", href: "#" },
    { name: "API", href: "#" },
    { name: "Estado del Sistema", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-white/5 bg-[#0A0A0A]/70 backdrop-blur-xl">
      <Reveal className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <KoreLogo size="sm" className="mb-4" />
            <p className="text-[#6B7280] text-sm leading-relaxed">
              El core de tu gestión.
              <br />
              Software modular integral.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Producto</h4>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="inline-block text-[#6B7280] text-sm hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="inline-block text-[#6B7280] text-sm hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="inline-block text-[#6B7280] text-sm hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="inline-block text-[#6B7280] text-sm hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © 2026 kore. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6B7280] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-[#6B7280] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-sm">
              Twitter
            </a>
            <a href="#" className="text-[#6B7280] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-sm">
              Instagram
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
