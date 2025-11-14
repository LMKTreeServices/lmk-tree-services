// components/About.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Zap, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Arborists',
    description: 'Our team consists of fully qualified and certified tree care professionals.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Over 15 years of combined experience in the tree services industry.',
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    description: 'State-of-the-art machinery ensuring safe and efficient operations.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focused',
    description: 'Dedicated to exceeding expectations with personalized service.',
  },
]

export function About() {
  return (
    <section className="py-20 bg-bark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-bark-900 mb-6">
              Why Choose LMK Tree Services?
            </h2>
            <p className="text-lg text-bark-600 mb-8 leading-relaxed">
              We're Melbourne's premier tree service provider, combining expertise, safety, and environmental responsibility. Our commitment to excellence has made us the trusted choice for thousands of satisfied customers.
            </p>
            <p className="text-lg text-bark-600 mb-8 leading-relaxed">
              From residential gardens to large commercial projects, we handle every job with the same level of professionalism and care. Fully insured and compliant with all local regulations, you can trust us to get the job done right.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-bark-700 font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-bark-700 font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-bark-700 font-medium">Free Quotes</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-bark-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-bark-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}