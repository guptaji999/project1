import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'होम | Home' },
    { to: '/about', label: 'हमारे बारे में | About' },
    { to: '/contact', label: 'संपर्क | Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 shadow-lg shadow-emerald-900/30 py-2'
          : 'bg-gradient-to-r from-emerald-900/90 via-teal-800/90 to-emerald-900/90 backdrop-blur-sm py-4'
      }`}
    >
      {/* Top gold stripe */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400"></div>

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md border-2 border-yellow-300">
            <span className="text-emerald-900 text-lg font-black">च</span>
          </div>
          <div>
            <p className="font-bold text-sm leading-tight font-hindi text-yellow-300 group-hover:text-yellow-200 transition-colors">
              चौधरी प्रॉपर्टी डीलर
            </p>
            <p className="text-xs text-emerald-300">
              Nandgaon, Mathura
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm font-semibold transition-colors font-hindi ${
                location.pathname === link.to
                  ? 'text-yellow-300'
                  : 'text-emerald-100 hover:text-yellow-300'
              } ${location.pathname === link.to ? 'active' : ''}`}
              style={{ '--nav-underline-color': '#FCD34D' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:8433200411"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-emerald-900 text-sm font-black px-5 py-2 rounded-full hover:scale-105 transition-transform shadow-md"
          >
            📞 8433200411
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-yellow-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-900 border-t border-emerald-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-hindi font-semibold text-base border-b border-emerald-700 pb-2 ${
                location.pathname === link.to ? 'text-yellow-300' : 'text-emerald-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:8433200411"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-emerald-900 text-center py-2 rounded-full font-black"
          >
            📞 Call: 8433200411
          </a>
        </div>
      )}

      {/* Bottom gold stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
    </nav>
  )
}

export default Navbar
