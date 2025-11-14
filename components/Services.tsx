// components/Services.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, TreeDeciduous, Leaf, Shield, Truck, Clock } from 'lucide-react'

const services = [
  {
    icon: TreeDeciduous,
    title: 'Tree Removal',
    description: 'Safe and efficient removal of unwanted or dangerous trees, including stump grinding and site cleanup.',
  },
  {
    icon: Scissors,
    title: 'Tree Lopping & Pruning',
    description: 'Professional trimming and shaping to maintain healthy, beautiful trees that enhance your property.',
  },
  {
    icon: Leaf,
    title: 'Tree Health Assessment',
    description: 'Expert evaluation of tree health, disease diagnosis, and recommendations for optimal care.',
  },
  {
    icon: Shield,
    title: 'Emergency Services',
    description: '24/7 emergency response for storm damage, fallen trees, and urgent tree-related hazards.',
  },
  {
    icon: Truck,
    title: 'Green Waste Removal',
    description: 'Complete cleanup and environmentally responsible disposal of all tree debris and waste.',
  },
  {
    icon: Clock,
    title: 'Land Clearing',
    description: 'Efficient clearing of vegetation for construction, landscaping, or property development projects.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-bark-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-bark-600 max-w-2xl mx-auto">
            Comprehensive tree care solutions for residential and commercial properties across Melbourne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-bark-50 rounded-2xl p-8 hover:bg-primary-50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-bark-900 mb-3">
                {service.title}
              </h3>
              <p className="text-bark-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}