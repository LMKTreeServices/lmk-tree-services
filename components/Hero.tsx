// components/Hero.tsx
'use client';

import React, { useState, useCallback } from 'react';
import { motion, Reorder } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  Send,
  AlertCircle,
  Upload,
  X,
  GripVertical,
  ChevronDown,
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  suburb: string;
  message: string;
  service: string; // ✅ Added
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  message?: string;
  images?: string;
}

interface ImageItem {
  id: string;
  file: File;
  preview: string;
}

export function Hero() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    suburb: '',
    message: '',
    service: '', // ✅ Init empty
  });

  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remaining = 5 - imageItems.length;
      if (remaining <= 0) {
        setErrors((e) => ({ ...e, images: 'Maximum 5 images allowed' }));
        setTimeout(() => setErrors((e) => ({ ...e, images: undefined })), 3000);
        return;
      }

      const newFiles = acceptedFiles.slice(0, remaining);
      const newItems = newFiles.map((file: File) => ({
        id: `${file.name}-${Date.now()}`,
        file,
        preview: URL.createObjectURL(file),
      }));

      setImageItems((prev) => [...prev, ...newItems]);
    },
    [imageItems.length]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic'],
    },
    maxSize: 10485760,
    multiple: true,
  });

  const removeImage = (id: string) => {
    setImageItems((prev) => {
      const item = prev.find((x) => x.id === id);
      if (item) URL.revokeObjectURL(item.preview);
      return prev.filter((x) => x.id !== id);
    });
  };

  const validateForm = (): boolean => {
    const e: FormErrors = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    if (!formData.message.trim()) e.message = 'Please describe the job';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const base64Images = await Promise.all(
        imageItems.map(
          (item) =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(item.file);
            })
        )
      );

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          service: formData.service || 'tree-removal', // ✅ fallback if none
          message: formData.suburb
            ? `Suburb: ${formData.suburb}\n\n${formData.message}`
            : formData.message,
          images: base64Images,
          imageNames: imageItems.map((i) => i.file.name),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          suburb: '',
          message: '',
          service: '',
        });
        imageItems.forEach((i) => URL.revokeObjectURL(i.preview));
        setImageItems([]);
        setErrors({});
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  // ...Rest of your Hero layout omitted for brevity

  return (
    <>
      {/* ...Everything else before form stays same */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ...other form fields */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm"
        >
          <option value="">Select a service (optional)</option>
          <option value="tree-removal">Tree Removal</option>
          <option value="tree-lopping">Tree Lopping</option>
          <option value="stump-grinding">Stump Grinding</option>
          <option value="other">Other</option>
        </select>
        {/* ...submit button etc */}
      </form>
    </>
  );
}
