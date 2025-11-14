import { motion } from 'framer-motion'
import { BookOpen, Rocket, Brain, PenTool, Megaphone } from 'lucide-react'

const courses = [
  { title: 'Python (Basic to Advanced)', tag: 'Python', icon: BookOpen, color: 'from-indigo-500 to-violet-500', desc: 'Master Python from zero to expert with hands-on projects.' },
  { title: 'Digital Marketing', tag: 'Digital Marketing', icon: Megaphone, color: 'from-pink-500 to-rose-500', desc: 'Growth strategies, funnels, ads, and analytics.' },
  { title: 'Content Creation', tag: 'Content', icon: PenTool, color: 'from-amber-500 to-orange-500', desc: 'Create compelling content that converts.' },
  { title: 'AI Tools Mastery', tag: 'AI Tools', icon: Brain, color: 'from-cyan-500 to-teal-500', desc: 'Leverage AI for 10x productivity and creativity.' },
  { title: 'How to Start a Brand', tag: 'Brand', icon: Rocket, color: 'from-fuchsia-500 to-purple-500', desc: 'Build a brand with strategy, storytelling, and systems.' },
]

export default function FeaturedCourses() {
  return (
    <section id="featured" className="relative py-20 bg-[#070a14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Courses</h2>
          <p className="mt-3 text-white/70">Handpicked programs to accelerate your growth</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, idx) => (
            <motion.a
              key={c.title}
              href={`/courses#${c.tag.toLowerCase().replace(/\s+/g,'-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:bg-white/[0.06] transition"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg`}> 
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-indigo-300 group-hover:text-indigo-200 transition">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
