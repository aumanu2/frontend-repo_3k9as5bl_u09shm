export default function Portfolio() {
  const items = [
    { title: 'E-commerce Launch Campaign', tag: 'Ads' },
    { title: 'Brand Identity System', tag: 'Design' },
    { title: 'Restaurant Social Growth', tag: 'Social' },
    { title: 'SEO Traffic Uplift', tag: 'SEO' },
    { title: 'Short-Form Video Series', tag: 'Video' },
    { title: 'Conversion Landing Pages', tag: 'Web' },
  ]
  return (
    <section id="portfolio" className="relative py-24 bg-[#070b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Work</h2>
          <p className="mt-3 text-white/70">A glimpse into campaigns and designs we craft.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:scale-[1.02] transition">
              <div className="aspect-video bg-[linear-gradient(135deg,#0b1220,transparent)]" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/80">{it.tag}</span>
                <h3 className="mt-3 text-white font-semibold">{it.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-blue-500/10 to-amber-400/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
