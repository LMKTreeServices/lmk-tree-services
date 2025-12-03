// components/Gallery.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/gallery/image1.jpeg', alt: '', category: '' },
  { src: '/gallery/image2.jpeg', alt: '', category: '' },
  { src: '/gallery/image3.jpeg', alt: '', category: '' },
  { src: '/gallery/image4.jpeg', alt: '', category: '' },
  { src: '/gallery/image5.jpeg', alt: '', category: '' },
  { src: '/gallery/image6.jpeg', alt: 't', category: '' },
  { src: '/gallery/image7.webp', alt: 'k', category: '' },
  { src: '/gallery/image8.jpeg', alt: '', category: '' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
  }
  
  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <section id="gallery" className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl">
            Our Gallery
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
          />
          <p className="mt-4 max-w-2xl text-gray-600">
            Take a look at some of our recent work across Melbourne. Every job is completed with care, safety, and a thorough cleanup.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                index === 0 || index === 5 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${image.src}')`,
                  backgroundColor: '#d1d5db',
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6 text-gray-800" />
                </div>
              </div>

              {/* Category tag */}
              <div className="absolute bottom-3 left-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm capitalize">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
                style={{ backgroundColor: '#374151' }}
              />
              <p className="mt-4 text-center text-sm text-white/80">
                {galleryImages[selectedImage].alt}
              </p>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}