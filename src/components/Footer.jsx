import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      {/* Top Ornament */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center text-2xl font-bold">
              च
            </div>
            <div>
              <h3 className="font-hindi font-bold text-lg text-orange-400">चौधरी प्रॉपर्टी डीलर</h3>
              <p className="text-yellow-300 text-xs">!! श्री राधारानी की जय !!</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-hindi">
            नन्दगाँव, बरसाना, गोवर्धन, मथुरा, वृन्दावन में प्रॉपर्टी खरीदने व बेचने के लिए संपर्क करें।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-orange-400 font-bold text-lg mb-4 font-hindi">त्वरित लिंक</h4>
          <ul className="space-y-2">
            {[
              { to: '/', label: 'होम | Home' },
              { to: '/about', label: 'हमारे बारे में | About' },
              { to: '/contact', label: 'संपर्क | Contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-hindi flex items-center gap-2"
                >
                  <span className="text-orange-500">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-orange-400 font-bold text-lg mb-4 font-hindi">संपर्क जानकारी</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">📍</span>
              <span className="font-hindi">बरसाना रोड, नन्दगाँव (मथुरा), उत्तर प्रदेश</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">📞</span>
              <a href="tel:+918433200411" className="hover:text-orange-400 transition-colors font-bold">+91 8433200411</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✉️</span>
              <a href="mailto:singhbheem75988@gmail.com" className="hover:text-orange-400 transition-colors text-xs">
                singhbheem75988@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">🕐</span>
              <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Services Strip */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-4 text-xs text-gray-400 font-hindi">
          {['खेत', 'मकान', 'दुकान', 'प्लोट', 'फ्लेट', 'विला', 'फार्म हाउस', 'रेंट'].map((s) => (
            <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-orange-900 transition-colors">
              🏠 {s}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Choudhary Property Dealer — Bhim Choudhary Brajwasi. All rights reserved.</p>
        <p className="text-gray-600 mt-1">Designed with ❤️ | Printed by Ratan Press, Kosi # 9259229911</p>
      </div>
    </footer>
  )
}

export default Footer
