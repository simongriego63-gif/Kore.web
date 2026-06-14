"use client"

import { Check, Heart, DollarSign, Package, BarChart3, ShoppingCart, Calendar } from "lucide-react"
import { motion } from "motion/react"
import { 
  LoyaltyVisual, 
  FinanceVisual, 
  InventoryVisual, 
  AnalyticsVisual, 
  POSVisual, 
  BookingVisual,
  WebVisual,
  LinkVisual
} from "@/components/module-visuals"

const easeOut = [0.22, 1, 0.36, 1] as const

const iconMap = {
  heart: Heart,
  dollarSign: DollarSign,
  package: Package,
  barChart: BarChart3,
  shoppingCart: ShoppingCart,
  calendar: Calendar,
} as const

const visualMap = {
  loyalty: LoyaltyVisual,
  finance: FinanceVisual,
  inventory: InventoryVisual,
  analytics: AnalyticsVisual,
  pos: POSVisual,
  booking: BookingVisual,
} as const

type IconName = keyof typeof iconMap

interface Feature {
  title: string
  description: string
}

interface ModuleSectionProps {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  features: Feature[]
  iconName: IconName
  visualType: "loyalty" | "finance" | "inventory" | "analytics" | "pos" | "booking"
  reversed?: boolean
}

export function ModuleSection({
  id,
  number,
  name,
  tagline,
  description,
  features,
  iconName,
  visualType,
  reversed = false,
}: ModuleSectionProps) {
  const Icon = iconMap[iconName]
  const Visual = visualMap[visualType]
  
  return (
    <section 
      id={id} 
      className="py-24 px-6 lg:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <motion.div
            className={reversed ? 'lg:order-2' : ''}
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#0A5A8C] text-sm font-mono">{number}</span>
              <div className="h-px bg-[#2A2A2A] flex-1 max-w-12" />
              <div className="w-10 h-10 bg-[#0A5A8C]/10 border border-[#0A5A8C]/30 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-[#0A5A8C]/20 hover:shadow-[0_0_18px_rgba(10,90,140,0.4)]">
                <Icon size={20} className="text-[#0A5A8C]" />
              </div>
            </div>
            
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Kore <span className="text-[#0A5A8C]">{name}</span>
            </h2>
            
            <p className="text-[#6B7280] text-xl mb-6">{tagline}</p>
            
            <p className="text-[#9CA3AF] leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 group rounded-lg -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-white/[0.03]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: easeOut, delay: 0.15 + i * 0.1 }}
                >
                  <div className="w-5 h-5 bg-[#0A5A8C]/10 border border-[#0A5A8C]/30 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[#0A5A8C] group-hover:scale-110">
                    <Check size={12} className="text-[#0A5A8C] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">{feature.title}</h4>
                    <p className="text-[#6B7280] text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            className={reversed ? 'lg:order-1' : ''}
            initial={{ opacity: 0, x: reversed ? -40 : 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
          >
            {visualType === 'loyalty' ? (
              <>
                {/* Estilos inyectados para la animación del humito */}
                <style>{`
                  @keyframes safe-steam {
                    0% { transform: translateY(0); opacity: 0; }
                    20% { opacity: 0.7; }
                    100% { transform: translateY(-15px); opacity: 0; }
                  }
                  .animate-safe-steam {
                    animation: safe-steam 2.5s ease-out infinite;
                  }
                  .steam-delay-1 { animation-delay: 0s; }
                  .steam-delay-2 { animation-delay: 0.5s; }
                  .steam-delay-3 { animation-delay: 1s; }
                `}</style>

                {/* CONTENEDOR PRINCIPAL (Mantiene desplazamiento a la izquierda lg:-ml-12) */}
                <div className="flex flex-col gap-8 lg:-ml-12 relative z-10 w-full max-w-[450px]">
                  
                  {/* PANEL 1: Tarjeta de Fidelización (Tacitas) */}
                  <div className="border border-white/10 bg-[#121212]/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col gap-5 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_8px_40px_-8px_rgba(10,90,140,0.35)]">
                    {/* Cabecera (Se sacó "En vivo") */}
                    <div className="flex justify-between items-center pb-1">
                      <h4 className="text-xs font-mono text-white uppercase tracking-wider">Tarjeta de Fidelización</h4>
                    </div>

                    {/* Zona de Tacitas (6 llenas, 4 vacías) */}
                    <div className="bg-[#0A0A0A] p-5 rounded-md border border-[#2A2A2A] flex flex-col gap-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#6B7280] text-xs font-mono uppercase tracking-wider">Progreso Cliente</span>
                        <span className="text-[#0A5A8C] text-xs font-bold font-mono border border-[#0A5A8C]/30 bg-[#0A5A8C]/10 px-2 py-0.5 rounded">6/10</span>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-y-5 gap-x-2 justify-items-center mt-2">
                        {[...Array(10)].map((_, i) => {
                          const isFilled = i < 6;
                          const delayClass = `steam-delay-${(i % 3) + 1}`;
                          
                          return (
                            <div key={i} className="flex justify-center items-center">
                              <svg viewBox="0 0 100 100" className={`w-9 h-9 ${isFilled ? 'scale-110' : 'scale-100'}`}>
                                <path d="M20,35 H80 V75 Q80,90 65,90 H35 Q20,90 20,75 Z" fill="none" stroke={isFilled ? "#0A5A8C" : "#2A2A2A"} strokeWidth="5" />
                                {isFilled && <path d="M24,39 H76 V73 Q76,86 64,86 H36 Q24,86 24,73 Z" fill="#0A5A8C" />}
                                <path d="M80,45 Q95,45 95,60 T80,75" fill="none" stroke={isFilled ? "#0A5A8C" : "#2A2A2A"} strokeWidth="6" strokeLinecap="round" />
                                {isFilled && (
                                  <g className={`animate-safe-steam ${delayClass}`}>
                                    <path d="M38,30 V12 M50,32 V8 M62,30 V16" stroke="#0A5A8C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                                  </g>
                                )}
                              </svg>
                            </div>
                          )
                        })}
                      </div>
                      <p className="text-[#6B7280] text-[10px] text-center mt-3 uppercase tracking-wider">Completa 10 tazas y lleva tu bebida gratis</p>
                    </div>
                  </div>

                  {/* PANEL 2: Sistema de Puntos (Lista y Premios) */}
                  <div className="border border-white/10 bg-[#121212]/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col gap-6 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_8px_40px_-8px_rgba(10,90,140,0.35)]">
                    {/* Cabecera (Cambió texto, se sacó "En vivo") */}
                    <div className="flex justify-between items-center pb-1">
                      <h4 className="text-xs font-mono text-white uppercase tracking-wider">Sistema de Puntos</h4>
                    </div>

                    {/* Lista de Clientes */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2A2A2A]">
                            <span className="text-white font-mono text-xs">MG</span>
                          </div>
                          <span className="text-white text-sm font-medium">María García</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[#0A5A8C] text-sm font-medium">1240 pts</span>
                          <span className="px-2 py-0.5 border border-[#0A5A8C] text-[#0A5A8C] rounded-full text-[10px] font-mono">VIP</span>
                        </div>
                      </div>

                      <hr className="border-t border-[#2A2A2A] opacity-50" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#2A2A2A]">
                            <span className="text-[#6B7280] font-mono text-xs">CL</span>
                          </div>
                          <span className="text-[#6B7280] text-sm font-medium">Carlos López</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[#6B7280] text-sm font-medium">890 pts</span>
                          <span className="px-2 py-0.5 border border-[#2A2A2A] text-[#6B7280] rounded-full text-[10px] font-mono">Gold</span>
                        </div>
                      </div>
                    </div>

                    {/* Recuadros de Recompensas */}
                    <div className="grid grid-cols-2 gap-3 mt-1">
                      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <span className="text-white text-sm font-bold">100 pts</span>
                        <span className="text-[#0A5A8C] text-[11px] font-mono mt-1 uppercase tracking-wider">10% Descuento</span>
                      </div>
                      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <span className="text-white text-sm font-bold">1000 pts</span>
                        <span className="text-[#0A5A8C] text-[11px] font-mono mt-1 uppercase tracking-wider">1 Café Gratis</span>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            ) : (
              <Visual />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
