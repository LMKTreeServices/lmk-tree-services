// components/footer.tsx
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand / intro */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-md text-base text-slate-600 leading-relaxed">
              Building exceptional digital products that drive business growth.
              From startups to enterprises, we bring ideas to life.
            </p>
            <div className="mt-8 flex gap-5">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <a
                    href="mailto:hello@blankslatedev.com"
                    className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    hello@blankslatedev.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <a
                    href="tel:+1234567890"
                    className="text-base text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div className="text-base text-slate-600">
                  San Francisco, CA
                  <br />
                  United States
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {currentYear} Blank Slate Dev. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
