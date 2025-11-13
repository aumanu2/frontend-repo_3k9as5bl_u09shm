import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/211921144781"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-blue-500 px-5 py-3 font-semibold text-black shadow-xl"
      >
        Book a Service
      </a>
    </div>
  )
}

export default App
