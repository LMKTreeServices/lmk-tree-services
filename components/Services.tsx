// components/Services.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, TreeDeciduous, Leaf, Shield, Truck, Clock, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: TreeDeciduous,
    title: 'Tree Removal',
    description: 'Safe and efficient removal of unwanted or dangerous trees with minimal impact to your property.',
    features: ['Crane assistance available', 'Stump grinding included', 'Full cleanup service'],
    price: 'From $800',
    color: '#ef4444',
  },
  {
    icon: Scissors,
    title: 'Precision Pruning',
    description: 'Expert trimming and shaping to enhance tree health, safety, and aesthetic appeal.',
    features: ['Crown thinning', 'Deadwood removal', 'Structural pruning'],
    price: 'From $350',
    color: '#22c55e',
  },
  {
    icon: Leaf,
    title: 'Tree Health Care',
    description: 'Comprehensive assessment and treatment plans to ensure your trees thrive for generations.',
    features: ['Disease diagnosis', 'Pest management', 'Soil analysis'],
    price: 'From $200',
    color: '#3b82f6',
  },
  {
    icon: Shield,
    title: 'Emergency Response',
    description: '24/7 emergency service for storm damage, fallen trees, and urgent safety hazards.',
    features: ['Rapid response', 'Insurance assistance', 'Priority service'],
    price: 'Call anytime',
    color: '#a855f7',
  },
  {
    icon: Truck,
    title: 'Waste Management',
    description: 'Eco-friendly disposal and recycling of all green waste, mulch available upon request.',
    features: ['Wood chipping', 'Mulch delivery', 'Complete removal'],
    price: 'From $150',
    color: '#eab308',
  },
  {
    icon: Clock,
    title: 'Land Clearing',
    description: 'Professional vegetation management for development, fire prevention, and landscaping.',
    features: ['Site preparation', 'Selective clearing', 'Erosion control'],
    price: 'Quote on request',
    color: '#6366f1',
  },
]

export function Services() {
  return (
    <section id="services" style={{ 
      padding: '80px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Sparkles style={{ width: '20px', height: '20px', color: '#16a34a' }} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '700', 
              color: '#16a34a',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Our Expertise
            </span>
            <Sparkles style={{ width: '20px', height: '20px', color: '#16a34a' }} />
          </div>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            color: '#15803d',
            marginBottom: '16px'
          }}>
            Professional Tree Care Solutions
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#166534',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            From routine maintenance to emergency response, we deliver excellence in every branch of tree care
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Top color bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: service.color
              }} />
              
              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <service.icon style={{ width: '32px', height: '32px', color: service.color }} />
              </div>

              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: '#15803d',
                marginBottom: '12px'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: '#4b5563',
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
              
              <div style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: '#16a34a',
                marginBottom: '16px'
              }}>
                {service.price}
              </div>

              <ul style={{ marginBottom: '24px' }}>
                {service.features.map((feature) => (
                  <li key={feature} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '8px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#dcfce7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#16a34a'
                      }} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: '2px solid #16a34a',
                background: 'white',
                color: '#16a34a',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#16a34a'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#16a34a'
              }}>
                Learn More
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}