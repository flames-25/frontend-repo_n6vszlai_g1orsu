import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const courseData = {
  'python': {
    title: 'Python (Basic to Advanced)',
    description: 'From fundamentals to advanced concepts, learn Python with hands-on projects, data structures, OOP, APIs, and automation.',
    sections: ['Getting Started', 'Data Types & Control Flow', 'Functions & Modules', 'OOP', 'File Handling', 'APIs', 'Automation Project']
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Master funnels, content strategy, paid ads, SEO/SEM, analytics, and growth loops to scale brands profitably.',
    sections: ['Foundations', 'Content Strategy', 'Paid Ads', 'SEO/SEM', 'Analytics', 'Growth Loops']
  },
  'content-creation': {
    title: 'Content Creation',
    description: 'Create high-converting content for socials and web using storytelling frameworks, hooks, and editing systems.',
    sections: ['Storytelling Basics', 'Hook & Structure', 'Scripting', 'Design & Editing', 'Publishing Systems']
  },
  'ai-tools': {
    title: 'AI Tools Mastery',
    description: 'Leverage AI to ideate, automate, and accelerate with prompts, workflows, and real-world use cases.',
    sections: ['Prompting Fundamentals', 'Automation', 'Research & Analysis', 'Content & Code', 'AI Workflows']
  },
  'brand-building': {
    title: 'How to Start a Brand',
    description: 'Build a modern brand with positioning, audience, visual identity, distribution, and monetization.',
    sections: ['Positioning', 'Audience', 'Identity', 'Distribution', 'Monetization']
  }
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = courseData[id]

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0f1f] text-white grid place-items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <Link className="mt-4 inline-block underline" to="/courses">Back to Courses</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            {course.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70 max-w-3xl"
          >
            {course.description}
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.sections.map((s, idx) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white"
              >
                <div className="text-sm text-white/60">Module {idx + 1}</div>
                <div className="mt-2 text-lg font-semibold">{s}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:bg-white/90 transition">
              Purchase Course
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white/90 border border-white/10 font-semibold px-6 py-3 hover:bg-white/15 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
