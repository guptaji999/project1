import React, { useState } from 'react'
import BusinessCard from '../components/BusinessCard'

const OWNER_EMAIL = 'singhbheem75988@gmail.com'
const OWNER_PHONE = '+918433200411'

const Contact = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '', type: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`नई प्रॉपर्टी इन्क्वायरी | New Property Inquiry — ${form.name}`)
    const body = encodeURIComponent(
      `नमस्ते भीम जी,\n\nएक नई प्रॉपर्टी इन्क्वायरी आई है:\n\n` +
      `👤 नाम: ${form.name}\n📞 मोबाइल: ${form.phone}\n✉️ ईमेल: ${form.email || 'नहीं दिया'}\n` +
      `📍 क्षेत्र: ${form.location || 'नहीं चुना'}\n🏠 संपत्ति प्रकार: ${form.type || 'नहीं चुना'}\n` +
      `💰 बजट: ${form.budget || 'नहीं चुना'}\n📝 संदेश:\n${form.message || 'कोई संदेश नहीं'}\n\n` +
      `---\nयह इन्क्वायरी Choudhary Property Dealer website से आई है।`
    )
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', phone: '', email: '', location: '', type: '', budget: '', message: '' })
  }

  return (
    <div className="overflow-x-hidden">

      <section className="relative py-24 bg-gradient-to-br from-red-950 via-gray-900 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-orange-400 font-hindi font-semibold text-sm uppercase tracking-widest mb-3">!! श्री राधारानी की जय !!</p>
          <h1 className="font-hindi font-black text-5xl lg:text-6xl mb-4">
            <span className="text-white">हमसे </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">संपर्क करें</span>
          </h1>
          <p className="text-gray-400 font-hindi text-lg max-w-xl mx-auto">हम 24 घंटे आपकी मदद के लिए तैयार हैं। कॉल करें या फॉर्म भरें।</p>
        </div>
      </section>

      <section className="py-10 bg-orange-50 border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: '📞', title: 'कॉल करें', detail: '+91 8433200411', link: `tel:${OWNER_PHONE}`, color: 'bg-orange-500', hint: 'क्लिक → सीधा कॉल' },
            { icon: '✉️', title: 'ईमेल करें', detail: OWNER_EMAIL, link: `mailto:${OWNER_EMAIL}`, color: 'bg-red-600', hint: 'क्लिक → ईमेल खुलेगा' },
            { icon: '📍', title: 'पता देखें', detail: 'बरसाना रोड, नन्दगाँव (मथुरा)', link: '#map', color: 'bg-green-600', hint: 'क्लिक → नक्शा देखें' },
          ].map((c, i) => (
            <a key={i} href={c.link} className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-md border border-orange-100 hover:-translate-y-1 transition-transform group">
              <div className={`w-11 h-11 rounded-full ${c.color} flex items-center justify-center text-xl text-white flex-shrink-0 shadow group-hover:scale-110 transition-transform`}>{c.icon}</div>
              <div>
                <p className="font-hindi font-bold text-gray-900 text-sm">{c.title}</p>
                <p className="text-gray-500 text-xs break-all">{c.detail}</p>
                <p className="text-orange-400 text-xs font-hindi mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">{c.hint}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">इन्क्वायरी भेजें</p>
            <h2 className="font-hindi font-black text-3xl text-gray-900 mb-2">अपनी जरूरत बताएं</h2>
            <p className="text-gray-500 font-hindi text-sm mb-6">फॉर्म भरने के बाद आपकी जानकारी सीधे हमारे ईमेल पर भेजी जाएगी।</p>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-300 text-green-800 font-hindi rounded-xl px-5 py-4 animate-fadeIn">
                ✅ धन्यवाद! आपका ईमेल क्लाइंट खुल गया होगा। कृपया ईमेल भेज दें। हम जल्द संपर्क करेंगे।
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">नाम *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="आपका नाम" className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 font-hindi text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">मोबाइल नंबर *</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="मोबाइल नंबर" className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm bg-gray-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">ईमेल</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm bg-gray-50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">क्षेत्र / Location</label>
                  <select name="location" value={form.location} onChange={handleChange} className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-hindi text-sm bg-gray-50">
                    <option value="">क्षेत्र चुनें</option>
                    <option value="नन्दगाँव">नन्दगाँव</option>
                    <option value="बरसाना">बरसाना</option>
                    <option value="गोवर्धन">गोवर्धन</option>
                    <option value="मथुरा">मथुरा</option>
                    <option value="वृन्दावन">वृन्दावन</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">संपत्ति प्रकार</label>
                  <select name="type" value={form.type} onChange={handleChange} className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-hindi text-sm bg-gray-50">
                    <option value="">प्रकार चुनें</option>
                    <option value="मकान">मकान</option>
                    <option value="प्लोट">प्लोट</option>
                    <option value="दुकान">दुकान</option>
                    <option value="खेत">खेत</option>
                    <option value="फ्लेट">फ्लेट</option>
                    <option value="विला/फार्म हाउस">विला/फार्म हाउस</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">बजट / Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange} className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-hindi text-sm bg-gray-50">
                  <option value="">बजट चुनें</option>
                  <option value="₹5–₹10 लाख">₹5 – ₹10 लाख</option>
                  <option value="₹10–₹25 लाख">₹10 – ₹25 लाख</option>
                  <option value="₹25–₹50 लाख">₹25 – ₹50 लाख</option>
                  <option value="₹50 लाख–₹1 करोड़">₹50 लाख – ₹1 करोड़</option>
                  <option value="₹1 करोड़+">₹1 करोड़ से अधिक</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-hindi font-semibold text-gray-700 mb-1">संदेश / Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="अपनी जरूरत विस्तार से बताएं..." className="form-input w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 font-hindi text-sm bg-gray-50 resize-none" />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-xs text-blue-700 font-hindi flex items-start gap-2">
                <span className="text-base mt-0.5">ℹ️</span>
                <span>फॉर्म सबमिट करने पर आपकी जानकारी सीधे <strong>{OWNER_EMAIL}</strong> पर ईमेल के रूप में भेजी जाएगी।</span>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg text-lg font-hindi">
                📨 इन्क्वायरी भेजें | Send Inquiry
              </button>

              <div className="text-center">
                <span className="text-gray-400 text-sm font-hindi">या सीधे कॉल करें</span>
                <a href={`tel:${OWNER_PHONE}`} className="flex items-center justify-center gap-2 mt-2 border-2 border-orange-400 text-orange-600 font-bold py-3 rounded-xl hover:bg-orange-50 transition-colors font-hindi text-base">
                  📞 +91 8433200411 — अभी कॉल करें
                </a>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <BusinessCard />
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="font-hindi font-bold text-xl text-gray-900 mb-4">कार्यालय समय</h3>
              <ul className="space-y-2 text-sm font-hindi text-gray-700">
                <li className="flex justify-between"><span>सोमवार – शनिवार</span><span className="font-bold text-orange-600">9:00 AM – 7:00 PM</span></li>
                <li className="flex justify-between"><span>रविवार</span><span className="font-bold text-orange-600">10:00 AM – 4:00 PM</span></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-orange-200 space-y-2">
                <a href={`tel:${OWNER_PHONE}`} className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-800 transition-colors text-sm">
                  📞 +91 8433200411 — क्लिक करके कॉल करें
                </a>
                <a href={`mailto:${OWNER_EMAIL}`} className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors text-xs break-all">
                  ✉️ {OWNER_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-hindi font-semibold text-sm uppercase tracking-widest mb-2">हमारा पता</p>
            <h2 className="font-hindi font-black text-3xl text-gray-900 mb-2">ऑफिस का स्थान</h2>
            <p className="text-gray-500 font-hindi text-sm">बरसाना रोड, नन्दगाँव (मथुरा), उत्तर प्रदेश</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0264734069!2d77.36791!3d27.71624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973474e7ccb93a7%3A0xb76e8e8f4d0b4e5e!2sNandgaon%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Choudhary Property Dealer Location"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/?q=Nandgaon,Mathura,UttarPradesh" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-7 py-3 rounded-full hover:scale-105 transition-transform shadow-lg font-hindi">
              📍 Google Maps पर देखें
            </a>
            <a href={`tel:${OWNER_PHONE}`} className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-7 py-3 rounded-full hover:scale-105 transition-transform shadow-lg font-hindi">
              📞 अभी कॉल करें
            </a>
          </div>
        </div>
      </section>

      <a href="https://wa.me/918433200411?text=नमस्ते! मुझे प्रॉपर्टी के बारे में जानकारी चाहिए।"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform"
        title="WhatsApp पर संपर्क करें">💬</a>
    </div>
  )
}

export default Contact
