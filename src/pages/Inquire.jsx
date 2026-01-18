import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  CheckCircle, 
  AlertCircle, 
  Package, 
  Users, 
  Truck,
  Award,
  Plus,
  X,
  ShoppingCart,
  ArrowRight
} from 'lucide-react'

const Inquire = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    products: [],
    businessType: '',
    message: '',
    deliveryTimeline: '',
    targetMarket: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [customProduct, setCustomProduct] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const productParam = urlParams.get('product')
    if (productParam) {
      addProduct(productParam)
    }
  }, [location.search])

  const products = [
    { id: 1, name: 'Aloe Vera Drink', category: 'Digestive Health', price: 'LKR 450' },
    { id: 2, name: 'Wood Apple Squash', category: 'Natural Cleanser', price: 'LKR 380' },
    { id: 3, name: 'Tamarind Drink', category: 'Antioxidant', price: 'LKR 290' },
    { id: 4, name: 'Mixed Fruit Blend', category: 'Vitamin Rich', price: 'LKR 320' },
    { id: 5, name: 'Mango Delight', category: 'Fruit Drink', price: 'LKR 270' },
    { id: 6, name: 'Bael Fruit Elixir', category: 'Functional', price: 'LKR 410' },
    { id: 7, name: 'Ginco Powder', category: 'Medicinal', price: 'LKR 520' },
    { id: 8, name: 'Passion Fruit Mix', category: 'Tropical', price: 'LKR 340' }
  ]

  const businessTypes = [
    'Retail Store',
    'Supermarket Chain',
    'Distributor',
    'Wholesaler',
    'Export Business',
    'Healthcare Facility',
    'Hotel/Restaurant',
    'Individual Customer',
    'Other'
  ]

  const deliveryTimelines = [
    'Within 1 week',
    'Within 2 weeks',
    'Within 1 month',
    'Regular monthly supply',
    'Custom schedule'
  ]

  const targetMarkets = [
    'Local Market (Sri Lanka)',
    'Export - Middle East',
    'Export - Europe',
    'Export - Asia',
    'Export - Other',
    'Multiple Markets'
  ]

  const addProduct = (productName, quantity = '') => {
    const product = products.find(p => p.name === productName) || { name: productName, category: 'Custom' }
    if (!selectedProducts.find(p => p.name === productName)) {
      setSelectedProducts(prev => [...prev, { ...product, quantity }])
    }
  }

  const removeProduct = (productName) => {
    setSelectedProducts(prev => prev.filter(p => p.name !== productName))
  }

  const updateProductQuantity = (productName, quantity) => {
    setSelectedProducts(prev => 
      prev.map(p => p.name === productName ? { ...p, quantity } : p)
    )
  }

  const addCustomProduct = () => {
    if (customProduct.trim()) {
      addProduct(customProduct.trim())
      setCustomProduct('')
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company.trim()) newErrors.company = 'Company/Organization is required'
    if (selectedProducts.length === 0) newErrors.products = 'Please select at least one product'
    if (!formData.businessType) newErrors.businessType = 'Please select business type'
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your requirements'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Prepare final data with selected products
    const submissionData = {
      ...formData,
      products: selectedProducts
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Inquiry submitted:', submissionData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center fade-in border border-green-100">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Thank You for Your Inquiry!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We've received your inquiry and our sales team will contact you within 24 hours 
              to discuss pricing, minimum order quantities, and delivery options.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 text-left mb-8 border border-green-200">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                Inquiry Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Information</p>
                  <p className="font-semibold text-gray-900">{formData.name}</p>
                  <p className="text-gray-700">{formData.company}</p>
                  <p className="text-gray-700">{formData.email}</p>
                  {formData.phone && <p className="text-gray-700">{formData.phone}</p>}
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Details</p>
                  <p className="font-semibold text-gray-900">{formData.businessType}</p>
                  {formData.deliveryTimeline && <p className="text-gray-700">Delivery: {formData.deliveryTimeline}</p>}
                  {formData.targetMarket && <p className="text-gray-700">Market: {formData.targetMarket}</p>}
                </div>
              </div>
              
              {selectedProducts.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Selected Products ({selectedProducts.length})</p>
                  <div className="space-y-2">
                    {selectedProducts.map((product, index) => (
                      <div key={index} className="flex justify-between items-center bg-white px-3 py-2 rounded-lg border">
                        <div>
                          <span className="font-medium text-gray-900">{product.name}</span>
                          {product.quantity && <span className="text-gray-600 ml-2">- {product.quantity} units</span>}
                        </div>
                        <span className="text-green-600 font-semibold">{product.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-sm text-blue-700">
                <strong>Urgent inquiries?</strong> Call us directly: <span className="font-bold">+94 710 733 1100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 p-4 rounded-2xl shadow-lg">
              <Package className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Product Inquiry</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interested in Bio Care products? Get bulk order pricing, distributor rates, and custom formulations. 
            Select multiple products for combined pricing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-green-100 transform hover:-translate-y-1 transition-all duration-300">
            <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Distributor Pricing</h3>
            <p className="text-gray-600 text-sm">Competitive rates for bulk orders and partnerships</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-green-100 transform hover:-translate-y-1 transition-all duration-300">
            <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">100,000+ Capacity</h3>
            <p className="text-gray-600 text-sm">Reliable monthly production capacity</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-green-100 transform hover:-translate-y-1 transition-all duration-300">
            <Truck className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Nationwide Delivery</h3>
            <p className="text-gray-600 text-sm">Flexible delivery options across Sri Lanka</p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 fade-in border border-green-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                      errors.company ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-gray-300"
                    placeholder="+94 ___ ___ ___"
                  />
                </div>
              </div>
            </div>

            {/* Product Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Product Selection
              </h3>
              
              {errors.products && (
                <p className="mb-4 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.products}
                </p>
              )}

              {/* Selected Products */}
              {selectedProducts.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Selected Products ({selectedProducts.length})</h4>
                  <div className="space-y-3">
                    {selectedProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-900">{product.name}</span>
                            <span className="text-green-600 font-medium">{product.price}</span>
                            {product.category !== 'Custom' && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <input
                              type="number"
                              placeholder="Estimated quantity (optional)"
                              value={product.quantity || ''}
                              onChange={(e) => updateProductQuantity(product.name, e.target.value)}
                              className="px-3 py-1 border border-gray-300 rounded-lg text-sm w-48"
                              min="1"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeProduct(product.name)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {products.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => addProduct(product.name)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedProducts.find(p => p.name === product.name)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.category}</div>
                      </div>
                      <div className="text-green-600 font-semibold">{product.price}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Product Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={customProduct}
                  onChange={(e) => setCustomProduct(e.target.value)}
                  placeholder="Add custom product or formulation..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomProduct())}
                />
                <button
                  type="button"
                  onClick={addCustomProduct}
                  className="px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Custom
                </button>
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                      errors.businessType ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.businessType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="targetMarket" className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Market
                  </label>
                  <select
                    id="targetMarket"
                    name="targetMarket"
                    value={formData.targetMarket}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-gray-300"
                  >
                    <option value="">Select target market</option>
                    {targetMarkets.map(market => (
                      <option key={market} value={market}>{market}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="deliveryTimeline" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Delivery Timeline
                </label>
                <select
                  id="deliveryTimeline"
                  name="deliveryTimeline"
                  value={formData.deliveryTimeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-gray-300"
                >
                  <option value="">Select delivery timeline</option>
                  {deliveryTimelines.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Requirements & Notes *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                  errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Tell us about your specific requirements, packaging preferences, quality expectations, distribution plans, etc."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Processing Inquiry...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Submit Multi-Product Inquiry
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center pt-4 border-t border-gray-200">
              * Required fields. We'll get back to you within 24 hours with competitive pricing and detailed information.
              For urgent matters, call <strong>+94 710 733 1100</strong>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Inquire