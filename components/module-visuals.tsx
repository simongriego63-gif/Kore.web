"use client"

import { Heart, Star, Bell, TrendingUp, DollarSign, CreditCard, Receipt, Package, AlertTriangle, BarChart3, PieChart, Activity, ShoppingCart, Scan, Calendar, Clock, Users, Globe, MapPin, Instagram, MessageCircle, ExternalLink, ShoppingBag } from "lucide-react"
import { motion } from "motion/react"

// Loyalty Visual - Points and rewards dashboard
export function LoyaltyVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Panel de Fidelización</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#0A5A8C] rounded-full animate-pulse" />
          <span className="text-[#0A5A8C] text-xs">En vivo</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <Heart size={16} className="text-[#0A5A8C] mb-2" />
          <div className="text-white text-2xl font-bold">2,847</div>
          <div className="text-[#6B7280] text-xs">Clientes activos</div>
        </div>
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <Star size={16} className="text-[#0A5A8C] mb-2" />
          <div className="text-white text-2xl font-bold">156K</div>
          <div className="text-[#6B7280] text-xs">Puntos canjeados</div>
        </div>
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <Bell size={16} className="text-[#0A5A8C] mb-2" />
          <div className="text-white text-2xl font-bold">89%</div>
          <div className="text-[#6B7280] text-xs">Tasa apertura</div>
        </div>
      </div>
      
      <div className="space-y-3">
        {[
          { name: "María García", points: 1240, status: "VIP" },
          { name: "Carlos López", points: 890, status: "Gold" },
          { name: "Ana Martínez", points: 650, status: "Silver" },
        ].map((customer, i) => (
          <div key={i} className="flex items-center justify-between bg-[#0A0A0A] border border-[#2A2A2A] p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center text-[#6B7280] text-xs">
                {customer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-white text-sm">{customer.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0A5A8C] text-sm font-mono">{customer.points} pts</span>
              <span className="text-[#6B7280] text-xs px-2 py-1 bg-[#1A1A1A]">{customer.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Finance Visual - Cash flow dashboard
export function FinanceVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Flujo de Caja Diario</span>
        <span className="text-white text-xs">Hoy, 4 Mayo</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-emerald-500" />
            <span className="text-[#6B7280] text-xs">Ingresos</span>
          </div>
          <div className="text-white text-2xl font-bold">$12,450</div>
        </div>
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} className="text-red-400" />
            <span className="text-[#6B7280] text-xs">Gastos</span>
          </div>
          <div className="text-white text-2xl font-bold">$3,280</div>
        </div>
      </div>
      
      {/* Mini chart */}
      <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4 mb-4">
        <div className="flex items-end justify-between h-24 gap-2">
          {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <motion.div
                className="bg-[#0A5A8C] w-full rounded-sm"
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[#6B7280] text-xs">Lun</span>
          <span className="text-[#6B7280] text-xs">Dom</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-[#0A5A8C]/10 border border-[#0A5A8C]/30 p-3">
        <span className="text-[#0A5A8C] text-sm">Rentabilidad neta</span>
        <span className="text-white text-lg font-bold">+$9,170</span>
      </div>
    </div>
  )
}

// Inventory Visual - Stock management
export function InventoryVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Control de Inventario</span>
        <div className="flex items-center gap-2">
          <AlertTriangle size={14} className="text-amber-500" />
          <span className="text-amber-500 text-xs">3 alertas</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {[
          { name: "SKU-001 Producto A", stock: 245, max: 300, status: "ok" },
          { name: "SKU-002 Producto B", stock: 12, max: 100, status: "low" },
          { name: "SKU-003 Producto C", stock: 5, max: 50, status: "critical" },
          { name: "SKU-004 Producto D", stock: 180, max: 200, status: "ok" },
          { name: "SKU-005 Producto E", stock: 8, max: 80, status: "low" },
        ].map((item, i) => (
          <div key={i} className="bg-[#0A0A0A] border border-[#2A2A2A] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm">{item.name}</span>
              <span className={`text-xs px-2 py-0.5 ${
                item.status === 'critical' ? 'bg-red-500/20 text-red-400' :
                item.status === 'low' ? 'bg-amber-500/20 text-amber-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}>
                {item.stock} uds
              </span>
            </div>
            <div className="h-1.5 bg-[#1A1A1A] overflow-hidden">
              <div 
                className={`h-full transition-all ${
                  item.status === 'critical' ? 'bg-red-500' :
                  item.status === 'low' ? 'bg-amber-500' :
                  'bg-[#0A5A8C]'
                }`}
                style={{ width: `${(item.stock / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Analytics Visual - Metrics dashboard
export function AnalyticsVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Dashboard Analítico</span>
        <span className="text-white text-xs">Últimos 30 días</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <BarChart3 size={16} className="text-[#0A5A8C] mb-2" />
          <div className="text-white text-2xl font-bold">$284K</div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 text-xs">+12.5%</span>
            <span className="text-[#6B7280] text-xs">vs mes anterior</span>
          </div>
        </div>
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
          <Activity size={16} className="text-[#0A5A8C] mb-2" />
          <div className="text-white text-2xl font-bold">1,847</div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 text-xs">+8.2%</span>
            <span className="text-[#6B7280] text-xs">transacciones</span>
          </div>
        </div>
      </div>
      
      {/* Mini pie chart representation */}
      <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-4">
        <span className="text-[#6B7280] text-xs block mb-4">Distribución por categoría</span>
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-20 h-20 transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#1A1A1A" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0A5A8C" strokeWidth="3" strokeDasharray="40 60" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-40" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#6B7280" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-65" />
            </svg>
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0A5A8C]" />
                <span className="text-[#6B7280] text-xs">Servicios</span>
              </div>
              <span className="text-white text-xs">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white" />
                <span className="text-[#6B7280] text-xs">Productos</span>
              </div>
              <span className="text-white text-xs">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6B7280]" />
                <span className="text-[#6B7280] text-xs">Otros</span>
              </div>
              <span className="text-white text-xs">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// POS Visual - Sales interface
export function POSVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Punto de Venta</span>
        <div className="flex items-center gap-2">
          <Scan size={14} className="text-[#0A5A8C]" />
          <span className="text-[#0A5A8C] text-xs">Escanear</span>
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        {[
          { name: "Servicio Premium", qty: 1, price: 150 },
          { name: "Producto Especial", qty: 2, price: 45 },
          { name: "Add-on Extra", qty: 1, price: 25 },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between bg-[#0A0A0A] border border-[#2A2A2A] p-3">
            <div>
              <span className="text-white text-sm block">{item.name}</span>
              <span className="text-[#6B7280] text-xs">Cant: {item.qty}</span>
            </div>
            <span className="text-white text-sm font-mono">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-[#2A2A2A] pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-[#6B7280] text-sm">Subtotal</span>
          <span className="text-white text-sm">$265.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280] text-sm">IVA (21%)</span>
          <span className="text-white text-sm">$55.65</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-[#2A2A2A]">
          <span className="text-white font-medium">Total</span>
          <span className="text-[#0A5A8C] text-xl font-bold">$320.65</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="bg-[#1A1A1A] border border-[#2A2A2A] text-white py-3 text-sm flex items-center justify-center gap-2">
          <CreditCard size={16} />
          Tarjeta
        </button>
        <button className="bg-[#0A5A8C] text-white py-3 text-sm flex items-center justify-center gap-2">
          <Receipt size={16} />
          Cobrar
        </button>
      </div>
    </div>
  )
}

// Booking Visual - Calendar and appointments
export function BookingVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Agenda del Día</span>
        <span className="text-white text-xs">4 Mayo, 2026</span>
      </div>
      
      {/* Mini calendar */}
      <div className="grid grid-cols-7 gap-1 mb-6 text-center">
        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, i) => (
          <span key={i} className="text-[#6B7280] text-xs py-1">{day}</span>
        ))}
        {[28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((day, i) => (
          <span 
            key={i} 
            className={`text-xs py-1 ${
              day === 4 ? 'bg-[#0A5A8C] text-white' : 
              day < 1 ? 'text-[#2A2A2A]' : 'text-[#6B7280]'
            }`}
          >
            {day < 1 ? '' : day}
          </span>
        ))}
      </div>
      
      <div className="space-y-2">
        {[
          { time: "09:00", client: "Laura Sánchez", service: "Consulta", duration: "30min" },
          { time: "10:00", client: "Pedro Ruiz", service: "Servicio A", duration: "1h" },
          { time: "11:30", client: "Elena Torres", service: "Servicio B", duration: "45min" },
          { time: "14:00", client: "Miguel Ángel", service: "Premium", duration: "2h" },
        ].map((appointment, i) => (
          <div key={i} className="flex gap-4 bg-[#0A0A0A] border border-[#2A2A2A] p-3">
            <div className="text-[#0A5A8C] text-sm font-mono w-12">{appointment.time}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">{appointment.client}</span>
                <span className="text-[#6B7280] text-xs">{appointment.duration}</span>
              </div>
              <span className="text-[#6B7280] text-xs">{appointment.service}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-[#0A5A8C]" />
          <span className="text-[#6B7280] text-xs">4 citas hoy</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#0A5A8C]" />
          <span className="text-[#6B7280] text-xs">4h 15min ocupadas</span>
        </div>
      </div>
    </div>
  )
}

// Web Visual - Mini website preview inside a browser frame
export function WebVisual() {
  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 lg:p-5 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-[#0A0A0A] border border-[#2A2A2A] rounded-md px-3 py-1.5">
          <Globe size={12} className="text-[#0A5A8C]" />
          <span className="text-[#6B7280] text-xs font-mono">www.tunegocio.com</span>
        </div>
      </div>

      {/* Website canvas */}
      <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-md overflow-hidden">
        {/* Site nav */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1A1A1A]">
          <span className="text-white text-sm font-bold tracking-tight">Aurora<span className="text-[#0A5A8C]">.</span></span>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[#9CA3AF] text-[11px]">Inicio</span>
            <span className="text-[#9CA3AF] text-[11px]">Menú</span>
            <span className="text-[#9CA3AF] text-[11px]">Nosotros</span>
            <span className="text-white text-[11px] bg-[#0A5A8C] px-3 py-1 rounded-full">Reservar</span>
          </div>
        </div>

        {/* Hero */}
        <div className="relative px-5 py-8 text-center bg-[radial-gradient(ellipse_at_top,_rgba(10,90,140,0.18),_transparent_70%)]">
          <span className="text-[#0A5A8C] text-[10px] font-mono uppercase tracking-[0.2em]">Café de especialidad</span>
          <h3 className="text-white text-xl font-bold mt-2 leading-tight">Sabor que enamora<br />en cada taza</h3>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-white text-[11px] bg-[#0A5A8C] px-4 py-1.5 rounded-full">Ver carta</span>
            <span className="text-[#9CA3AF] text-[11px] border border-[#2A2A2A] px-4 py-1.5 rounded-full">Cómo llegar</span>
          </div>
        </div>

        {/* Catalog cards */}
        <div className="grid grid-cols-3 gap-3 px-5 pb-5">
          {[
            { name: "Espresso", price: "$3.50" },
            { name: "Latte", price: "$4.80" },
            { name: "Cold Brew", price: "$5.20" },
          ].map((product, i) => (
            <div key={i} className="bg-[#121212] border border-[#1A1A1A] rounded-md overflow-hidden">
              <div className="h-12 bg-[linear-gradient(135deg,_rgba(10,90,140,0.35),_rgba(13,148,136,0.2))] flex items-center justify-center">
                <ShoppingBag size={16} className="text-white/70" />
              </div>
              <div className="p-2">
                <div className="text-white text-[11px] font-medium truncate">{product.name}</div>
                <div className="text-[#0A5A8C] text-[11px] font-mono">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Link Visual - Linktree-style bio page
export function LinkVisual() {
  const links = [
    { label: "Reservar una mesa", icon: Calendar },
    { label: "Ver nuestro menú", icon: ShoppingBag },
    { label: "Cómo llegar", icon: MapPin },
    { label: "Escribinos por WhatsApp", icon: MessageCircle },
    { label: "Seguinos en Instagram", icon: Instagram },
  ]

  return (
    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 lg:p-8 transition-all duration-300 hover:border-[#0A5A8C]/40 hover:shadow-[0_12px_50px_-12px_rgba(10,90,140,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#6B7280] text-xs uppercase tracking-wider">Bio Link</span>
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-[#0A5A8C]" />
          <span className="text-[#0A5A8C] text-xs font-mono">/aurora.cafe</span>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,_rgba(10,90,140,0.6),_rgba(13,148,136,0.4))] border border-[#0A5A8C]/40 flex items-center justify-center mb-3">
          <span className="text-white text-lg font-bold">A</span>
        </div>
        <span className="text-white text-sm font-bold">@aurora.cafe</span>
        <span className="text-[#6B7280] text-xs mt-1">Café de especialidad · Palermo, BA</span>
      </div>

      {/* Link buttons */}
      <div className="space-y-3">
        {links.map((link, i) => (
          <motion.div
            key={i}
            className="group flex items-center justify-between bg-[#0A0A0A] border border-[#2A2A2A] rounded-full px-4 py-3 cursor-pointer transition-all duration-300 hover:border-[#0A5A8C]/50 hover:bg-[#0A5A8C]/10"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3">
              <link.icon size={16} className="text-[#0A5A8C]" />
              <span className="text-white text-sm">{link.label}</span>
            </div>
            <ExternalLink size={14} className="text-[#6B7280] transition-all duration-300 group-hover:text-[#0A5A8C] group-hover:translate-x-0.5" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
