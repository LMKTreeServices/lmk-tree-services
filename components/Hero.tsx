// components/Hero.tsx
'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Shield, Award, Clock, Trees, ChevronDown, Star, Phone, CheckCircle, ArrowRight, Leaf, TreePine } from 'lucide-react'

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <span>{count.toLocaleString()}{suffix}</span>
}

// Floating leaves animation
const FloatingLeaf = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${Math.random() * 100}%`,
        top: '-20px',
      }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, 360],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    >
      <Leaf style={{ 
        width: '20px', 
        height: '20px', 
        color: '#16a34a',
        opacity: 0.3
      }} />
    </motion.div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 25%, #bbf7d0 50%, #86efac 75%, #dcfce7 100%)',
      }}
    >
      {/* Floating leaves */}
      {mounted && Array.from({ length: 5 }).map((_, i) => (
        <FloatingLeaf key={i} delay={i * 3} />
      ))}

      {/* Animated background circles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 60%)',
            y
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(134, 239, 172, 0.15) 0%, transparent 60%)',
            y
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Tree silhouettes */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '400px',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2316a34a' fill-opacity='0.05' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            y
          }}
        />
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        zIndex: 10
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
        >
          {/* Premium trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '48px'
            }}
          >
            {[
              { icon: Shield, text: 'Fully Insured $20M', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
              { icon: Award, text: 'ISA Certified Arborists', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
              { icon: Clock, text: '24/7 Emergency Response', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  background: 'white',
                  borderRadius: '100px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(34, 197, 94, 0.1)',
                  cursor: 'default',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: badge.gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <badge.icon style={{ width: '16px', height: '16px', color: 'white' }} />
                </div>
                <span style={{ 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  color: '#15803d',
                  letterSpacing: '0.025em' 
                }}>
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main content */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'inline-block',
                padding: '8px 24px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '100px',
                marginBottom: '24px'
              }}
            >
              <span style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Melbourne's #1 Rated Tree Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '32px',
                letterSpacing: '-0.03em'
              }}
            >
              <span style={{ 
                color: '#15803d',
                display: 'block'
              }}>
                Professional Tree
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginTop: '8px',
                position: 'relative'
              }}>
                Services Excellence
                <TreePine style={{
                  position: 'absolute',
                  right: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  color: '#16a34a',
                  opacity: 0.3
                }} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: '1.25rem',
                color: '#166534',
                maxWidth: '700px',
                margin: '0 auto 48px',
                lineHeight: '1.8',
                fontWeight: '400'
              }}
            >
              Expert arborists combining 15+ years of experience with cutting-edge equipment 
              to deliver safe, efficient, and environmentally responsible tree care
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                marginBottom: '80px'
              }}
            >
              <motion.button
                onClick={scrollToConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '20px 40px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '17px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  letterSpacing: '0.025em',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
              >
                <Phone style={{ width: '20px', height: '20px' }} />
                Get Free Quote Now
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '20px 40px',
                  background: 'white',
                  color: '#16a34a',
                  border: '2px solid #16a34a',
                  borderRadius: '16px',
                  fontSize: '17px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.025em',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f0fdf4, #dcfce7)'
                  e.currentTarget.style.borderColor = '#15803d'
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = '#16a34a'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {[
                { 
                  icon: Trees, 
                  value: 15, 
                  suffix: '+', 
                  label: 'Years Excellence', 
                  gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  description: 'Serving Melbourne'
                },
                { 
                  icon: Star, 
                  value: 2500, 
                  suffix: '+', 
                  label: 'Trees Serviced', 
                  gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
                  description: 'Happy customers'
                },
                { 
                  icon: Shield, 
                  value: 100, 
                  suffix: '%', 
                  label: 'Safety Record', 
                  gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  description: 'Zero incidents'
                },
                { 
                  icon: Award, 
                  value: 5, 
                  suffix: '★', 
                  label: 'Google Rating', 
                  gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  description: '500+ reviews'
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(34, 197, 94, 0.05)',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(34, 197, 94, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Background decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: stat.gradient,
                    opacity: 0.03,
                    borderRadius: '50%',
                  }} />
                  
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: stat.gradient,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <stat.icon style={{ 
                      width: '28px', 
                      height: '28px', 
                      color: 'white'
                    }} />
                  </div>
                  <div style={{ 
                    fontSize: '40px', 
                    fontWeight: '800', 
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px'
                  }}>
                    {mounted && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div style={{ 
                    color: '#15803d', 
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.025em',
                    marginBottom: '4px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    color: '#86efac',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center'
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div style={{ 
            fontSize: '12px', 
            color: '#16a34a', 
            marginBottom: '8px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase' 
          }}>
            Scroll to explore
          </div>
          <ChevronDown style={{ width: '32px', height: '32px', color: '#16a34a' }} />
        </motion.div>
      </div>
    </section>
  )
}