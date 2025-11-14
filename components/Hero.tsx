// components/Hero.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Clock,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  TreePine,
  Zap,
} from "lucide-react";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const badges = [
    { icon: Shield, text: "Fully Insured $20M" },
    { icon: Award, text: "ISA Certified" },
    { icon: Clock, text: "24/7 Emergency" },
  ];

  const sellingPoints = [
    "Free Quotes",
    "Same Day Service",
    "Certified Arborists",
    "Eco-Friendly Disposal",
  ];

  const handleScrollToConsultation = () => {
    document
      .getElementById("consultation")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transform transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Trust Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.12 + 0.2 }}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md"
              >
                <badge.icon className="h-4 w-4 text-emerald-300" />
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Melbourne&apos;s Premier{" "}
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Tree Service Experts
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-white/85 md:text-xl"
          >
            Professional tree removal, pruning, and emergency response with 15+ years
            of experience across Melbourne.
          </motion.p>

          {/* Selling Points */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-4"
          >
            {sellingPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <CheckCircle className="h-5 w-5 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <button
              type="button"
              onClick={handleScrollToConsultation}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-900/40 transition-all hover:bg-emerald-500 hover:shadow-emerald-800/50"
            >
              <Calendar className="h-5 w-5" />
              Get free quote
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:0429187791"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-black/30 backdrop-blur-sm transition-all hover:bg-white"
            >
              <Phone className="h-5 w-5 text-emerald-600" />
              <span>0429 187 791</span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                <Zap className="h-3 w-3 text-orange-500" />
                24/7
              </span>
            </a>
          </motion.div>

          {/* “We handle everything” strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <TreePine className="h-4 w-4 text-emerald-300" />
              <span>Tree removal & pruning</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-300" />
              <span>On-site safety & clean up</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-300" />
              <span>Fast local response</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2 h-3 w-1 rounded-full bg-white/75"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
