// components/Process.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  ClipboardCheck,
  Home,
  Shield,
  Sparkles,
  Calendar,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Initial Call & Job Discussion',
    text: 'We ask the right questions up front — tree type, access, hazards, and your goals — so we arrive prepared.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    number: '02',
    icon: Home,
    title: 'On-Site Assessment & Quote',
    text: 'A certified arborist inspects the tree, surrounding structures and access points.',
    color: 'from-green-500 to-teal-600',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Permit Guidance (If Required)',
    text: 'Some Melbourne councils require permits. We help determine if one is needed and guide you through the correct steps.',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Safe, Professional Work',
    text: 'Using the right equipment and safe techniques, we carry out the job efficiently and safely.',
    color: 'from-emerald-600 to-green-700',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Full Site Clean-Up',
    text: 'Branches chipped, stumps removed on request, and your yard left cleaner than we found it.',
    color: 'from-green-600 to-emerald-700',
  },
  {
    number: '06',
    icon: Calendar,
    title: 'Follow-Up & Support',
    text: 'We provide aftercare advice and support for future maintenance, pest issues or replanting.',
    color: 'from-emerald-500 to-teal-600',
  },
]

// ⬇️ NEW: scroll-to-top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-green-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700"
          >
            OUR PROCESS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl"
          >
            How We Handle Your Tree Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            A clean, transparent workflow that homeowners trust. No guesswork — just certified arborists doing things properly.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-emerald-200 via-green-300 to-emerald-200 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } items-start gap-6 md:gap-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-emerald-500 shadow-lg md:left-1/2 md:block" />

                {/* Content card */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${step.color}`}
                    />

                    {/* Step number */}
                    <span
                      className={`inline-block bg-gradient-to-r ${step.color} bg-clip-text text-sm font-bold text-transparent`}
                    >
                      STEP {step.number}
                    </span>

                    <div className="mt-4 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>

                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    {/* Hover shine */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-50/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </div>
                </div>

                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
          >
            Start Your Free Quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
