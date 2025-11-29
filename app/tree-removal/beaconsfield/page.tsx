// app/tree-removal/beaconsfield/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Removal Beaconsfield | LMK Tree Services',
  description:
    'Professional tree removal, lopping, pruning and stump grinding in Beaconsfield. Fully insured arborists offering fast, safe and affordable tree services. Free quotes available.',
  alternates: {
    canonical: '/tree-removal/beaconsfield',
  },
  openGraph: {
    title: 'Tree Removal Beaconsfield | LMK Tree Services',
    description:
      'Fast, safe and affordable tree removal and arborist services in Beaconsfield. LMK Tree Services provides qualified tree work including lopping, pruning and stump grinding.',
    url: 'https://lmktreeservices.com.au/tree-removal/beaconsfield',
    type: 'website',
    siteName: 'LMK Tree Services',
  },
}

// PAGE CONTENT
export default function BeaconsfieldPage() {
  const suburbName = 'Beaconsfield'
  const region = 'Melbourne’s south-east'

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="mb-3 inline-flex rounded-full bg-emerald-800/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
            Local Tree Services
          </span>

          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Tree Removal in Beaconsfield
          </h1>

          <p className="mb-6 max-w-2xl text-lg text-emerald-100">
            LMK Tree Services provides fully insured, professional tree removal,
            pruning, lopping and stump grinding services throughout{' '}
            <span className="font-semibold text-emerald-50">{suburbName}</span>{' '}
            and surrounding suburbs. Whether it’s a hazardous gum tree, branches
            overhanging your home or a stump that needs grinding, we’re here to
            help.
          </p>

          <p className="max-w-2xl text-sm text-emerald-200">
            As a trusted local team servicing {region}, we focus on safe
            techniques, clean results and affordable pricing.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Free Quote in Beaconsfield
            </Link>

            <a
              href="tel:0429187791"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-900/40 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-800/70"
            >
              Call Kyle: 0429 187 791
            </a>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section: Local expertise */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Local Tree Removal Experts in Beaconsfield
            </h2>
            <p className="mb-4 text-gray-700">
              Beaconsfield and its surrounding areas feature a mix of large gums,
              mature natives and fast-growing exotic trees. While beautiful, they
              often require maintenance to prevent storm damage, property risks
              and interference with powerlines. LMK Tree Services offers expert
              assessment and safe removal of problem trees, always prioritising
              your property’s safety.
            </p>
            <p className="text-gray-700">
              Our team specialises in tree removal close to homes, sheds, fences
              and tight-access areas. Every job is planned for maximum safety and
              minimal disruption.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Tree Services We Provide in Beaconsfield
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Tree Removal & Felling
                </h3>
                <p className="text-sm text-gray-700">
                  Safe and controlled dismantling of hazardous or unwanted trees,
                  including removals near houses, driveways or neighbouring
                  boundaries.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Tree Lopping & Pruning
                </h3>
                <p className="text-sm text-gray-700">
                  Improving tree structure, reducing weight, clearing branches
                  from gutters and preventing storm damage.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Stump Grinding
                </h3>
                <p className="text-sm text-gray-700">
                  Complete grinding of old stumps to prevent regrowth, pest
                  issues and mowing hazards.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Land & Block Clearing
                </h3>
                <p className="text-sm text-gray-700">
                  Clearing small or large sections for development, landscaping
                  or extensions.
                </p>
              </div>
            </div>
          </section>

          {/* Safety */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Safety, Insurance & Council Advice
            </h2>
            <p className="mb-3 text-gray-700">
              LMK Tree Services follows strict safety procedures on every job.
              All team members are trained in safe tree dismantling and we are
              fully insured for your peace of mind.
            </p>
            <p className="text-gray-700">
              Beaconsfield falls under Cardinia Shire Council, which may require
              permits depending on overlays and tree species. If you are unsure,
              we can help point you in the right direction.
            </p>
          </section>

          {/* Why choose us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Beaconsfield Homeowners Choose LMK Tree Services
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Local team regularly servicing Beaconsfield</li>
              <li>• Fast quotes and honest advice</li>
              <li>• Fully insured and safety-focused</li>
              <li>• Clean, tidy and respectful on every job</li>
              <li>• Expertise with large gums and tight-access removals</li>
            </ul>
          </section>

          {/* Final CTA */}
          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-emerald-900 mb-3">
              Get a Free Tree Removal Quote in Beaconsfield
            </h2>
            <p className="mb-4 text-gray-700">
              Need a tree removed, pruned or assessed in Beaconsfield? Our team
              is ready to help with fast, friendly and professional service.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#consultation"
                className="inline-flex rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
              >
                Start Your Free Quote
              </Link>
              <a
                href="tel:0429187791"
                className="text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4"
              >
                Call 0429&nbsp;187&nbsp;791
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
