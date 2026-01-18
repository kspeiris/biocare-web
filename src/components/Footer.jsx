import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Rectangular Logo */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-4">
                {/* Rectangular Logo Container */}
                <div className="bg-green-600 rounded-lg p-2 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Bio Care Logo" 
                    className="h-16 w-auto max-w-24 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback rectangular logo */}
                  <div className="hidden items-center justify-center text-white">
                    <div className="text-center">
                      <div className="font-bold text-md leading-tight">BIO</div>
                      <div className="font-bold text-md leading-tight">CARE</div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold block">BIO CARE</span>
                  <span className="text-green-300 text-sm block">Active Aloe Bio Care</span>
                </div>
              </div>
            </Link>
            <p className="text-green-200 mb-4 max-w-md">
              Since 2009, we've been producing premium functional beverages with a focus on quality, 
              health, and wellness. Over 100,000 bottles produced monthly with zero tolerance for non-conforming products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-green-200 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/inquire" className="text-green-200 hover:text-white transition-colors">Bulk Inquire</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span>No. 104/C, Samagi Mawatha,<br />Kaludewala, Panadura,<br />Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+94 710 733 1100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span>biocarecons@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-400">
          <p>&copy; 2009-2024 Bio Care Consumers. All rights reserved.</p>
          <p className="text-sm mt-1">Registered in Panadura, Western Province, Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer