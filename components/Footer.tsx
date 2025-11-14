// components/Footer.tsx
import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-bark-900 text-bark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              LMK Tree Services
            </h3>
            <p className="text-bark-300 mb-4">
              Melbourne&apos;s trusted tree service provider. Professional,
              safe, and reliable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-bark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-bark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-bark-300 hover:text-primary-400 transition-colors"
                >
                  Tree Removal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-bark-300 hover:text-primary-400 transition-colors"
                >
                  Tree Lopping &amp; Pruning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-bark-300 hover:text-primary-400 transition-colors"
                >
                  Tree Health Assessment
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-bark-300 hover:text-primary-400 transition-colors"
                >
                  Emergency Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-bark-300 hover:text-primary-400 transition-colors"
                >
                  Green Waste Removal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:0412345678"
                    className="text-bark-300 hover:text-primary-400 transition-colors"
                  >
                    0412 345 678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:kyle@lmktreeservices.com"
                    className="text-bark-300 hover:text-primary-400 transition-colors break-all"
                  >
                    kyle@lmktreeservices.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-bark-300">Melbourne, Victoria</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-bark-300">Mon - Fri: 7am - 6pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-bark-300">Saturday: 8am - 4pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-bark-300">Sunday: Closed</span>
              </li>
              <li className="mt-4 text-primary-400 font-semibold">
                24/7 Emergency Services
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bark-800 mt-12 pt-8 text-center">
          <p className="text-bark-400 text-sm">
            © {new Date().getFullYear()} LMK Tree Services. All rights
            reserved.
          </p>
          <p className="text-bark-500 text-xs mt-2">
            Fully licensed and insured. ABN: 12 345 678 901
          </p>
        </div>
      </div>
    </footer>
  )
}
