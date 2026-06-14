"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ModulesOverview } from "@/components/modules-overview"
import { ModuleSection } from "@/components/module-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/aurora-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <Navigation /> 
      <HeroSection />
      <ModulesOverview />
      
      {/* 01 | LOYALTY */}
      <ModuleSection
        id="loyalty"
        number="01"
        name="Loyalty"
        tagline="Fidelización real y activa para tu comunidad."
        description="Convertimos cada visita en una oportunidad de conexión. Nuestra aplicación de fidelización permite premiar a tus clientes de forma automática, creando una comunidad que valora tu marca y elige volver."
        features={[
          {
            title: "Sistema de puntos digital",
            description: "Olvidate de las tarjetas de cartón. Tus clientes suman puntos automáticamente con cada compra."
          },
          {
            title: "Recompensas automáticas",
            description: "Definí los premios (descuentos, productos gratis) y el sistema avisa al cliente cuando los alcanza."
          },
          {
            title: "Base de clientes en vivo",
            description: "Conocé quiénes son tus mejores clientes y cuánto consumen para armar promociones inteligentes."
          }
        ]}
        iconName="heart"
        visualType="loyalty"
      />

      {/* 02 | CONTROL (La fusión) */}
      <ModuleSection
        id="finance"
        number="02"
        name="Control"
        tagline="Finanzas, stock y métricas en un solo lugar."
        description="Olvidate de tener tres sistemas distintos. Control centraliza tu flujo de caja diario, actualiza tu inventario en tiempo real con cada venta y te muestra gráficos claros para que entiendas la rentabilidad de tu proyecto sin tener que ser contador."
        features={[
          {
            title: "Caja y métricas unificadas",
            description: "Registrá ingresos, egresos y calculá tu rentabilidad neta automáticamente sin tocar un Excel."
          },
          {
            title: "Stock en tiempo real",
            description: "El sistema descuenta productos al instante y te avisa cuando te estás quedando sin insumos clave."
          },
          {
            title: "Gráficos inteligentes",
            description: "Visualizá de forma simple las tendencias de ventas para descubrir qué es lo que más elige tu público."
          }
        ]}
        iconName="dollarSign"
        visualType="finance"
        reversed={true}
      />

      {/* 03 | BOOKING */}
      <ModuleSection
        id="booking"
        number="03"
        name="Booking"
        tagline="Agenda inteligente y gestión de turnos sin fricción."
        description="Simplificá la manera en que tus clientes reservan. Un sistema 24/7 que organiza tu calendario, envía recordatorios automáticos para evitar ausencias y te deja enfocarte en dar un buen servicio en lugar de contestar mensajes todo el día."
        features={[
          {
            title: "Reservas 24/7",
            description: "Tus clientes agendan solos desde su celular en cualquier momento, viendo únicamente tus horarios disponibles."
          },
          {
            title: "Recordatorios automáticos",
            description: "Notificaciones directas para reducir cancelaciones y mantener tu agenda siempre optimizada."
          },
          {
            title: "Gestión de equipo",
            description: "Asigná turnos, bloqueá horarios y organizá el día a día de tu proyecto en un par de clics."
          }
        ]}
        iconName="calendar"
        visualType="booking"
      />

      {/* 04 | WEB */}
      <ModuleSection
        id="web"
        number="04"
        name="Web"
        tagline="Tu identidad digital, profesional y autogestionable."
        description="Llevá tu marca a internet sin depender de plataformas de terceros ni lidiar con código. Creamos una página web rápida y segura, diseñada a medida para que puedas mostrar tu catálogo, servicios o menú respetando al 100% tu estética."
        features={[
          {
            title: "Diseño a medida",
            description: "Estética limpia y profesional (modo oscuro o claro) que respira la identidad única de tu proyecto."
          },
          {
            title: "Catálogo y Menú digital",
            description: "Exhibí lo que hacés de forma clara, con imágenes y descripciones fáciles de actualizar."
          },
          {
            title: "Cero mantenimiento técnico",
            description: "Nosotros nos encargamos de los servidores y la seguridad. Vos solo te preocupás por tu contenido."
          }
        ]}
        iconName="package"
        visualType="pos"
        reversed={true}
      />

      {/* 05 | LINK */}
      <ModuleSection
        id="link"
        number="05"
        name="Link"
        tagline="Un solo link para conectar todo tu mundo digital."
        description="Optimizá la biografía de tus redes sociales. Una landing page minimalista y rapidísima que agrupa tu WhatsApp, tu web, tus reservas y tus redes en un solo lugar. La puerta de entrada perfecta para convertir seguidores en clientes."
        features={[
          {
            title: "Conexión total",
            description: "Agregá botones directos hacia tus reservas, menú, ubicación en el mapa y contacto directo."
          },
          {
            title: "Personalización de marca",
            description: "Colores, logos y tipografías que mantienen la coherencia visual con el resto de tus aplicaciones."
          },
          {
            title: "Métricas integradas",
            description: "Descubrí qué botones tocan más tus clientes para entender qué es lo que más buscan."
          }
        ]}
        iconName="barChart"
        visualType="analytics"
      />

      <CTASection />
      <Footer />
    </main>
  )
}
