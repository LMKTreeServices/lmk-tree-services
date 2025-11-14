// app/page.tsx
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { ConsultationForm } from '@/components/ConsultationForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
