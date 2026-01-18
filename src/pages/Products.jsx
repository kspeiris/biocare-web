import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Star, 
  ArrowRight,
  Eye,
  Search,
  Leaf,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Factory,
  Award
} from 'lucide-react'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showQuickView, setShowQuickView] = useState(false)

  // Static data with actual prices 
  const products = [
    {
      id: 1,
      name: 'Aloe Vera Digestive Drink',
      category: 'aloe',
      description: 'Pure aloe vera functional drink for digestive health, immune support, and overall wellness. Made with fresh aloe jelly harvested at peak freshness.',
      image: '/alovera.png',
      price: 'LKR 450',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      features: ['Digestive Health', 'Immune Support', 'Skin Health', 'Natural Detox'],
      sizes: ['250ml', '500ml', '1L'],
      benefits: ['Improves digestion', 'Boosts immunity', 'Enhances skin health', 'Natural detoxification'],
      tag: 'Bestseller',
      ingredients: ['Pure Aloe Vera Gel', 'Natural Sweeteners', 'Purified Water', 'Citric Acid'],
      usage: 'Shake well before use. Consume 50ml daily or as recommended.',
      shelfLife: '12 months',
      storage: 'Store in cool, dry place away from direct sunlight'
    },
    {
      id: 2,
      name: 'Wood Apple Squash',
      category: 'squash',
      description: 'Traditional wood apple squash targeted at digestion and internal cleansing. Rich in fiber and natural nutrients from authentic Sri Lankan wood apples.',
      image: '/wood.png',
      price: 'LKR 380',
      rating: 4.6,
      reviews: 89,
      inStock: true,
      features: ['Digestive Aid', 'Rich in Fiber', 'Natural Cleansing', 'Energy Booster'],
      sizes: ['500ml', '1L'],
      benefits: ['Aids digestion', 'Natural detox', 'Energy booster', 'Rich in antioxidants'],
      tag: 'Traditional',
      ingredients: ['Wood Apple Pulp', 'Cane Sugar', 'Water', 'Natural Spices'],
      usage: 'Mix 1:4 ratio with water. Best served chilled.',
      shelfLife: '18 months',
      storage: 'Store in refrigerator after opening'
    },
    {
      id: 3,
      name: 'Mixed Fruit Blend',
      category: 'fruit',
      description: 'Delicious blend of mango, pineapple, papaya, and passion fruit. All-natural fruit pulp with no added preservatives or artificial flavors.',
      image: 'mix.png',
      price: 'LKR 320',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      features: ['Vitamin Rich', 'Natural Energy', 'Antioxidants', 'No Preservatives'],
      sizes: ['250ml', '500ml'],
      benefits: ['Rich in vitamins', 'Natural energy', 'Antioxidant properties', 'Hydrating'],
      tag: 'Popular',
      ingredients: ['Mango Pulp', 'Pineapple Juice', 'Papaya Puree', 'Passion Fruit'],
      usage: 'Ready to drink. Shake well and serve chilled.',
      shelfLife: '9 months',
      storage: 'Store in cool place, refrigerate after opening'
    },
    {
      id: 4,
      name: 'Tamarind Digestive Drink',
      category: 'functional',
      description: 'Natural tamarind pulp-based drink with laxative properties and refreshing taste. No artificial flavors or colors.',
      image: '/termin.png',
      price: 'LKR 290',
      rating: 4.5,
      reviews: 67,
      inStock: true,
      features: ['Natural Laxative', 'Rich in Antioxidants', 'Vitamin C', 'Digestive Aid'],
      sizes: ['250ml', '500ml'],
      benefits: ['Natural laxative', 'Rich in iron', 'Cooling effect', 'Aids digestion'],
      tag: 'Ayurvedic',
      ingredients: ['Tamarind Pulp', 'Jaggery', 'Water', 'Natural Spices'],
      usage: 'Consume 100ml daily for digestive benefits.',
      shelfLife: '12 months',
      storage: 'Store in cool, dry place'
    },
    {
      id: 5,
      name: 'Mango Delight',
      category: 'fruit',
      description: 'Pure mango pulp-based drink capturing the authentic taste of ripe Sri Lankan mangoes. No artificial colors or flavors.',
      image: 'mango.png',
      price: 'LKR 270',
      rating: 4.4,
      reviews: 92,
      inStock: true,
      features: ['Pure Mango Taste', 'Vitamin A & C', 'Natural Sweetness', 'No Added Sugar'],
      sizes: ['250ml', '500ml'],
      benefits: ['Pure mango flavor', 'Vitamin rich', 'Natural sweetness', 'Refreshing'],
      tag: 'Seasonal',
      ingredients: ['Mango Pulp', 'Water', 'Natural Sweeteners', 'Lime Juice'],
      usage: 'Ready to drink. Best served chilled.',
      shelfLife: '8 months',
      storage: 'Refrigerate after opening'
    },
    {
      id: 6,
      name: 'Bael Fruit Elixir',
      category: 'functional',
      description: 'Traditional bael fruit drink known for antioxidant properties and digestive benefits. Ancient remedy in modern convenient form.',
      image: 'beli.png',
      price: 'LKR 410',
      rating: 4.3,
      reviews: 45,
      inStock: true,
      features: ['Antioxidant Rich', 'Digestive Health', 'Cooling Effect', 'Traditional Recipe'],
      sizes: ['250ml', '500ml'],
      benefits: ['Antioxidant properties', 'Digestive health', 'Cooling effect', 'Natural remedy'],
      tag: 'Traditional',
      ingredients: ['Bael Fruit Pulp', 'Herbal Extracts', 'Water', 'Natural Sweeteners'],
      usage: 'Consume 50-100ml daily for best results.',
      shelfLife: '10 months',
      storage: 'Store in cool, dry place'
    },
    {
      id: 7,
      name: 'Ginco Powder',
      category: 'powder',
      description: 'Special powder/extract made from ginger and coriander. Low in sugar, traditionally used for fever, congestion, and general wellness.',
      image: '/ginco.png',
      price: 'LKR 520',
      rating: 4.6,
      reviews: 78,
      inStock: true,
      features: ['Fever Relief', 'Congestion Aid', 'Low Sugar', 'Herbal Formula'],
      sizes: ['100g', '250g'],
      benefits: ['Fever relief', 'Congestion aid', 'Low sugar content', 'Immune support'],
      tag: 'Medicinal',
      ingredients: ['Ginger Extract', 'Coriander Powder', 'Herbal Blends', 'Natural Sweeteners'],
      usage: 'Mix 1 teaspoon with warm water. Consume 2-3 times daily.',
      shelfLife: '24 months',
      storage: 'Store in airtight container in dry place'
    },
    {
      id: 8,
      name: 'Passion Fruit Mix',
      category: 'fruit',
      description: 'Refreshing passion fruit blend with authentic tropical flavors. Perfect for summer refreshment and natural hydration.',
      image: '/paccion.png',
      price: 'LKR 340',
      rating: 4.5,
      reviews: 63,
      inStock: true,
      features: ['Tropical Flavor', 'Vitamin Rich', 'Refreshing', 'Natural Hydration'],
      sizes: ['250ml', '500ml'],
      benefits: ['Tropical flavor', 'Vitamin rich', 'Refreshing taste', 'Hydrating'],
      tag: 'Tropical',
      ingredients: ['Passion Fruit Juice', 'Other Natural Flavors', 'Water', 'Sweeteners'],
      usage: 'Ready to drink. Serve chilled or over ice.',
      shelfLife: '9 months',
      storage: 'Refrigerate after opening'
    }
  ]

  // Company stats 
  const companyStats = [
    { number: '100,000+', label: 'Monthly Production', icon: Factory },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '99.8%', label: 'Quality Score', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock }
  ]

  // Filter products based on search 
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  // Handle quick view
  const handleQuickView = (product) => {
    setSelectedProduct(product)
    setShowQuickView(true)
  }

  // Handle close quick view
  const handleCloseQuickView = () => {
    setShowQuickView(false)
    setSelectedProduct(null)
  }

  // Static function to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Quick View Modal */}
      {showQuickView && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={handleCloseQuickView}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-500 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {selectedProduct.tag}
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-green-600 font-semibold mb-4 capitalize">{selectedProduct.category} Drink</p>
                
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
                      <div><strong>Shelf Life:</strong> {selectedProduct.shelfLife}</div>
                      <div><strong>Storage:</strong> {selectedProduct.storage}</div>
                      <div className="flex gap-2">
                        <strong>Sizes:</strong>
                        <div className="flex gap-1">
                          {selectedProduct.sizes.map((size, index) => (
                            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {size}
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
                    onClick={handleCloseQuickView}
                  >
                    Inquire About This Product
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Leaf className="h-4 w-4" />
              Premium Functional Beverages
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Our Product Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our complete range of natural, health-focused beverages crafted with traditional wisdom and modern quality standards
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products by name or benefits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-green-600">{filteredProducts.length}</span> products
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Product Tag */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.tag}
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-green-600 text-sm font-medium capitalize">
                    {product.category} Drink
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-100">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Sizes */}
                <div className="flex gap-1 mb-4">
                  {product.sizes.map((size, index) => (
                    <span key={index} className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs border border-gray-200">
                      {size}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-gray-900">{product.price}</span>
                  </div>
                  <button
                    onClick={() => handleQuickView(product)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Company Stats Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Trusted Quality
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose Bio Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Years of excellence in crafting premium functional beverages with uncompromising quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-600">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-green-300" />
                <h3 className="text-3xl font-black">Quality Guaranteed</h3>
              </div>
              <p className="text-green-100 text-lg mb-6 leading-relaxed">
                Every product undergoes rigorous quality checks and is manufactured in our state-of-the-art facility following international standards.
              </p>
              <div className="space-y-3">
                {['100% Natural Ingredients', 'GMP Certified Facility', 'Halal Certified', 'Stringent Quality Control'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-green-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl font-black text-green-300 mb-2">99.8%</div>
                <div className="text-green-200 font-semibold">Quality Assurance Score</div>
                <div className="text-green-100 text-sm mt-2">Across all production batches</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Order CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to Order in Bulk?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Special pricing available for distributors, retailers, and bulk purchases. Contact us for customized quotes and partnership opportunities.
              </p>
              <Link
                to="/inquire"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-base font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                GET BULK PRICING
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products