export default function Reviews() {
  const quotes = [
    {
      name: 'Achan, Retail Founder',
      text: 'Prime Digital grew our Instagram and doubled online orders within a month.',
    },
    { name: 'Lado, Restaurant Owner', text: 'Beautiful designs and fast execution. Our bookings skyrocketed.' },
    { name: 'Mary, Fashion Brand', text: 'The video ads were stunning and results-focused. Highly recommend!' },
  ]
  return (
    <section id="reviews" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Client Reviews</h2>
          <p className="mt-3 text-white/70">What our partners say about working with us.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute -top-4 -right-4 text-5xl select-none">🪄</div>
              <p className="text-white/80">“{q.text}”</p>
              <p className="mt-4 text-white font-semibold">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
