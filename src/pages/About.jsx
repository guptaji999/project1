import React from 'react'
import { Link } from 'react-router-dom'
import myPhoto from '../assets/my_photo.jpeg'

const values = [
  { icon: '🤝', title: 'विश्वास | Trust', desc: 'हम हर लेनदेन में पूरी ईमानदारी और पारदर्शिता रखते हैं। आपकी मेहनत की कमाई सुरक्षित है।' },
  { icon: '⚡', title: 'त्वरित सेवा | Speed', desc: 'हम जानते हैं कि समय कीमती है। हम जल्दी और कुशलतापूर्वक आपकी जरूरत पूरी करते हैं।' },
  { icon: '💰', title: 'उचित मूल्य | Fair Price', desc: 'बाजार की पूरी जानकारी के साथ हम आपको सबसे उचित मूल्य पर सर्वोत्तम संपत्ति दिलाते हैं।' },
  { icon: '📋', title: 'कानूनी सहायता | Legal', desc: 'रजिस्ट्री, नामांतरण, और सभी कागजी कार्रवाई में हम पूरी सहायता प्रदान करते हैं।' },
]

const services = [
  {
    icon: '🏠',
    title: 'खरीदना | Buy',
    titleEn: 'Property Purchase',
    color: 'from-orange-500 to-red-600',
    points: [
      'मकान, प्लोट, खेत, दुकान, फ्लेट खरीदें',
      'बजट के अनुसार सर्वोत्तम विकल्प',
      'पूर्ण कानूनी जाँच और सत्यापन',
      'रजिस्ट्री तक पूरी सहायता',
    ],
  },
  {
    icon: '💸',
    title: 'बेचना | Sell',
    titleEn: 'Property Sale',
    color: 'from-green-600 to-emerald-700',
    points: [
      'अपनी संपत्ति का उचित मूल्यांकन',
      'सही खरीदार ढूंढने में सहायता',
      'विज्ञापन और मार्केटिंग सुविधा',
      'जल्दी और सुरक्षित बिक्री',
    ],
  },
  {
    icon: '🔑',
    title: 'किराया | Rent',
    titleEn: 'Rental Services',
    color: 'from-blue-600 to-indigo-700',
    points: [
      'दुकान, मकान, फ्लेट किराए पर दें/लें',
      'विश्वसनीय किरायेदार ढूंढना',
      'किराया एग्रीमेंट बनवाने में सहायता',
      'दीर्घकालिक और अल्पकालिक किराया',
    ],
  },
]

const timeline = [
  { year: '2009', event: 'चौधरी प्रॉपर्टी डीलर की स्थापना — नन्दगाँव, मथुरा' },
  { year: '2012', event: 'बरसाना और गोवर्धन क्षेत्र में सेवाएँ विस्तारित' },
  { year: '2016', event: 'मथुरा और वृन्दावन शहर में कार्यालय खोला' },
  { year: '2020', event: '500+ संपत्तियाँ सफलतापूर्वक बेची और 1000+ ग्राहकों का विश्वास' },
  { year: '2024', event: 'ऑनलाइन उपस्थिति और डिजिटल सेवाओं का विस्तार' },
]

const About = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative py-24 bg-gradient-to-br from-red-950 via-gray-900 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-orange-400 font-hindi font-semibold text-sm uppercase tracking-widest mb-3">!! श्री राधारानी की जय !!</p>
          <h1 className="font-hindi font-black text-5xl lg:text-6xl mb-4">
            <span className="text-white">हमारे </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">बारे में</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-hindi leading-relaxed">
            15+ वर्षों से ब्रज भूमि में सम्पत्ति सेवाएं प्रदान करने वाला एक विश्वसनीय नाम
          </p>
        </div>
      </section>

      {/* ══════════════════════════ WHO WE ARE ══════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-300 to-red-300 opacity-20 blur-xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 w-72 h-80">
                <img
                  src={myPhoto}
                  alt="Bhim Choudhary"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-bold text-2xl">15+</p>
                <p className="text-xs font-hindi">वर्षों का अनुभव</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-3">हमारे बारे में</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900 leading-tight mb-5">
              भीम चौधरी ब्रजवासी —<br />
              <span className="text-orange-600">ब्रज भूमि का विश्वसनीय नाम</span>
            </h2>
            <p className="text-gray-700 font-hindi leading-relaxed mb-4">
              <strong>चौधरी प्रॉपर्टी डीलर</strong> की स्थापना भीम चौधरी ब्रजवासी ने नन्दगाँव, मथुरा में की थी। हम पिछले 15+ वर्षों से मथुरा जिले की पवित्र ब्रज भूमि में संपत्ति खरीदने, बेचने और किराए पर देने की विश्वसनीय सेवाएं प्रदान कर रहे हैं।
            </p>
            <p className="text-gray-600 font-hindi leading-relaxed mb-6">
              हमने 500 से अधिक परिवारों को उनके सपनों का घर, दुकान, खेत और प्लोट दिलाया है। हमारी सेवाओं में नन्दगाँव, बरसाना, गोवर्धन, मथुरा और वृन्दावन क्षेत्र शामिल हैं।
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { n: '500+', l: 'संपत्तियाँ बेची' },
                { n: '1000+', l: 'खुश ग्राहक' },
                { n: '5', l: 'क्षेत्रों में सेवा' },
                { n: '15+', l: 'वर्षों का अनुभव' },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100">
                  <p className="text-2xl font-black text-orange-500 font-display">{s.n}</p>
                  <p className="text-xs text-gray-500 font-hindi mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-7 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              अभी संपर्क करें →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">हमारी सेवाएँ</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900 mb-3">
              हम क्या करते हैं?
            </h2>
            <div className="ornament max-w-xs mx-auto">
              <span className="text-yellow-600 text-xs font-hindi">खरीदें, बेचें, किराए पर लें</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 property-card">
                <div className={`bg-gradient-to-r ${s.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-hindi font-black text-2xl">{s.title}</h3>
                  <p className="text-white/70 text-sm">{s.titleEn}</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-700 font-hindi text-sm">
                        <span className="text-orange-500 font-bold mt-0.5">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ VALUES ══════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">हमारे मूल्य</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900">हम क्यों?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-md border border-orange-100 property-card">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-hindi font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-hindi">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TIMELINE ══════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">हमारी यात्रा</p>
            <h2 className="font-hindi font-black text-4xl text-gray-900">हमारा सफर</h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 items-start pl-2 animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-lg">
                    {t.year}
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 flex-1 border border-orange-100 shadow-sm mt-2">
                    <p className="text-gray-800 font-hindi text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CTA ══════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-hindi font-black text-4xl mb-4">अभी संपर्क करें!</h2>
          <p className="text-orange-100 font-hindi text-lg mb-8">आपकी प्रॉपर्टी की हर जरूरत के लिए हम हमेशा तैयार हैं।</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8433200411"
              className="bg-white text-orange-600 font-black px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-lg"
            >
              📞 8433200411
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-colors font-hindi"
            >
              संपर्क फॉर्म →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
