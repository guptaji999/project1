import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import shreeJi from '../assets/shreeji.png'
import BusinessCard from '../components/BusinessCard'

// Animated counter hook
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}

const services = [
  { icon: '🌾', title: 'खेत / Farm Land', desc: 'Agricultural land in Mathura belt along highway' },
  { icon: '🏠', title: 'मकान / House', desc: 'Residential houses in Nandgaon, Barsana & Govardhan' },
  { icon: '🏪', title: 'दुकान / Shop', desc: 'Commercial shops at prime locations near temples' },
  { icon: '📐', title: 'प्लोट / Plot', desc: 'Residential & commercial plots at affordable prices' },
  { icon: '🏢', title: 'फ्लेट / Flat', desc: 'Modern flats in Mathura & Vrindavan city areas' },
  { icon: '🏡', title: 'विला / Villa', desc: 'Luxury villas & farmhouses in scenic Braj region' },
]

const locations = [
  {
    name: 'नन्दगाँव | Nandgaon',
    phone: '8433200411',
    info: 'Head Office — Near Nandgaon Temple, Barsana Road',
    icon: '🛕',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'बरसाना | Barsana',
    phone: '8433200411',
    info: 'Barsana Dham Area — Holy land of Radha Rani',
    icon: '🌸',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'गोवर्धन | Govardhan',
    phone: '8433200411',
    info: 'Near Govardhan Parikrama Marg, Mathura',
    icon: '⛰️',
    color: 'from-green-600 to-emerald-700',
  },
  {
    name: 'मथुरा | Mathura',
    phone: '8433200411',
    info: 'City Area — Krishna Janmabhoomi, Highway properties',
    icon: '🏙️',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'वृन्दावन | Vrindavan',
    phone: '8433200411',
    info: 'Vrindavan Area — Temple corridors & ashrams',
    icon: '🎋',
    color: 'from-teal-500 to-cyan-600',
  },
]

const StatCard = ({ target, label, suffix = '+' }) => {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-orange-500 font-display">{count}{suffix}</p>
      <p className="text-gray-600 text-sm mt-1 font-hindi">{label}</p>
    </div>
  )
}

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════ HERO SECTION ══════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mandala-pattern bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-orange-200 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow-200 opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Side */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <p className="text-green-700 font-hindi font-bold text-lg mb-2">!! श्री राधारानी की जय !!</p>
            <h1 className="font-hindi font-black text-5xl lg:text-6xl leading-tight mb-2">
              <span className="text-gray-900">चौधरी</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                प्रॉपर्टी डीलर
              </span>
            </h1>
            <p className="text-orange-700 font-display font-semibold text-xl mb-1">Choudhary Property Dealer</p>
            <p className="text-pink-700 font-hindi font-bold text-base mb-6">भीम चौधरी ब्रजवासी</p>

            <p className="text-gray-600 font-hindi text-base leading-relaxed mb-8 max-w-lg">
              नन्दगाँव, बरसाना, गोवर्धन, मथुरा, वृन्दावन में हाईवे पर खेत, मकान, दुकान, प्लोट, फ्लेट, विला, फार्म हाउस खरीदने व बेचने के लिए संपर्क करें।
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="tel:+918433200411"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-200 text-lg"
              >
                📞 अभी कॉल करें
              </a>
              <Link
                to="/contact"
                className="border-2 border-orange-500 text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors font-hindi"
              >
                संपर्क करें →
              </Link>
            </div>
          </div>

          {/* Shree Ji Image Side */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glow circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 to-pink-200 blur-3xl opacity-60 scale-110"></div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-300 border-dashed animate-spin" style={{ animationDuration: '20s', margin: '-20px' }}></div>
              {/* Shree Ji */}
              <div className="relative animate-float">
                <img
                  src={shreeJi}
                  alt="Shree Radha Rani"
                  className="w-72 h-72 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(255,107,0,0.3))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 30 1440 40 L1440 80 L0 80 Z" fill="#1A4A2E" opacity="0.08"/>
            <path d="M0 55 C360 95 720 15 1080 55 C1260 75 1380 45 1440 55 L1440 80 L0 80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════ STATS BAR ══════════════════════════ */}
      <section className="bg-white py-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard target={500} label="संपत्तियाँ बेची" />
          <StatCard target={15} label="वर्षों का अनुभव" />
          <StatCard target={5} label="क्षेत्र कवर" />
          <StatCard target={1000} label="खुश ग्राहक" />
        </div>
      </section>

      {/* ══════════════════════════ HOUSE SHOWCASE ══════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-hindi text-sm font-semibold uppercase tracking-widest mb-2">हमारी सेवाएँ</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900 mb-3">
              क्या खरीदना है, क्या बेचना है?
            </h2>
            <div className="ornament max-w-xs mx-auto">
              <span className="text-yellow-600 text-xs font-hindi">ब्रज भूमि की संपत्तियाँ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="property-card bg-white rounded-2xl p-6 shadow-md border border-orange-100 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-hindi font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center text-orange-500 text-sm font-semibold hover:text-orange-700 cursor-pointer">
                  जानकारी लें →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ANIMATED HOUSE VISUAL ══════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-30"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-3">आपका सपना घर</p>
              <h2 className="font-hindi font-black text-4xl text-gray-900 leading-tight mb-5">
                ब्रज भूमि में <span className="text-orange-500">सपनों का घर</span> ढूंढें
              </h2>
              <p className="text-gray-600 font-hindi text-base leading-relaxed mb-6">
                हम आपको मथुरा जिले की सबसे पवित्र भूमि — नन्दगाँव, बरसाना, गोवर्धन और वृन्दावन में सर्वोत्तम प्रॉपर्टी दिलाने में मदद करते हैं। हमारे पास हर बजट और हर जरूरत के लिए प्रॉपर्टी उपलब्ध है।
              </p>
              <ul className="space-y-3 mb-8">
                {['पारदर्शी लेनदेन', 'सरकारी रजिस्ट्री सहायता', 'उचित मूल्य की गारंटी', 'हर कदम पर मार्गदर्शन'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-hindi">
                    <span className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-7 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                हमारे बारे में जानें →
              </Link>
            </div>

            {/* SVG Animated House */}
            <div className="flex justify-center">
              <div className="house-card animate-float">
                <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm drop-shadow-2xl">
                  {/* Sky */}
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#FDE68A" />
                    </linearGradient>
                    <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F9FAFB" />
                    </linearGradient>
                  </defs>
                  {/* Background */}
                  <rect width="400" height="350" rx="20" fill="url(#skyGrad)" />
                  {/* Sun */}
                  <circle cx="340" cy="60" r="35" fill="#FCD34D" opacity="0.8" />
                  {/* Clouds */}
                  <ellipse cx="80" cy="70" rx="40" ry="20" fill="white" opacity="0.7" />
                  <ellipse cx="110" cy="60" rx="30" ry="18" fill="white" opacity="0.7" />
                  {/* Ground */}
                  <ellipse cx="200" cy="310" rx="160" ry="20" fill="#86EFAC" opacity="0.5" />
                  <rect x="40" y="305" width="320" height="30" rx="5" fill="#6EE7B7" opacity="0.3" />
                  {/* House Main Body */}
                  <rect x="80" y="180" width="240" height="130" rx="5" fill="url(#wallGrad)" stroke="#E5E7EB" strokeWidth="2" />
                  {/* Roof */}
                  <polygon points="60,185 200,80 340,185" fill="url(#roofGrad)" />
                  <polygon points="60,185 200,80 340,185" fill="none" stroke="#7F1D1D" strokeWidth="2" />
                  {/* Chimney */}
                  <rect x="270" y="100" width="25" height="50" fill="#B91C1C" />
                  <rect x="265" y="96" width="35" height="10" rx="2" fill="#991B1B" />
                  {/* Door */}
                  <rect x="170" y="240" width="60" height="70" rx="5 5 0 0" fill="#92400E" />
                  <circle cx="222" cy="277" r="4" fill="#FCD34D" />
                  {/* Windows */}
                  <rect x="95" y="210" width="55" height="45" rx="5" fill="#BAE6FD" stroke="#93C5FD" strokeWidth="2" />
                  <line x1="122" y1="210" x2="122" y2="255" stroke="#93C5FD" strokeWidth="1.5" />
                  <line x1="95" y1="232" x2="150" y2="232" stroke="#93C5FD" strokeWidth="1.5" />
                  <rect x="250" y="210" width="55" height="45" rx="5" fill="#BAE6FD" stroke="#93C5FD" strokeWidth="2" />
                  <line x1="277" y1="210" x2="277" y2="255" stroke="#93C5FD" strokeWidth="1.5" />
                  <line x1="250" y1="232" x2="305" y2="232" stroke="#93C5FD" strokeWidth="1.5" />
                  {/* Garden */}
                  <circle cx="120" cy="305" r="12" fill="#4ADE80" />
                  <rect x="118" y="305" width="4" height="15" fill="#6B7280" />
                  <circle cx="280" cy="305" r="12" fill="#4ADE80" />
                  <rect x="278" y="305" width="4" height="15" fill="#6B7280" />
                  {/* Path */}
                  <polygon points="185,310 215,310 220,335 180,335" fill="#E5E7EB" />
                  {/* Hindi text */}
                  <text x="200" y="345" textAnchor="middle" fontSize="11" fill="#92400E" fontFamily="sans-serif">🏠 आपका सपनों का घर</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ LOCATIONS ══════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-red-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">हमारे क्षेत्र</p>
            <h2 className="font-hindi font-black text-4xl text-white mb-3">
              हम कहाँ काम करते हैं?
            </h2>
            <p className="text-gray-400 font-hindi">इन पवित्र स्थानों पर हमारी सेवाएँ उपलब्ध हैं</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${loc.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {loc.icon}
                </div>
                <h3 className="font-hindi font-bold text-lg text-white mb-1">{loc.name}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{loc.info}</p>
                <a
                  href={`tel:+91${loc.phone}`}
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors group"
                >
                  <span className="w-7 h-7 rounded-full bg-orange-500/20 group-hover:bg-orange-500 flex items-center justify-center transition-colors text-base">📞</span>
                  {loc.phone}
                  <span className="text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">कॉल करें →</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ BUSINESS CARD ══════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">संपर्क</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900 mb-3">हमसे मिलें</h2>
            <div className="ornament max-w-xs mx-auto">
              <span className="text-yellow-600 text-xs font-hindi">भीम चौधरी ब्रजवासी</span>
            </div>
          </div>
          <BusinessCard />
        </div>
      </section>

    </div>
  )
}

export default Home
