import Spline from '@splinetool/react-spline'

const WHATSAPP_LINK = 'https://wa.me/211921144781'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20 overflow-hidden bg-gradient-to-b from-black via-[#0a0f1a] to-black">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                Premium Marketing Agency • Juba, South Sudan
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white to-blue-400">
                We Build Brands That Speak Before You Do.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl">
                Creative Marketing • Social Media Growth • Online Store Design
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold shadow hover:shadow-amber-500/20 hover:bg-amber-100/90 transition">Get Started</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-blue-500 text-black px-6 py-3 font-semibold shadow-lg hover:shadow-amber-500/30 transition">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-amber-400/20 to-blue-500/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-3 gap-4">
                {["📈","🎨","📱","🛍️","🔍","🎥"].map((emoji, i) => (
                  <div key={i} className="group aspect-square rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-4xl hover:scale-105 transition-transform">
                    <span className="drop-shadow [text-shadow:0_4px_20px_rgba(255,255,255,0.4)]">{emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
