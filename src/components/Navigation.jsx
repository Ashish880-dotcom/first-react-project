import React from 'react'
import { Heart, ShoppingCart, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  return (
    <div>
        <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex gap-8">
            <a href="#" className="text-indigo-600 font-medium border-b-2 border-indigo-600 pb-4">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Men</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Women</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Sports</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Heart size={24} className="text-gray-600 hover:text-gray-900" />
            </button>
            <button className="relative">
              <ShoppingCart size={24} className="text-gray-600 hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="relative">
              <ShoppingBag size={24} className="text-gray-600 hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navigation