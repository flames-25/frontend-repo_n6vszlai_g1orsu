import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#0a0820] to-[#0b1229]" />

      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 animate-pulse" />
            Elevate your skills with premium learning
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
            SUNIKA EDUSPHERE
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
            Cinematic, interactive courses crafted for ambitious creators and professionals. Learn Python, Digital Marketing, Content, AI Tools and Brand Building with immersive experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/courses" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:bg-white/90 transition">
              Explore Courses
            </a>
            <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white/90 border border-white/10 font-semibold px-6 py-3 hover:bg-white/15 transition">
              View Highlights
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -left-40 top-20 h-80 w-80 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 bg-fuchsia-500/20 blur-3xl rounded-full" />
    </section>
  )
}
