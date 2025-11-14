import Navbar from '../Navbar'
import Hero from '../components/Hero'
import FeaturedCourses from '../components/FeaturedCourses'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Footer />
    </div>
  )
}
