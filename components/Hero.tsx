// components/Hero.tsx
'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Clock,
  CheckCircle,
  Phone,
  Zap,
  Send,
  AlertCircle,
  MapPin,
  Mail,
  Upload,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  images?: string;
}

export function Hero() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'tree-removal',
    message: '',
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remainingSlots = 5 - images.length;
      if (remainingSlots <= 0) {
        setErrors((prev) => ({ ...prev, images: 'Maximum 5 images allowed' }));
        setTimeout(
          () => setErrors((prev) => ({ ...prev, images: undefined })),
          3000
        );
        return;
      }

      const newFiles = acceptedFiles.slice(0, remainingSlots);

      if (images.length + acceptedFiles.length > 5) {
        setErrors((prev) => ({ ...prev, images: 'Maximum 5 images allowed' }));
        setTimeout(
          () => setErrors((prev) => ({ ...prev, images: undefined })),
          3000
        );
      }

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...newFiles]);
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    },
    [images.length]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic'],
    },
    maxSize: 10485760, // 10MB
    multiple: true,
  });

  const removeImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);

    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe the service you need';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const imagePromises = images.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      );

      const base64Images = await Promise.all(imagePromises);

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          images: base64Images,
          imageNames: images.map((f) => f.name),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'tree-removal',
          message: '',
        });
        setImages([]);
        setImagePreviews([]);
        setErrors({});

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* FULL background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/HeroSectionBackgroundNo2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* DARK overlay to make it look cinematic */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Headings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Melbourne&apos;s Premier{' '}
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                Tree Service Experts
              </span>
            </h1>

            <p className="mb-8 text-lg text-white/85 md:text-xl">
              Professional tree removal, pruning, and emergency response with 15+ years
              of experience across Melbourne.
            </p>

            {/* Highlights */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                <span className="text-left">
                  Free quotes with fixed pricing - no surprises
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                <span className="text-left">
                  Same day service for urgent tree work
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                <span className="text-left">
                  Certified arborists with $20M insurance
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                <span className="text-left">
                  Complete cleanup &amp; green waste removal
                </span>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="rounded-2xl border border-orange-400/30 bg-gradient-to-r from-orange-500/20 to-amber-500/20 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-200">
                <Zap className="h-4 w-4" />
                24/7 Emergency Service
              </div>
              <p className="mb-4 text-white/90">
                Storm damage or dangerous trees? Call us now for immediate assistance.
              </p>

              <a
                href="tel:0429187791"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-orange-600 shadow-lg transition hover:bg-orange-50"
              >
                <Phone className="h-5 w-5" />
                0429 187 791
              </a>
            </div>

            {/* Contact details */}
            <div className="mt-8 space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-300" />
                <span className="text-sm">Servicing all Melbourne suburbs</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-300" />
                <span className="text-sm">kyle@lmktreeservices.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              {/* Form Header */}
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-bark-900 sm:text-3xl">
                  Get Your Free Quote
                </h2>
                <p className="text-sm text-bark-600">
                  Tell us about your trees - we&apos;ll respond within 24 hours
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-lg bg-emerald-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-emerald-900">Quote request sent!</p>
                      <p className="text-sm text-emerald-700">
                        We&apos;ll contact you within 24 hours with pricing and next steps.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-lg bg-red-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-900">Something went wrong</p>
                      <p className="text-sm text-red-700">
                        Please try again or call us directly at 0429 187 791
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full rounded-lg border-2 px-4 py-3 focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-bark-200 focus:ring-primary-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`w-full rounded-lg border-2 px-4 py-3 focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-bark-200 focus:ring-primary-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`w-full rounded-lg border-2 px-4 py-3 focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-bark-200 focus:ring-primary-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-bark-200 bg-white px-4 py-3 text-bark-900 focus:ring-2 focus:ring-primary-500 transition-all"
                  >
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-lopping">Tree Lopping &amp; Pruning</option>
                    <option value="tree-health">Tree Health Assessment</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="waste-removal">Green Waste Removal</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your job *"
                    rows={4}
                    className={`w-full rounded-lg border-2 px-4 py-3 focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-bark-200 focus:ring-primary-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Image Upload Section */}
                <div className="w-full">
                  <label className="mb-2 block text-sm font-medium text-bark-700">
                    Attach Photos (Optional)
                    <span className="ml-2 font-normal text-bark-500">
                      Photos help us provide accurate quotes
                    </span>
                  </label>

                  <div
                    {...getRootProps()}
                    className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-all duration-200 ${
                      isDragActive
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-bark-300 bg-bark-50 hover:border-primary-400 hover:bg-primary-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto mb-3 h-10 w-10 text-bark-400" />
                    {isDragActive ? (
                      <p className="text-sm font-medium text-bark-700">
                        Drop the images here…
                      </p>
                    ) : (
                      <>
                        <p className="mb-1 text-sm font-medium text-bark-700">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-bark-500">
                          PNG, JPG, WEBP up to 10MB each (max 5 images)
                        </p>
                      </>
                    )}
                  </div>

                  {errors.images && (
                    <p className="mt-2 text-sm text-red-600">{errors.images}</p>
                  )}

                  {imagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {imagePreviews.map((preview, index) => (
                        <div
                          key={index}
                          className="group relative aspect-square overflow-hidden rounded-lg border-2 border-bark-200"
                        >
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity duration-200 hover:bg-red-600 group-hover:opacity-100"
                            aria-label="Remove image"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/15">
                            <ImageIcon className="h-6 w-6 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-70" />
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Request Quote
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
