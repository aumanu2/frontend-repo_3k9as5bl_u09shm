import { MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/211921144781'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#06090f]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Us / Book Now</h2>
          <p className="mt-3 text-white/70">We respond fast. Let’s build something amazing.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Quick Contact</h3>
            <div className="mt-6 space-y-3 text-white/80">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-blue-500 px-5 py-3 font-semibold text-black shadow-lg">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +211 921 144 781</p>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full name" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <input placeholder="Email" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
            </div>
            <input placeholder="Subject" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
            <textarea rows={4} placeholder="Your message" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
            <div className="flex gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold shadow">
                Send Inquiry
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-blue-500 text-black px-6 py-3 font-semibold shadow-lg">
                Book a Service
              </a>
            </div>
            <p className="text-xs text-white/60">We’ll get back within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
