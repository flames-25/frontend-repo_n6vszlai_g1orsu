import Navbar from '../Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Stats from '../components/Stats'
import WhyChoose from '../components/WhyChoose'
import CurriculumShowcase from '../components/CurriculumShowcase'
import FeaturedCourses from '../components/FeaturedCourses'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <WhyChoose />
      <CurriculumShowcase />
      <FeaturedCourses />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
