// components/About.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, TrendingUp, CheckCircle, Star } from 'lucide-react'

const stats = [
  { label: 'Years of Excellence', value: '15+', icon: Award },
  { label: 'Trees Serviced', value: '2,500+', icon: TrendingUp },
  { label: 'Happy Customers', value: '500+', icon: Users },
  { label: 'Safety Record', value: '100%', icon: Shield },
]

const certifications = [
  'Victorian Tree Industry Organisation (VTIO) Member',
  'International Society of Arboriculture (ISA) Certified',
  'WorkSafe Victoria Compliant',
  'Environmental Management Certified',
  'Fully Licensed & Insured ($20M Public Liability)',
]

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Melbourne's Most
              <span className="block text-green-600">Trusted Tree Experts</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of dedication to arboriculture excellence, we've built our reputation 
              on safety, precision, and environmental stewardship. Every project reflects our commitment 
              to preserving Melbourne's urban forest while protecting your property.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines traditional arborist craftsmanship with cutting-edge techniques and 
              equipment, ensuring optimal outcomes for both residential gardens and large-scale 
              commercial projects.
            </p>

            {/* Certifications list */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Industry Accreditations
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-green-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-lg mb-6 text-green-50">
              Join thousands of satisfied customers who trust us with their tree care needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-green-600 font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Get Free Quote
              </button>
              <a 
                href="tel:0429187791"
                className="px-8 py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Call 0429 187 791
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}