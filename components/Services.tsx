// components/Services.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TreePine,
  Scissors,
  Shield,
  Truck,
  HeartHandshake,
  Zap,
  CheckCircle,
  ArrowRight,
  Home,
  Building2,
  Trees,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description:
      "Safe and efficient removal of unwanted or hazardous trees using advanced equipment and techniques.",
    features: [
      "Crane assistance",
      "Stump grinding",
      "Complete cleanup",
      "Permit assistance",
    ],
    price: "From $800",
    popular: true,
  },
  {
    icon: Scissors,
    title: "Tree Pruning & Lopping",
    description:
      "Expert trimming to enhance tree health, safety, and aesthetics while maintaining natural form.",
    features: [
      "Crown thinning",
      "Deadwooding",
      "Height reduction",
      "Structural pruning",
    ],
    price: "From $350",
  },
  {
    icon: Shield,
    title: "24/7 Emergency Service",
    description:
      "Rapid response for storm damage, fallen trees, and urgent safety hazards any time.",
    features: ["Storm damage", "Dangerous trees", "Insurance work", "Priority response"],
    price: "Call anytime",
  },
  {
    icon: HeartHandshake,
    title: "Tree Health Assessment",
    description:
      "Professional evaluation and treatment plans to ensure your trees thrive for generations.",
    features: [
      "Disease diagnosis",
      "Pest management",
      "Soil testing",
      "Treatment plans",
    ],
    price: "From $200",
  },
  {
    icon: Truck,
    title: "Stump Grinding",
    description:
      "Complete stump removal below ground level, perfect for replanting or landscaping.",
    features: ["Below ground", "Clean finish", "Mulch provided", "Multiple stumps"],
    price: "From $150",
  },
  {
    icon: Trees,
    title: "Land Clearing",
    description:
      "Efficient vegetation management for development, fire prevention, and property enhancement.",
    features: ["Site preparation", "Selective clearing", "Waste removal", "Erosion control"],
    price: "Custom quote",
  },
];

const serviceTypes = [
  { icon: Home, label: "Residential", description: "Homes, gardens & strata" },
  {
    icon: Building2,
    label: "Commercial",
    description: "Shops, warehouses & facilities",
  },
  {
    icon: Shield,
    label: "Council / Government",
    description: "Parks, reserves & public spaces",
  },
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollToConsultation = () => {
    document
      .getElementById("consultation")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-advance the carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000); // 6s: ~5s pause + 1s slide

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index < 0) index = services.length - 1;
    if (index >= services.length) index = 0;
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      {/* subtle background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
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
            Our Services
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Professional Tree Care & Removal
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            From one-off removals to ongoing maintenance plans, we handle the
            full lifecycle of your trees with safety, compliance and care across
            Melbourne.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Fully insured & ticketed crew
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Council-compliant methods
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Clean-up & green waste removal
            </span>
          </div>
        </motion.div>

        {/* Who we work with */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-4 md:grid-cols-3"
        >
          {serviceTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <type.icon className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {type.label}
                </p>
                <p className="text-xs text-slate-500">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AUTO-SLIDING CAROUSEL */}
        <div className="relative mb-16">
          {/* arrows */}
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md ring-1 ring-slate-200 hover:bg-slate-50 md:inline-flex"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md ring-1 ring-slate-200 hover:bg-slate-50 md:inline-flex"
            aria-label="Next service"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="min-w-full px-1 sm:px-4 lg:px-6"
                >
                  <article className="group relative mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10 md:flex-row md:items-stretch">
                    {/* left accent strip */}
                    <div className="hidden w-1 bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-500 md:block" />

                    <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                          <service.icon className="h-8 w-8 text-emerald-700" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                              {service.title}
                            </h3>
                            {service.popular && (
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-800">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 md:text-base">
                            {service.description}
                          </p>
                          <div className="mt-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            {service.price}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="mt-[2px] h-4 w-4 flex-shrink-0 text-emerald-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="button"
                          onClick={handleScrollToConsultation}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                        >
                          Get a quote for this service
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <p className="text-xs text-slate-500">
                          Tell us your location, access, and a rough photo for
                          the most accurate pricing.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-emerald-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to ${service.title}`}
              />
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-orange-600 to-amber-500 p-8 text-white md:mt-12 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_60%)]" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-lime-300" />
                24/7 Emergency Tree Service
              </div>
              <h3 className="mb-3 text-2xl font-semibold md:text-3xl">
                Storm damage or a dangerous tree right now?
              </h3>
              <p className="max-w-xl text-sm text-orange-50/95 md:text-base">
                Our emergency response team can attend quickly, make the site safe,
                and assist with insurance documentation across Melbourne and surrounds.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="tel:0429187791"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-bold text-rose-700 shadow-lg shadow-black/30 transition hover:bg-slate-50"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: 0429 187 791</span>
              </a>
              <p className="flex items-center gap-2 text-xs text-orange-50/90">
                <Zap className="h-4 w-4" />
                <span>Priority call-out for hazardous trees and blocked access.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
