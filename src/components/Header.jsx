import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Inquire', href: '/inquire' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Rectangular Version */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {/* Rectangular Logo Container */}
              <div className="bg-green-600 rounded-xl p-3 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Bio Care Logo" 
                  className="h-12 w-auto max-w-32 object-contain"
                  onError={(e) => {
                    // Fallback if logo doesn't exist
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback rectangular logo design */}
                <div className="hidden items-center justify-center text-white">
                  <div className="text-center">
                    <div className="font-bold text-lg leading-tight">BIO</div>
                    <div className="font-bold text-lg leading-tight">CARE</div>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold text-gray-900 block leading-tight">BIO CARE</span>
                <span className="text-sm text-green-600 block leading-tight">Active Aloe Bio Care</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-green-50">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header