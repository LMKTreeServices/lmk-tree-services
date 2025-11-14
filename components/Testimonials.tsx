// components/Testimonials.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Glen Waverley',
    role: 'Homeowner',
    quote:
      'The team removed two huge gums over our house with zero fuss. They protected our roof and cleaned up so well you wouldn’t know they were here.',
  },
  {
    name: 'Daniel P.',
    location: 'Mount Waverley',
    role: 'Property Manager',
    quote:
      'Clear quote, turned up on time, and handled council requirements for a protected tree. Professional from start to finish.',
  },
  {
    name: 'Leanne & Chris',
    location: 'Chadstone',
    role: 'Homeowners',
    quote:
      'We had storm damage on a Sunday. They were on-site quickly, made everything safe and checked in again the next day. Couldn’t be happier.',
  },
  {
    name: 'Thomas R.',
    location: 'Camberwell',
    role: 'Body Corporate',
    quote:
      'We’ve used LMK for multiple strata properties. Reliable, safety-focused, and they always communicate clearly with residents.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-bark-900 relative overflow-hidden">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-16 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] items-start mb-14"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-white/10 text-green-200 font-semibold text-xs tracking-[0.2em] rounded-full mb-4">
              CLIENT STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left">
              Trusted by Melbourne homeowners and property managers
            </h2>
            <p className="text-bark-100/80 text-lg max-w-xl text-left">
              Most of our work comes from repeat clients and word of mouth. Here&apos;s how it feels
              to have LMK look after your trees.
            </p>

            {/* Featured pull quote */}
            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-7">
              <div className="flex items-start gap-3 mb-3">
                <Quote className="w-6 h-6 text-green-300 flex-shrink-0" />
                <p className="text-bark-50 text-base leading-relaxed">
                  &quot;Professional, efficient and genuinely careful around our home. The crew
                  explained everything before they started and left the place spotless.&quot;
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 mt-3">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Michelle &amp; Aaron — Ashwood
                  </p>
                  <p className="text-xs text-bark-100/70">
                    Large gum removal &amp; pruning across the front yard
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact “rating” block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bark-950/60 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <p className="text-sm font-semibold text-green-200 tracking-[0.28em] uppercase mb-4">
              AT A GLANCE
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div>
                <p className="text-4xl font-bold text-white leading-none mb-1">4.9</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <p className="text-xs text-bark-100/70 mt-1">Average client rating</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-semibold text-white mb-1">2,500+</p>
                <p className="text-xs text-bark-100/70">
                  Trees serviced across Melbourne&apos;s south-east
                </p>
              </div>
            </div>
            <p className="text-sm text-bark-100/80 mb-4">
              We regularly work with homeowners, body corporates and property managers who need a
              tree crew they can trust around homes, tenants and tight access.
            </p>
            <p className="text-xs text-bark-100/60">
              *Individual job photos and references available on request for larger commercial or
              strata projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Grid of shorter testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between"
            >
              <blockquote className="mb-4">
                <p className="text-sm text-bark-50 leading-relaxed">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption>
                <p className="text-sm font-semibold text-white">
                  {t.name}{' '}
                  <span className="text-bark-100/70">
                    • {t.location} &middot; {t.role}
                  </span>
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
