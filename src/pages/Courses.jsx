import Navbar from '../Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const allCourses = [
  { id: 'python', title: 'Python (Basic to Advanced)', tag: 'Python', level: 'Beginner to Pro', color: 'from-indigo-500 to-violet-500' },
  { id: 'digital-marketing', title: 'Digital Marketing', tag: 'Digital Marketing', level: 'All Levels', color: 'from-pink-500 to-rose-500' },
  { id: 'content-creation', title: 'Content Creation', tag: 'Content', level: 'All Levels', color: 'from-amber-500 to-orange-500' },
  { id: 'ai-tools', title: 'AI Tools Mastery', tag: 'AI Tools', level: 'All Levels', color: 'from-cyan-500 to-teal-500' },
  { id: 'brand-building', title: 'How to Start a Brand', tag: 'Brand Building', level: 'All Levels', color: 'from-fuchsia-500 to-purple-500' },
]

const filters = ['All', 'Python', 'Digital Marketing', 'Content Creation', 'AI Tools', 'Brand Building']

export default function Courses() {
  const urlHash = typeof window !== 'undefined' ? window.location.hash : ''
  const initialFilter = urlHash ? urlHash.replace('#','').replace(/-/g,' ') : 'All'
  const [active, setActive] = React.useState(initialFilter)

  const filtered = active === 'All' ? allCourses : allCourses.filter(c => c.tag.toLowerCase().includes(active.toLowerCase()))

  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <Navbar />

      <section className="relative pt-36 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Courses</h1>
          <p className="mt-3 text-white/70 max-w-2xl">Choose from a curated selection of programs designed to make you unstoppable.</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border ${active===f ? 'bg-white text-gray-900 border-white' : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, idx) => (
              <motion.a
                key={c.id}
                href={`/courses/${c.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:bg-white/[0.06] transition"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg`}> 
                  <span className="font-bold">{c.tag[0]}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.level}</p>
                <div className="mt-6 flex items-center gap-2 text-indigo-300 group-hover:text-indigo-200 transition">
                  <span className="text-sm font-medium">View details</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
