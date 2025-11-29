// components/Testimonials.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Henriquez',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle and his boys removed a very large gum tree from a tight backyard space and made it look easy. I never felt concerned at any point and couldn’t have chosen a better team for the job.',
    rating: 5,
    initial: 'J',
    color: 'bg-rose-500',
  },
  {
    name: "Hannah L'Eveille",
    location: 'Pakenham',
    timeAgo: '4 months ago',
    quote:
      'Kyle and his team did an amazing job getting rid of a 20+ year-old palm tree in our front yard – quick, clean, friendly and with great communication. Highly recommended.',
    rating: 5,
    initial: 'H',
    color: 'bg-blue-500',
  },
  {
    name: 'Rob Withers',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Excellent service and price. Kyle and the team were professional, punctual, quick, friendly and helpful. They removed multiple trees and stumps and left the property spotless.',
    rating: 5,
    initial: 'R',
    color: 'bg-amber-500',
  },
  {
    name: 'Ebony Cornelius',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Had nothing but a great experience with Kyle and the team. He was attentive, made removing our garden easy and the pricing was very reasonable. I’ve already passed his details to friends and family.',
    rating: 5,
    initial: 'E',
    color: 'bg-emerald-500',
  },
  {
    name: 'Neville Wright',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Very happy with Kyle and the boys. They turned up on time, got straight into it, finished in a few hours and cleaned up after themselves. They clearly have the right equipment and know what they’re doing.',
    rating: 5,
    initial: 'N',
    color: 'bg-purple-500',
  },
  {
    name: 'Sharon Collard',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle and the boys were great. They arrived on time, took real pride in their work and checked that we were happy with everything before they packed up. The price was more than reasonable.',
    rating: 5,
    initial: 'S',
    color: 'bg-sky-500',
  },
  {
    name: 'Angelo Mete',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle and his team were very friendly and efficient. They did a great job trimming and chopping trees and cleaned up after themselves. A good bunch of hardworking young men.',
    rating: 5,
    initial: 'A',
    color: 'bg-teal-500',
  },
  {
    name: 'Maree',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'We had Kyle trim the hedge at our rental property and couldn’t be happier. He was professional, punctual and did a clean, tidy job. The hedge looks great and the property was left spotless.',
    rating: 5,
    initial: 'M',
    color: 'bg-pink-500',
  },
  {
    name: 'Sue McGowan',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle and his crew took down a tree for us and the communication before, during and after was fantastic. The team were efficient and left our property spotless. I can absolutely recommend them.',
    rating: 5,
    initial: 'S',
    color: 'bg-indigo-500',
  },
  {
    name: 'Emily Blake',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle and the team are very professional and put a lot of care into their work. The customer service was amazing and I couldn’t have asked for a better experience.',
    rating: 5,
    initial: 'E',
    color: 'bg-lime-500',
  },
  {
    name: 'Maxine',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle responded quickly to my request for a quote and completed the job soon after. He was very pleasant and helpful and I’d happily recommend him to others.',
    rating: 5,
    initial: 'M',
    color: 'bg-orange-500',
  },
  {
    name: 'Bryan Reynolds',
    location: 'Pakenham',
    timeAgo: '5 months ago',
    quote:
      'Kyle trimmed and shaped the tree at the front of my house. It was all done in about 30 minutes with the right equipment, a great clean-up and very professional service.',
    rating: 5,
    initial: 'B',
    color: 'bg-cyan-500',
  },
  {
    name: 'Peter Howgate',
    location: 'Pakenham',
    timeAgo: 'Edited a week ago',
    quote:
      'Great job. Kyle and his team are easy to work with, punctual and clearly know what they are doing.',
    rating: 5,
    initial: 'P',
    color: 'bg-fuchsia-500',
  },
]

// Google logo SVG component
function GoogleLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number) => {
    const maxIndex = Math.ceil(testimonials.length / 2) - 1
    if (index < 0) {
      setDirection(-1)
      index = maxIndex
    } else if (index > maxIndex) {
      setDirection(1)
      index = 0
    } else {
      setDirection(index > currentIndex ? 1 : -1)
    }
    setCurrentIndex(index)
  }

  const currentTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header: stars block left, Google logo right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between"
        >
          {/* Left: stars + count */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-1 sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">Based on 19 Google reviews</p>
          </div>

          {/* Right: Google branding */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <GoogleLogo className="h-10 w-10" />
            <span className="text-2xl font-medium text-gray-700">Google</span>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-gray-100 transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-105 md:flex lg:-left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-gray-100 transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-105 md:flex lg:-right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid gap-6 md:grid-cols-2"
              >
                {currentTestimonials.map((t, idx) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Quote decoration */}
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100 transition-colors group-hover:text-emerald-100" />

                    <div className="mb-4 flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-lg font-bold text-white shadow-lg`}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.timeAgo}</p>
                      </div>
                    </div>

                    {/* Stars with verification badge */}
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <svg
                        className="ml-1 h-4 w-4 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>

                    {/* Quote text */}
                    <p className="text-sm leading-relaxed text-gray-700">{t.quote}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-emerald-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
