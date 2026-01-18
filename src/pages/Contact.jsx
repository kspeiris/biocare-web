import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight,
  Users,
  Package,
  MessageCircle,
  Sparkles,
  Building,
  Globe
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Us',
      details: 'biocarecons@gmail.com',
      description: 'Send us an email anytime',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Sales Hotline',
      details: '+94 710 733 1100',
      description: 'Mon-Sat from 8am to 6pm',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Office Line',
      details: '+94 38 222 5089',
      description: 'For general inquiries',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Visit Us',
      details: 'No. 104/C, Samagi Mawatha',
      description: 'Kaludewala, Panadura, Sri Lanka',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Business Hours',
      details: 'Monday - Saturday',
      description: '8:00 AM - 6:00 PM',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Production Capacity',
      details: '100,000+ bottles',
      description: 'Monthly production capacity',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'product', label: 'Product Information', icon: Package },
    { value: 'distributor', label: 'Distributor Inquiry', icon: Users },
    { value: 'bulk', label: 'Bulk Order', icon: Building },
    { value: 'partnership', label: 'Business Partnership', icon: Globe },
    { value: 'other', label: 'Other', icon: MessageCircle }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

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

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Contact form submitted:', formData)
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center fade-in border border-green-200">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out to Bio Care. We've received your message and our team will get back to you within 24 hours.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 text-left mb-8 border border-green-200">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Message Summary</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                {formData.company && <p><strong>Company:</strong> {formData.company}</p>}
                <p><strong>Subject:</strong> {formData.subject}</p>
                <p><strong>Inquiry Type:</strong> {inquiryTypes.find(t => t.value === formData.inquiryType)?.label}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    company: '', 
                    subject: '', 
                    inquiryType: 'general', 
                    message: '' 
                  })
                }}
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Another Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Back to Home
              </Link>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-700">
                <strong>Need immediate assistance?</strong> Call our hotline: <span className="font-bold">+94 710 733 1100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 p-4 rounded-2xl shadow-lg">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Contact Bio Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for product inquiries, distributor opportunities, 
            bulk orders, or any questions about our premium functional beverages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-green-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-green-600" />
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-green-200 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{info.title}</h3>
                      <p className="text-gray-900 font-semibold">{info.details}</p>
                      <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions -WITH LINK COMPONENTS */}
              <div className="mt-8 space-y-3">
                <Link
                  to="/inquire"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Product Inquiry
                </Link>
                <Link
                  to="/products"
                  className="block w-full text-center bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
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
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
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
                </div>

                {/* Contact & Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
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

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-gray-300"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-3">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {inquiryTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.value }))}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.inquiryType === type.value
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            <span className="text-sm font-medium">{type.label}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                      errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Brief summary of your inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
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
                    placeholder="Please provide detailed information about your inquiry, including any specific requirements, quantities, or timelines..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center pt-4 border-t border-gray-200">
                  * Required fields. We typically respond within 24 hours.
                  For urgent matters, call our hotline: <strong>+94 710 733 1100</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact