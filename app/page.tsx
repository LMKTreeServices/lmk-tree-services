// app/page.tsx 
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { About } from '@/components/About'
import { ConsultationForm } from '@/components/ConsultationForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
