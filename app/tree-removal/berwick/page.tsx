// app/tree-removal/berwick/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Removal Berwick | LMK Tree Services',
  description:
    'Qualified, fully insured tree removal and arborist services in Berwick. We provide safe tree removal, pruning, lopping and stump grinding at affordable prices. Free quotes available.',
  alternates: {
    canonical: '/tree-removal/berwick',
  },
  openGraph: {
    title: 'Tree Removal Berwick | LMK Tree Services',
    description:
      'Professional and affordable tree removal, pruning, stump grinding and lopping services in Berwick. Local, fully insured and offering fast quotes.',
    url: 'https://lmktreeservices.com.au/tree-removal/berwick',
    type: 'website',
    siteName: 'LMK Tree Services',
  },
}

export default function BerwickPage() {
  const suburbName = 'Berwick'
  const region = 'Melbourne’s south-east'

  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="border-b border-emerald-100 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <span className="mb-3 inline-flex rounded-full bg-emerald-800/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
            Local Tree Services
          </span>

          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Tree Removal in {suburbName}
          </h1>

          <p className="mb-6 max-w-2xl text-lg text-emerald-100">
            LMK Tree Services provides reliable, fully insured tree removal, pruning,
            lopping, and stump grinding services throughout{' '}
            <span className="font-semibold text-emerald-50">{suburbName}</span>.  
            Whether it's a dangerous tree, overgrown branches or a stubborn stump,
            our qualified team can help.
          </p>

          <p className="max-w-2xl text-sm text-emerald-200">
            We service {region} with a strong focus on safety, customer care and clean results.
          </p>

          {/* CTAS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Free Quote in Berwick
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

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">

          {/* LOCAL EXPERTISE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Local Tree Removal Experts in Berwick
            </h2>
            <p className="mb-4 text-gray-700">
              Berwick’s leafy streets and established gardens are home to a wide
              range of tree species — from large native gums to ornamental
              landscaping trees. While beautiful, these trees often need regular
              maintenance to prevent structural failure, storm damage and property
              interference.
            </p>
            <p className="text-gray-700">
              Our team specialises in handling hazardous trees, overgrown branches,
              storm-damaged limbs, and tight-access removals in the Berwick area.
              Every job is assessed for safety and carried out with precision.
            </p>
          </section>

          {/* SERVICES */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Tree Services We Provide in Berwick
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Tree Removal & Hazard Reduction
                </h3>
                <p className="text-sm text-gray-700">
                  Safe dismantling and removal of hazardous, dead or unwanted trees.
                  Suitable for trees near fences, homes and driveways.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Tree Lopping & Pruning
                </h3>
                <p className="text-sm text-gray-700">
                  Weight reduction, shaping, clearance from structures and improving
                  tree health with proper pruning techniques.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Stump Grinding & Removal
                </h3>
                <p className="text-sm text-gray-700">
                  Complete grinding of old tree stumps to prevent regrowth and make
                  the area usable again.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                  Land & Block Clearing
                </h3>
                <p className="text-sm text-gray-700">
                  Clearing trees, debris and green waste for new builds,
                  landscaping and extensions.
                </p>
              </div>
            </div>
          </section>

          {/* SAFETY */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Safety, Insurance & Council Information
            </h2>
            <p className="mb-3 text-gray-700">
              LMK Tree Services adheres to strict safety practices and uses
              professional equipment on every job. Our team is fully insured for
              your peace of mind.
            </p>
            <p className="text-gray-700">
              Berwick falls under the City of Casey. Depending on overlays and
              vegetation protections, some tree removals may require council
              approval. We can help guide you if you're unsure.
            </p>
          </section>

          {/* WHY CHOOSE US */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Berwick Residents Choose LMK Tree Services
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Local team experienced with Berwick’s trees & conditions</li>
              <li>• Fast quotes with honest recommendations</li>
              <li>• Fully insured and safety-focused</li>
              <li>• Clean, tidy and respectful work practices</li>
              <li>• Expertise with large gums and confined-space removals</li>
            </ul>
          </section>

          {/* FINAL CTA */}
          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-emerald-900 mb-3">
              Get a Free Tree Removal Quote in Berwick
            </h2>
            <p className="mb-4 text-gray-700">
              If you need safe, reliable tree removal or pruning in Berwick, our
              qualified team is ready to help with a fast, no-obligation quote.
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
