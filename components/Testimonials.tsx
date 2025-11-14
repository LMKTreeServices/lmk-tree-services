// components/Testimonials.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Kew',
    rating: 5,
    text: 'Absolutely professional service! They removed three large gum trees from our property safely and efficiently. The team was courteous, cleaned up perfectly, and the price was very reasonable.',
  },
  {
    name: 'David Chen',
    location: 'Brighton',
    rating: 5,
    text: 'After storm damage, LMK responded within hours. Their emergency service saved our home from further damage. Highly recommend their expertise and quick response time.',
  },
  {
    name: 'Emma Thompson',
    location: 'Hawthorn',
    rating: 5,
    text: 'We needed regular maintenance for our commercial property. LMK has been fantastic - always on time, professional, and their work is top quality. Great team!',
  },
  {
    name: 'Michael O\'Brien',
    location: 'Carlton',
    rating: 5,
    text: 'Best tree service in Melbourne! They pruned our heritage oak beautifully and provided excellent advice on long-term tree care. Will definitely use them again.',
  },
  {
    name: 'Lisa Patel',
    location: 'Glen Waverley',
    rating: 5,
    text: 'From quote to completion, everything was seamless. They explained the entire process, worked safely around our garden, and left the area spotless. Couldn\'t ask for better service.',
  },
  {
    name: 'James Wilson',
    location: 'Richmond',
    rating: 5,
    text: 'Professional, efficient, and great value for money. The team removed a dangerous tree that was threatening our house. Felt completely safe with their expertise.',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-bark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-bark-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-bark-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-bark-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-bark-900">{testimonial.name}</p>
                <p className="text-sm text-bark-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-bark-900">4.9/5</span>
            <span className="text-bark-600">from over 500 reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}