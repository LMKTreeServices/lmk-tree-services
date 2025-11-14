// components/Hero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Clock, TreePine, ChevronDown, Star, Phone, CheckCircle } from 'lucide-react'

export function Hero() {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #dcfce7 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: '#22c55e',
        opacity: '0.1',
        borderRadius: '50%',
        filter: 'blur(100px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: '#10b981',
        opacity: '0.1',
        borderRadius: '50%',
        filter: 'blur(100px)'
      }} />

      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'white',
                borderRadius: '999px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid #dcfce7'
              }}
            >
              <Shield style={{ width: '16px', height: '16px', color: '#16a34a' }} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Fully Insured</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'white',
                borderRadius: '999px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid #dcfce7'
              }}
            >
              <Award style={{ width: '16px', height: '16px', color: '#16a34a' }} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Certified Arborists</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'white',
                borderRadius: '999px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid #dcfce7'
              }}
            >
              <Clock style={{ width: '16px', height: '16px', color: '#16a34a' }} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>24/7 Emergency</span>
            </motion.div>
          </div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}
          >
            <span style={{ display: 'block', color: '#111827' }}>Melbourne's Premier</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #16a34a 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Tree Services
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              maxWidth: '800px',
              margin: '0 auto 48px',
              lineHeight: '1.6'
            }}
          >
            Expert arborists delivering safe, efficient tree removal, pruning, and 
            maintenance with a commitment to environmental excellence
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '64px'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <button
                onClick={scrollToConsultation}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #16a34a 0%, #10b981 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  borderRadius: '999px',
                  boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)';
                }}
              >
                <Phone style={{ width: '20px', height: '20px' }} />
                Get Free Consultation
              </button>
              <button
                onClick={scrollToServices}
                style={{
                  padding: '16px 32px',
                  background: 'white',
                  color: '#16a34a',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  borderRadius: '999px',
                  border: '2px solid #16a34a',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#16a34a';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#16a34a';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #dcfce7',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}>
              <TreePine style={{ width: '48px', height: '48px', color: '#16a34a', margin: '0 auto 12px' }} />
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827' }}>15+</div>
              <div style={{ color: '#4b5563', fontSize: '14px' }}>Years Excellence</div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #dcfce7',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}>
              <Star style={{ width: '48px', height: '48px', color: '#eab308', margin: '0 auto 12px' }} />
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827' }}>2,500+</div>
              <div style={{ color: '#4b5563', fontSize: '14px' }}>Trees Serviced</div>
              <div style={{ color: '#9ca3af', fontSize: '11px', marginTop: '4px' }}>SCROLL TO EXPLORE</div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #dcfce7',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}>
              <CheckCircle style={{ width: '48px', height: '48px', color: '#16a34a', margin: '0 auto 12px' }} />
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827' }}>100%</div>
              <div style={{ color: '#4b5563', fontSize: '14px' }}>Safety Record</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <ChevronDown style={{ width: '32px', height: '32px', color: '#9ca3af' }} />
        </motion.div>
      </div>
    </section>
  )
}