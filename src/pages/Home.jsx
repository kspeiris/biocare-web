import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Leaf, 
  Shield, 
  Star, 
  Award, 
  CheckCircle, 
  Play, 
  Factory, 
  Eye,
  Clock,
  Users,
  Quote,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ShoppingCart,
  X
} from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showQuickView, setShowQuickView] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // product data with images
  const featuredProducts = [
    {
      id: 1,
      name: 'Aloe Vera Drink',
      category: 'Digestive Health',
      image:"/alovera.png",
      price: 'LKR 450',
      rating: 4.8,
      reviews: 124,
      tag: 'Bestseller',
      features: ['Digestive Support', 'Immune Boost', 'Skin Health'],
      description: 'Pure aloe vera functional drink for digestive health and overall wellness.',
      benefits: ['Soothes digestion', 'Boosts immunity', 'Promotes skin health'],
      sizes: ['250ml', '500ml', '1L'],
      ingredients: ['Pure Aloe Vera Gel', 'Natural Sweeteners', 'Purified Water'],
      usage: 'Shake well before use. Consume 50ml daily.'
    },
    {
      id: 2,
      name: 'Wood Apple Squash',
      category: 'Natural Cleanser',
      image: '/wood.png',
      price: 'LKR 380',
      rating: 4.6,
      reviews: 89,
      tag: 'Traditional',
      features: ['Rich in Fiber', 'Natural Detox', 'Energy Booster'],
      description: 'Traditional wood apple squash for digestion and internal cleansing.',
      benefits: ['Natural detoxification', 'Rich in fiber', 'Boosts energy'],
      sizes: ['500ml', '1L'],
      ingredients: ['Wood Apple Pulp', 'Cane Sugar', 'Water', 'Natural Spices'],
      usage: 'Mix 1:4 ratio with water. Best served chilled.'
    },
    {
      id: 3,
      name: 'Mixed Fruit Blend',
      category: 'Vitamin Rich',
      image: '/mix.png',
      price: 'LKR 320',
      rating: 4.7,
      reviews: 156,
      tag: 'Popular',
      features: ['Vitamin C', 'Antioxidants', 'Great Taste'],
      description: 'Delicious blend of mango, pineapple, papaya, and passion fruit.',
      benefits: ['Rich in Vitamin C', 'Antioxidant properties', 'Great taste'],
      sizes: ['250ml', '500ml'],
      ingredients: ['Mango Pulp', 'Pineapple Juice', 'Papaya Puree', 'Passion Fruit'],
      usage: 'Ready to drink. Shake well and serve chilled.'
    },
    {
      id: 4,
      name: 'Tamarind Drink',
      category: 'Antioxidant',
      image: '/termin.png',
      price: 'LKR 290',
      rating: 4.5,
      reviews: 67,
      tag: 'Ayurvedic',
      features: ['Natural Laxative', 'Rich in Iron', 'Cooling Effect'],
      description: 'Natural tamarind pulp-based drink with refreshing taste.',
      benefits: ['Natural laxative', 'Rich in iron', 'Cooling effect'],
      sizes: ['250ml', '500ml'],
      ingredients: ['Tamarind Pulp', 'Jaggery', 'Water', 'Natural Spices'],
      usage: 'Consume 100ml daily for digestive benefits.'
    }
  ]

  // Certificates data
  const certificates = [
    {
      id: 1,
      name: 'Food Safety Certified',
      issuer: 'Sri Lanka Standards Institution',
      image: '/cer1.png',
      description: 'Compliant with national food safety regulations and standards',
      year: '2023'
    },
    {
      id: 2,
      name: 'Quality Management',
      issuer: 'ISO 9001:2015',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b4273818?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'International quality management system certification',
      year: '2023'
    },
    {
      id: 3,
      name: 'Halal Certified',
      issuer: 'Religious Certification Board',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Certified Halal production process and ingredients',
      year: '2024'
    },
    {
      id: 4,
      name: 'GMP Certified',
      issuer: 'Good Manufacturing Practices',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Following international Good Manufacturing Practices',
      year: '2023'
    }
  ]

  const stats = [
    { number: '100,000+', label: 'Monthly Production', icon: Factory, color: 'from-green-500 to-green-600' },
    { number: '50,000+', label: 'Happy Customers', icon: Users, color: 'from-blue-500 to-blue-600' },
    { number: '99.8%', label: 'Quality Score', icon: Award, color: 'from-amber-500 to-amber-600' },
    { number: '15+', label: 'Years Experience', icon: Clock, color: 'from-purple-500 to-purple-600' }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Health Store Owner',
      company: 'Colombo',
      content: 'Bio Care products are our best sellers. Customers consistently return for the Aloe Vera Drink, and the quality never disappoints.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Regular Customer',
      company: 'Panadura',
      content: 'The Wood Apple Squash has transformed my digestive health. Natural, effective, and tastes great! Highly recommended.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Distributor Partner',
      company: 'Southern Province',
      content: 'Reliable quality and consistent supply. A trusted partnership that has grown stronger over the years. Excellent service.',
      rating: 5,
      avatar: '🤝'
    }
  ]

  const qualityFeatures = [
    {
      icon: Shield,
      title: 'Quality Certified',
      description: 'ISO 9001:2015 certified manufacturing process'
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'No artificial preservatives or colors'
    },
    {
      icon: Factory,
      title: 'Modern Facility',
      description: 'State-of-the-art production equipment'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in food production'
    }
  ]

  // Static function to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Quick View Function
  const handleQuickView = (product) => {
    setSelectedProduct(product)
    setShowQuickView(true)
  }

  const closeQuickView = () => {
    setShowQuickView(false)
    setSelectedProduct(null)
  }

  return (
    <div className="smooth-scroll">
      {/* Quick View Modal */}
      {showQuickView && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {selectedProduct.tag}
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-green-600 font-semibold mb-4">{selectedProduct.category}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">{renderStars(selectedProduct.rating)}</div>
                  <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {selectedProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Product Info</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div><strong>Sizes:</strong> {selectedProduct.sizes.join(', ')}</div>
                      <div className="flex gap-2">
                        <strong>Features:</strong>
                        <div className="flex flex-wrap gap-1">
                          {selectedProduct.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-black text-gray-900">{selectedProduct.price}</div>
                  <Link
                    to="/inquire"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
                    onClick={closeQuickView}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Bio Care Health Drinks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-green-700/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Enhanced Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 flex items-center justify-center shadow-inner">
                <div className="text-center text-white">
                  <div className="text-4xl font-black tracking-tight">BIO CARE</div>
                  <div className="text-sm opacity-90 mt-1 font-medium">Since 2009</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-green-300" />
              <span className="text-green-300 font-semibold text-lg">Premium Health Beverages</span>
              <Sparkles className="h-8 w-8 text-green-300" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                NATURAL
              </span>
              <span className="text-green-300 block mt-4 drop-shadow-lg">
                WELLNESS DRINKS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light">
              Since 2009, crafting exceptional functional beverages with pure aloe vera and natural ingredients.{' '}
              <span className="font-semibold text-green-300 bg-green-800/30 px-3 py-1 rounded-lg">
                100,000+ bottles monthly.
              </span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('products')}
              className="group inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-green-400"
            >
              EXPLORE PRODUCTS
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <Link
              to="/inquire"
              className="group inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-2xl border-2 border-white/60 hover:border-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              BULK ORDERS
              <Play className="ml-3 h-4 w-4" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 opacity-90">
            {['100% Natural Ingredients', 'Quality Certified', 'Halal Certified', 'Made in Sri Lanka'].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-green-200 bg-green-800/40 px-4 py-3 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span className="text-sm font-semibold">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index}
                  className="text-center group p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose Bio Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of premium quality and traditional wisdom combined with modern manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-2xl group-hover:bg-green-500 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products - Image Focused */}
      <section id="products" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Leaf className="h-4 w-4" />
              Featured Products
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Premium Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular functional beverages - natural, healthy, and delicious
            </p>
          </div>
          
          {/* Image-Focused Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                {/* Product Image - Larger and More Prominent */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                    {product.tag}
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <button
                        onClick={() => handleQuickView(product)}
                        className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg mb-4"
                      >
                        <Eye className="h-4 w-4" />
                        Quick View
                      </button>
                      <Link
                        to="/inquire"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Minimal Product Info */}
                <div className="p-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-green-600 font-semibold text-sm mb-3">{product.category}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-black text-gray-900 mb-3">{product.price}</div>
                    
                    {/* Quick Action */}
                    <Link
                      to="/inquire"
                      className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-base font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              VIEW ALL PRODUCTS
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      
<section className="py-24 bg-gradient-to-b from-green-50 to-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <Award className="h-4 w-4" />
        Quality Certifications
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
        Our Certifications
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Quality certifications and standards that guarantee our commitment to excellence and safety
      </p>
    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
        >
          {/* Certificate Image */}
          <div className="relative aspect-[16/6] overflow-hidden bg-gray-100">
            <img
              src={certificate.image}
              alt={certificate.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Year Badge */}
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {certificate.year}
            </div>
            
            {/* Overlay with Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-blue-300 font-semibold text-lg mb-2">{certificate.issuer}</p>
                <p className="text-sm opacity-90">{certificate.description}</p>
              </div>
            </div>
          </div>

          {/* Certificate Info - Larger text for bigger cards */}
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-900">{certificate.name}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Manufacturing Excellence */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <Factory className="h-12 w-12 text-green-300 mr-4" />
                <h2 className="text-4xl md:text-5xl font-black">Manufacturing Excellence</h2>
              </div>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                State-of-the-art production facility operating under the highest quality standards. 
                Every batch undergoes rigorous testing to ensure purity and effectiveness.
              </p>

              <div className="space-y-4">
                {['100,000+ bottles monthly capacity', 'Zero tolerance quality policy', 'Advanced quality control systems', 'Sustainable manufacturing practices'].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span className="text-green-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-green-700/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-green-600/30 shadow-2xl">
                <Shield className="h-16 w-16 text-green-300 mb-6" />
                <h3 className="text-3xl font-black mb-6">Quality Assurance</h3>
                <p className="text-green-100 text-lg mb-8 leading-relaxed">
                  Every product undergoes 15+ quality checkpoints from raw material selection to final packaging.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '99.8%', label: 'Quality Score' },
                    { value: '15+', label: 'Checkpoints' },
                    { value: '100%', label: 'Natural' },
                    { value: '0%', label: 'Compromise' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-green-600/20 rounded-xl border border-green-500/30 backdrop-blur-sm">
                      <div className="text-2xl font-black text-green-300">{stat.value}</div>
                      <div className="text-green-200 text-sm font-semibold mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Quote className="h-4 w-4" />
              Customer Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              What our customers and partners say about Bio Care products
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                    activeTestimonial === index 
                      ? 'border-green-300 scale-105' 
                      : 'border-gray-100 hover:border-green-200'
                  } transform hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-green-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Experience Quality?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and distributors across Sri Lanka. Experience the difference of premium natural health drinks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-white hover:bg-green-50 text-green-700 text-base font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg transform hover:-translate-y-1"
            >
              EXPLORE PRODUCTS
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-base font-bold rounded-2xl border-2 border-white/60 hover:border-white transition-all duration-300 hover:scale-105 backdrop-blur-sm transform hover:-translate-y-1"
            >
              CONTACT SALES
              <Play className="ml-3 h-4 w-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-100">
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <Phone className="h-5 w-5 text-green-300" />
              <div>
                <div className="font-semibold">+94 710 733 1100</div>
                <div className="text-sm text-green-200">Sales Hotline</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <Mail className="h-5 w-5 text-green-300" />
              <div>
                <div className="font-semibold">biocarecons@gmail.com</div>
                <div className="text-sm text-green-200">Email Us</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-green-300" />
              <div>
                <div className="font-semibold">Panadura</div>
                <div className="text-sm text-green-200">Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home