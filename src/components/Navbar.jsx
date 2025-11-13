import { useState } from 'react'
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/211921144781'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-amber-400 shadow-lg shadow-amber-500/20 ring-1 ring-white/10" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Prime Digital</p>
              <p className="text-xs text-white/70">Marketing Agency</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-lg hover:shadow-amber-500/30 transition-shadow"
            >
              <MessageCircle className="h-4 w-4" />
              Book a Service
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-black/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-white/90 hover:text-white py-2"
              >
                {item.label}
                <ChevronRight className="h-4 w-4" />
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Book a Service
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
