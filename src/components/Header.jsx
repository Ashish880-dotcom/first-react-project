import React from 'react'
import { Search, Fingerprint } from 'lucide-react';

const Header = () => {
  return (
    <div>
        <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center">
            <div className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
              CJ
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Fingerprint size={24} />
            <span className="font-medium">Log In</span>
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header