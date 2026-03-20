import React from 'react'
import myPhoto from '../assets/my_photo.jpeg'

const BusinessCard = () => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Card */}
      <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-2xl border border-orange-200">
        {/* Top decorative bar */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 mandala-pattern pointer-events-none"></div>

        <div className="p-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-green-800 font-hindi font-semibold text-sm">!! श्री राधारानी की जय !!</p>
          </div>

          <div className="flex items-center gap-5">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
                <img
                  src={myPhoto}
                  alt="Bhim Choudhary Brajwasi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                ✓
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-orange-700 font-hindi font-bold text-xl leading-tight">
                भीम चौधरी ब्रजवासी
              </h3>
              <p className="text-red-700 font-display font-semibold text-sm">Bhim Choudhary Brajwasi</p>
              <p className="text-gray-600 font-hindi text-xs mt-1">चौधरी प्रॉपर्टी डीलर</p>
              <p className="text-gray-500 text-xs">Property Consultant & Dealer</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>

          {/* Contact Details — all clickable */}
          <div className="space-y-2">
            <a href="tel:+918433200411" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center text-sm flex-shrink-0 transition-colors">📞</div>
              <span className="text-gray-800 font-bold group-hover:text-orange-600 transition-colors text-sm">+91 8433200411</span>
              <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">कॉल करें →</span>
            </a>
            <a href="mailto:singhbheem75988@gmail.com" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center text-sm flex-shrink-0 transition-colors">✉️</div>
              <span className="text-gray-700 group-hover:text-orange-600 transition-colors text-xs break-all">singhbheem75988@gmail.com</span>
            </a>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">📍</div>
              <p className="text-gray-700 font-hindi text-xs leading-snug">
                बरसाना रोड, नन्दगाँव (मथुरा),<br />उत्तर प्रदेश
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-4 pt-3 border-t border-orange-100">
            <p className="text-center font-hindi text-orange-800 font-semibold text-sm">
              चौधरी प्रॉपर्टी डीलर
            </p>
            <p className="text-center text-gray-500 text-xs">नन्दगाँव, बरसाना, गोवर्धन, मथुरा, वृन्दावन</p>
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500"></div>
      </div>
    </div>
  )
}

export default BusinessCard
