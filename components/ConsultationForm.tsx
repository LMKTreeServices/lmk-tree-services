// components/ConsultationForm.tsx
'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Upload, X, Image as ImageIcon } from 'lucide-react'
import { Input, Textarea } from './ui/Input'
import { Button } from './ui/Button'
import { useDropzone } from 'react-dropzone'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  images?: string
}

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'tree-removal',
    message: '',
  })

  const [images, setImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Limit to 5 images
    const newFiles = acceptedFiles.slice(0, 5 - images.length)
    
    if (images.length + acceptedFiles.length > 5) {
      setErrors((prev) => ({ ...prev, images: 'Maximum 5 images allowed' }))
      setTimeout(() => setErrors((prev) => ({ ...prev, images: undefined })), 3000)
    }

    // Create preview URLs
    const newPreviews = newFiles.map(file => URL.createObjectURL(file))
    
    setImages((prev) => [...prev, ...newFiles])
    setImagePreviews((prev) => [...prev, ...newPreviews])
  }, [images.length])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic']
    },
    maxSize: 10485760, // 10MB
    multiple: true,
  })

  const removeImage = (index: number) => {
    // Revoke the preview URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviews[index])
    
    setImages((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe the service you need'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Convert images to base64
      const imagePromises = images.map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
      })

      const base64Images = await Promise.all(imagePromises)

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          images: base64Images,
          imageNames: images.map(f => f.name),
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'tree-removal',
          message: '',
        })
        setImages([])
        setImagePreviews([])
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-primary-100">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12"
        >
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-primary-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-bark-900 mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-bark-600 mb-8">
                We've received your consultation request. Our team will contact you within 24 hours.
              </p>
              <Button
                onClick={() => setSubmitStatus('idle')}
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  error={errors.name}
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0400 123 456"
                  error={errors.phone}
                  required
                />
              </div>

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                error={errors.email}
                required
              />

              <div className="w-full">
                <label className="block text-sm font-medium text-bark-700 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-bark-200 bg-white text-bark-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="tree-removal">Tree Removal</option>
                  <option value="tree-lopping">Tree Lopping & Pruning</option>
                  <option value="tree-health">Tree Health Assessment</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="waste-removal">Green Waste Removal</option>
                  <option value="land-clearing">Land Clearing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Textarea
                label="Project Description"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your tree service needs, location, and any specific requirements..."
                rows={5}
                error={errors.message}
                required
              />

              {/* Image Upload Section */}
              <div className="w-full">
                <label className="block text-sm font-medium text-bark-700 mb-2">
                  Attach Photos (Optional)
                  <span className="text-bark-500 font-normal ml-2">
                    Help us provide an accurate quote by sharing photos of the tree(s)
                  </span>
                </label>

                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
                    isDragActive
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-bark-300 bg-bark-50 hover:border-primary-400 hover:bg-primary-50'
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="w-12 h-12 text-bark-400 mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-bark-700 font-medium">Drop the images here...</p>
                  ) : (
                    <>
                      <p className="text-bark-700 font-medium mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-bark-500">
                        PNG, JPG, WEBP up to 10MB (max 5 images)
                      </p>
                    </>
                  )}
                </div>

                {errors.images && (
                  <p className="mt-2 text-sm text-red-600">{errors.images}</p>
                )}

                {/* Image Previews */}
                {imagePreviews.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group aspect-square">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg border-2 border-bark-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                          aria-label="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {images.length > 0 && (
                  <p className="mt-2 text-sm text-bark-600">
                    {images.length} {images.length === 1 ? 'image' : 'images'} attached
                  </p>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again or call us directly.</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Request Free Consultation
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-bark-500">
                By submitting this form, you agree to be contacted by LMK Tree Services
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}