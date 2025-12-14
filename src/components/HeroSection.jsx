import React from 'react'
import { ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
            YOUR STYLE<br />
            DESERVES<br />
            THE <span className="text-indigo-600">BEST</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Elevate your style with our Nike Products, providing top-notch fashion solutions to meet your every need. Upgrade your look with us today and experience the best in athletic fashion.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center gap-2">
            Shop <ShoppingBag size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="bg-gray-200 rounded-3xl overflow-hidden h-[600px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500">Product Image</p>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default HeroSection