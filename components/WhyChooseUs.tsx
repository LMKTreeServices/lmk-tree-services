// components/WhyChooseUs.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  Clock,
  Users,
  Leaf,
  TrendingUp,
  CheckCircle,
  MapPin,
} from 'lucide-react'

const coreReasons = [
  {
    icon: Shield,
    title: '$20M Public Liability Insurance',
    description: 'Fully insured for residential, commercial and council work so your property is always protected.',
  },
  {
    icon: Award,
    title: 'ISA Certified Arborists',
    description: 'Qualified arborists who understand Melbourne’s trees, soil and council regulations.',
  },
  {
    icon: Users,
    title: '15+ Years on the Tools',
    description: 'Local team with thousands of safe removals, pruning jobs and emergency call-outs completed.',
  },
  {
    icon: Leaf,
    title: 'Clean, Eco-Friendly Work',
    description: 'Green waste recycled, mulch available on request and your yard left cleaner than we found it.',
  },
]

const microReasons = [
  'On-site quotes with clear pricing — no surprises on the day.',
  'Care around fences, roofs, driveways and neighbours’ properties.',
  'Respectful crew who communicate clearly and turn up on time.',
]

const stats = [
  { value: '2,500+', label: 'Trees Serviced Across Melbourne' },
  { value: '4.9★', label: 'Average Google Rating' },
  { value: '100%', label: 'Safety Record on Residential Jobs' },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-bark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-xs tracking-wide rounded-full mb-4">
            WHY HOMEOWNERS CHOOSE LMK
          </span>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-start">
            {/* Text side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-bark-900 mb-4 text-left">
                A small crew that treats your property like their own
              </h2>
              <p className="text-lg md:text-xl text-bark-700 max-w-2xl text-left">
                We’re a Melbourne team, not a call centre. From the first visit to the final sweep,
                you&apos;ll deal with the same experienced arborists who know exactly what&apos;s
                happening on your job.
              </p>
            </div>

            {/* Visual / “real world” card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-bark-900 text-white shadow-2xl">
                <div className="aspect-[4/3] bg-[url('/crew-placeholder.jpg')] bg-cover bg-center">
                  {/* fallback tint if no image yet */}
                  <div className="h-full w-full bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span>Based in Melbourne&apos;s south-east • Serving metro & surrounds</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                      ON-SITE ARBORISTS
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold">
                      Real people, real gear, on real Melbourne properties.
                    </p>
                    <p className="text-sm text-white/80">
                      Swap phone-tag and vague estimates for clear advice and a crew that actually shows up.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-4 hidden sm:flex items-center gap-2 rounded-full bg-white shadow-lg px-4 py-2 text-xs font-medium text-bark-700">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Fully licensed • Public liability certificate available on request</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core reasons list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 mb-14"
        >
          {coreReasons.map((reason, index) => (
            <div key={reason.title} className="flex gap-4">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                <reason.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-bark-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-bark-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Micro reasons + stats strip */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-start">
          {/* Bullet list feels less “templated” than more cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-bark-100 p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700 mb-4">
              WHAT YOU CAN EXPECT ON THE DAY
            </p>
            <ul className="space-y-3">
              {microReasons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-bark-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white border border-bark-100 px-4 py-5 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-green-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-bark-700 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
