export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Teal aurora */}
      <div className="aurora-blob absolute -top-1/4 -left-1/4 h-[75vh] w-[75vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(13,148,136,0.30),_transparent_62%)] blur-3xl animate-aurora-one" />
      {/* Deep blue aurora */}
      <div className="aurora-blob absolute top-1/4 -right-1/4 h-[85vh] w-[85vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(10,90,140,0.38),_transparent_62%)] blur-3xl animate-aurora-two" />
      {/* Deep purple aurora */}
      <div className="aurora-blob absolute bottom-0 left-1/4 h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,40,180,0.26),_transparent_62%)] blur-3xl animate-aurora-three" />

      {/* Subtle grid texture for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Vignette to keep foreground text legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.55)_100%)]" />
    </div>
  )
}
