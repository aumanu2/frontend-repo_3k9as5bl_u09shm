export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Prime Digital Marketing Agency is a premium creative studio based in Juba, South Sudan. We combine strategy, design, and data to accelerate brand growth across platforms.
            </p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">Mission</h3>
                <p className="text-white/70 mt-1">Empowering brands in South Sudan with creativity and digital strategy.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">Vision</h3>
                <p className="text-white/70 mt-1">To be the leading digital powerhouse across Africa.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-amber-400/20 to-blue-500/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-6">
              <p className="text-white/80">
                We believe in building brands that speak before you do. Our team delivers standout creative, conversion-focused campaigns, and human-centered digital experiences.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80 text-sm">
                <li>• 4K-ready motion graphics</li>
                <li>• Data-driven paid ads</li>
                <li>• Modern eCommerce builds</li>
                <li>• Social content engines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
