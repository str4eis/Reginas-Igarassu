'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/nosso-time', label: 'Nosso Time' },
  { href: '/impacto', label: 'Impacto' },
  { href: '/psicologia-financeira', label: 'Psicologia Financeira' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/parceiros', label: 'Parceiros' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F7F5]/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#8B35C4]" style={{ fontFamily: 'var(--font-playfair)' }}>
          Reginas
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    isActive
                      ? 'text-[#8B35C4]'
                      : 'text-gray-600 hover:text-[#8B35C4]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B35C4] rounded-full" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <Link href="/parceiros" className="hidden md:inline-flex btn-primary text-sm">
          Junte-se a nós
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F7F5] border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${pathname === href ? 'text-[#8B35C4]' : 'text-gray-600'}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/parceiros" className="btn-primary text-sm text-center mt-2" onClick={() => setMenuOpen(false)}>
            Junte-se a nós
          </Link>
        </div>
      )}
    </nav>
  )
}