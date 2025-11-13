import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/211921144781'

export default function Footer() {
  const socials = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'X' },
    { Icon: MessageCircle, href: WHATSAPP_LINK, label: 'WhatsApp' },
  ]

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">Prime Digital Marketing</p>
            <p className="text-white/60 text-sm">© 2025 Prime Digital Marketing • Powered by Prime Digital Marketing Agency</p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
