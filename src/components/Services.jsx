import { MonitorSmartphone, PenTool, ShoppingBag, LineChart, Video } from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Facebook & Instagram Ads',
    desc: 'Performance-driven campaigns to grow reach and conversions.',
  },
  { icon: PenTool, title: 'Graphic Design & Brand Identity', desc: 'World-class visuals that make your brand unforgettable.' },
  { icon: ShoppingBag, title: 'Online Store & Website Design', desc: 'Fast, beautiful eCommerce and corporate websites.' },
  { icon: LineChart, title: 'Digital Strategy & SEO', desc: 'Data-backed strategies to rank higher and grow faster.' },
  { icon: Video, title: 'Video Ads & Content Creation', desc: 'Scroll-stopping short-form videos and campaigns.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#06090f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-white/70">Future-ready solutions tailored for your brand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-amber-400/40 hover:bg-white/10">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-amber-400/10 to-blue-500/10 rounded-2xl" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-blue-400 text-black shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
