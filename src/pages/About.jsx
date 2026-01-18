import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Award, 
  Target, 
  Clock, 
  TrendingUp, 
  GraduationCap, 
  BookOpen,
  Factory,
  Shield,
  Leaf,
  Heart,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const About = () => {
  const [activeMilestone, setActiveMilestone] = useState(0)

  const milestones = [
    { 
      year: '2009', 
      event: 'Company Founded', 
      description: 'Bio Care Consumers established as a sole proprietorship in Panadura with a vision for natural health beverages',
      achievement: 'First production facility in Panadura'
    },
    { 
      year: '2012', 
      event: 'First Production Facility', 
      description: 'Established dedicated manufacturing unit with advanced quality control systems and food safety protocols',
      achievement: 'Implemented HACCP principles'
    },
    { 
      year: '2015', 
      event: 'Product Line Expansion', 
      description: 'Launched multiple functional beverage varieties including aloe vera drinks and traditional herbal formulations',
      achievement: '10+ product varieties introduced'
    },
    { 
      year: '2018', 
      event: 'Quality Certification', 
      description: 'Achieved multiple quality certifications including ISO standards and Good Manufacturing Practices',
      achievement: 'ISO 9001:2015 Certified'
    },
    { 
      year: '2020', 
      event: 'Capacity Expansion', 
      description: 'Scaled production to meet growing demand, reaching 100,000+ bottles monthly production capacity',
      achievement: '100K+ monthly capacity achieved'
    },
    { 
      year: '2023', 
      event: 'Market Leadership', 
      description: 'Recognized as leading functional beverage producer in Sri Lanka with nationwide distribution network',
      achievement: '50,000+ satisfied customers'
    }
  ]

  const team = [
    {
      name: 'P. Y. Amaralal Dias',
      role: 'CEO & Founder',
      qualifications: 'BSc Bioscience, MSc Food Science & Technology, Qualified Pharmacist',
      bio: 'Over 20 years of extensive experience in food science, product development, and quality assurance. Passionate about creating health-focused beverages that combine traditional wisdom with modern scientific principles.',
      expertise: ['Food Science & Technology', 'Product Development', 'Quality Control Systems', 'Regulatory Compliance'],
      experience: '20+ years',
      avatar: '👨‍🔬'
    },
    {
      name: 'Gayaneetha Sarojani Dias',
      role: 'Co-founder & Accountant',
      qualifications: 'Qualified Accountant with Bachelor\'s in Commerce',
      bio: 'More than 20 years of experience in manufacturing finance, business management, and strategic planning. Ensures sustainable business growth and operational excellence.',
      expertise: ['Financial Management', 'Business Strategy', 'Operations Management', 'Supply Chain'],
      experience: '20+ years',
      avatar: '👩‍💼'
    }
  ]

  const values = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Quality First',
      description: 'Zero tolerance for non-conforming products with rigorous quality checks at every production stage.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Health Focus',
      description: 'Creating beverages that genuinely benefit consumer health and wellness through natural ingredients.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: 'Natural Ingredients',
      description: 'Using pure aloe vera and natural fruits without artificial additives or preservatives.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: 'Consistent Supply',
      description: 'Reliable production of 100,000+ bottles monthly with guaranteed quality and timely delivery.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { number: '100,000+', label: 'Monthly Production', icon: Factory },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '99.8%', label: 'Quality Score', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            Since 2009
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            About <span className="text-green-300">Bio Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Pioneering functional beverage production in Sri Lanka by combining scientific expertise 
            with traditional wisdom to create natural health solutions.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To produce high-quality functional beverages that enhance health and wellness 
                while maintaining the highest standards of purity, effectiveness, and natural integrity.
              </p>
              <div className="space-y-3">
                {[
                  'Develop scientifically-backed natural health beverages',
                  'Maintain uncompromising quality standards',
                  'Promote sustainable manufacturing practices',
                  'Make functional beverages accessible to all'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be Sri Lanka's most trusted producer of functional beverages, recognized 
                globally for our uncompromising quality standards and commitment to consumer health.
              </p>
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Global Ambitions</h3>
                <p className="text-green-100 leading-relaxed">
                  Expanding our reach to international markets while maintaining our core values 
                  of quality, purity, and health-focused innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide every decision and action we take
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`flex justify-center mb-6 p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in functional beverages
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden lg:block"></div>
            
            {/* Milestones */}
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } group`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} mb-4 lg:mb-0`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 group-hover:border-green-300">
                      <div className="text-green-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="text-sm font-semibold text-green-800">{milestone.achievement}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  {/* Year marker */}
                  <div className="lg:absolute left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                    {milestone.year}
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leaders and experts behind our success and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-4xl bg-green-100 p-4 rounded-2xl">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{member.name}</h3>
                      <div className="text-green-600 font-bold text-lg mb-2">{member.role}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <GraduationCap className="h-4 w-4" />
                        <span>{member.qualifications}</span>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {member.experience} Experience
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-full shadow-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Uncompromising Quality
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Our production facility operates under heavy scrutiny with a zero-tolerance policy 
              for non-conforming products. Every batch undergoes 15+ quality checkpoints to ensure 
              that only the best reaches our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-200 mb-2">100%</div>
              <div className="text-green-100 font-semibold">Natural Ingredients</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-200 mb-2">0%</div>
              <div className="text-green-100 font-semibold">Quality Compromise</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-black text-green-200 mb-2">15+</div>
              <div className="text-green-100 font-semibold">Quality Checkpoints</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-green-100">
              <BookOpen className="h-5 w-5" />
              ISO 9001:2015 Certified Quality Management System
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA -WITH LINK COMPONENTS */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and distributors. Let's discuss how we can support your business with premium functional beverages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/inquire"
              className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Partnership
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-2xl border-2 border-white/40 hover:border-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-gray-300">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-green-400" />
              <div>
                <div className="font-semibold">Panadura</div>
                <div className="text-sm">Sri Lanka</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-green-400" />
              <div>
                <div className="font-semibold">+94 710 733 1100</div>
                <div className="text-sm">Sales Hotline</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5 text-green-400" />
              <div>
                <div className="font-semibold">biocarecons@gmail.com</div>
                <div className="text-sm">Email Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About