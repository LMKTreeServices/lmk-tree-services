// components/Gallery.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  {
    title: 'Large Tree Removal',
    description: 'Complete removal of hazardous tree',
  },
  {
    title: 'Professional Lopping',
    description: 'Precision trimming and shaping',
  },
  {
    title: 'Stump Grinding',
    description: 'Clean finish with stump removal',
  },
  {
    title: 'Emergency Response',
    description: 'Storm damage cleanup',
  },
  {
    title: 'Commercial Projects',
    description: 'Large-scale land clearing',
  },
  {
    title: 'Residential Care',
    description: 'Beautiful garden maintenance',
  },
]

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-bark-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-bark-600 max-w-2xl mx-auto">
            See the quality and precision we bring to every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-bark-200 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900 via-bark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-xl mb-1">
                  {image.title}
                </h3>
                <p className="text-bark-200 text-sm">
                  {image.description}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-bark-400">
                <TreeDeciduous className="w-20 h-20" />
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
          <p className="text-bark-600">
            Want to see your property transformed?{' '}
            <a
              href="#consultation"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Get a free consultation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TreeDeciduous({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 13v8" />
      <path d="M12 3c3 0 6 3 6 6s-3 6-6 6-6-3-6-6 3-6 6-6z" />
    </svg>
  )
}
