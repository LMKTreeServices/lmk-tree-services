// components/About.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Clock, CheckCircle, TreePine, MapPin } from 'lucide-react'

const credentials = [
  'Victorian Tree Industry Organisation (VTIO) member',
  'International Society of Arboriculture (ISA) certified',
  'WorkSafe Victoria compliant',
  'Environmental management focused',
  'Fully licensed & insured ($20M public liability)',
  'Modern, well-maintained equipment',
]

const stats = [
  { icon: Users, label: '2,500+', sublabel: 'Trees safely serviced' },
  { icon: Award, label: '15+ Years', sublabel: 'On the tools' },
  { icon: Shield, label: '100%', sublabel: 'Residential safety record' },
  { icon: Clock, label: '24/7', sublabel: 'Emergency response' },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-bark-50 relative overflow-hidden">
      {/* Subtle background icon */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute -top-10 -left-10 w-64 h-64">
          <TreePine className="w-full h-full text-green-700" />
        </div>
        <div className="absolute bottom-0 right-0 w-72 h-72">
          <TreePine className="w-full h-full text-green-700" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.25fr)] gap-12 items-start">
          {/* Story / copy side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-xs tracking-[0.18em] rounded-full mb-4">
              ABOUT LMK TREE SERVICES
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-bark-900 mb-4 text-left">
              A local crew, not a call centre
            </h2>

            <p className="text-lg text-bark-800 mb-4 leading-relaxed">
              LMK Tree Services is a Melbourne-based arborist team with more than 15 years working
              on real properties — from tight-access backyards to large commercial sites.
              We&apos;re small enough that you&apos;ll know who&apos;s turning up, and experienced
              enough to handle complex removals safely.
            </p>

            <p className="text-lg text-bark-800 mb-4 leading-relaxed">
              When you book with LMK, you&apos;re dealing directly with the people who will be on
              the tools: planning the job, setting up the gear and making sure everything is done
              properly the first time. No offshore phone queues, no &quot;we&apos;ll see what the
              crew can do&quot; — just clear communication and solid work.
            </p>

            <p className="text-base text-bark-700 mb-6 leading-relaxed">
              We routinely work with homeowners, property managers and body corporates who need
              careful tree work around roofs, fences, driveways and neighbours. That means thoughtful
              planning, attention to detail on site, and leaving your property looking better than
              when we arrived.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 border border-bark-100 shadow-sm">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-sm text-bark-800">
                Based in Melbourne&apos;s south-east • Servicing metro & surrounding areas
              </span>
            </div>
          </motion.div>

          {/* Credentials / stats side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-4 border border-bark-100 shadow-sm"
                >
                  <stat.icon className="w-7 h-7 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-bark-900">{stat.label}</div>
                  <div className="text-sm text-bark-700">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Credentials card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-7 border border-green-200/70">
              <h3 className="text-2xl font-bold text-bark-900 mb-4">
                Credentials & compliance, done properly
              </h3>
              <div className="space-y-3">
                {credentials.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-bark-800 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-white p-4 border border-bark-100">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-bark-900 text-sm">
                      Safety-first on every single job
                    </p>
                    <p className="text-xs text-bark-700">
                      Public liability certificate available on request before work begins.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-bark-700">
                  Harness checks, pre-start briefings and correct equipment for the job mean you
                  don&apos;t have to worry about what&apos;s happening above your roofline.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
