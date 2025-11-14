// components/Gallery.tsx
'use client'

import React, { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    category: 'removal',
    title: 'Large Gum Tree Removal',
    description: 'Safe removal of 20m eucalyptus in Kew',
    before: '/gallery/removal-1-before.jpg',
    after: '/gallery/removal-1-after.jpg',
  },
  {
    id: 2,
    category: 'pruning',
    title: 'Crown Reduction',
    description: 'Professional pruning in Brighton',
    before: '/gallery/pruning-1-before.jpg',
    after: '/gallery/pruning-1-after.jpg',
  },
  {
    id: 3,
    category: 'emergency',
    title: 'Storm Damage Cleanup',
    description: '24hr emergency response in Hawthorn',
    before: '/gallery/emergency-1-before.jpg',
    after: '/gallery/emergency-1-after.jpg',
  },
  {
    id: 4,
    category: 'removal',
    title: 'Palm Tree Removal',
    description: 'Complete palm removal in St Kilda',
    before: '/gallery/removal-2-before.jpg',
    after: '/gallery/removal-2-after.jpg',
  },
  {
    id: 5,
    category: 'pruning',
    title: 'Heritage Oak Pruning',
    description: 'Careful maintenance in Toorak',
    before: '/gallery/pruning-2-before.jpg',
    after: '/gallery/pruning-2-after.jpg',
  },
  {
    id: 6,
    category: 'stump',
    title: 'Stump Grinding',
    description: 'Below-ground removal in Camberwell',
    before: '/gallery/stump-1-before.jpg',
    after: '/gallery/stump-1-after.jpg',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'removal', label: 'Tree Removal' },
  { id: 'pruning', label: 'Pruning' },
  { id: 'emergency', label: 'Emergency' },
  { id: 'stump', label: 'Stump Grinding' },
] as const

type CategoryId = (typeof categories)[number]['id']

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filteredImages = useMemo(
    () =>
      selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === selectedCategory),
    [selectedCategory]
  )

  const activeImage =
    activeIndex !== null && activeIndex >= 0 && activeIndex < filteredImages.length
      ? filteredImages[activeIndex]
      : null

  const handleOpen = useCallback(
    (index: number) => {
      setActiveIndex(index)
      setShowBefore(false)
    },
    []
  )

  const handleClose = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation()
      if (!filteredImages.length || activeIndex === null) return
      setActiveIndex((prev) =>
        prev === null ? 0 : (prev - 1 + filteredImages.length) % filteredImages.length
      )
      setShowBefore(false)
    },
    [activeIndex, filteredImages.length]
  )

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation()
      if (!filteredImages.length || activeIndex === null) return
      setActiveIndex((prev) =>
        prev === null ? 0 : (prev + 1) % filteredImages.length
      )
      setShowBefore(false)
    },
    [activeIndex, filteredImages.length]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!activeImage) return
    if (e.key === 'Escape') {
      e.stopPropagation()
      handleClose()
    }
    if (e.key === 'ArrowLeft') {
      handlePrev()
    }
    if (e.key === 'ArrowRight') {
      handleNext()
    }
  }

  return (
    <section id="gallery" className="relative bg-slate-50 py-20">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Our Work
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Before &amp; After Gallery
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            See the difference a qualified arborist team makes to safety, light and street appeal.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.id)
                  setActiveIndex(null)
                }}
                className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => handleOpen(index)}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/60 z-10" />
                <img
                  src={image.after}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-4 bottom-4 z-20">
                  <h3 className="mb-1 text-left text-lg font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="text-left text-sm text-white/80">{image.description}</p>
                </div>
                <div className="absolute left-4 top-4 z-20 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
                  Before / After
                </div>
                <div className="absolute right-4 top-4 z-20 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-950">
                  {image.category}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={handleClose}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${activeImage.title} gallery preview`}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute -top-12 right-0 rounded-full bg-white/10 p-1 text-white transition hover:bg-white/20"
                  aria-label="Close gallery"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Prev / Next */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white shadow-md transition hover:bg-white/20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white shadow-md transition hover:bg-white/20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                <div className="overflow-hidden rounded-2xl bg-white">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={showBefore ? activeImage.before : activeImage.after}
                      alt={`${activeImage.title} - ${showBefore ? 'Before' : 'After'}`}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-4">
                      <button
                        type="button"
                        onClick={() => setShowBefore(true)}
                        className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                          showBefore
                            ? 'bg-white text-slate-900 shadow-md'
                            : 'bg-black/50 text-white'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowBefore(false)}
                        className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                          !showBefore
                            ? 'bg-white text-slate-900 shadow-md'
                            : 'bg-black/50 text-white'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-slate-100 p-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {activeImage.title}
                      </h3>
                      <p className="text-sm text-slate-600">{activeImage.description}</p>
                    </div>
                    {filteredImages.length > 1 && activeIndex !== null && (
                      <p className="text-sm text-slate-500">
                        {activeIndex + 1} of {filteredImages.length} projects
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
