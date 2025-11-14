import Navbar from '../Navbar'
import Footer from '../components/Footer'
import LoadingOverlay from '../components/LoadingOverlay'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import React from 'react'

export default function Contact() {
  const [submitting, setSubmitting] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <LoadingOverlay visible={submitting} message="Sending your message…" />
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <Stars radius={90} depth={50} count={2500} factor={4} fade speed={1} />
          </Canvas>
        </div>
        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Contact</h1>
          <p className="mt-4 text-white/70 max-w-2xl">We would love to hear from you. Reach out for program details, partnerships, or custom training.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="mt-2 text-white/80">+91 6005146041</p>

              <h3 className="mt-6 text-xl font-semibold">Message</h3>
              {sent ? (
                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                  Thanks! Your message has been received. We’ll get back within 24 hours.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-3 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input required name="name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
                    <input required name="contact" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email or phone" />
                  </div>
                  <select name="course" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/20">
                    <option value="" className="text-gray-900">Select course</option>
                    <option className="text-gray-900">Python</option>
                    <option className="text-gray-900">Digital Marketing</option>
                    <option className="text-gray-900">Content Creation</option>
                    <option className="text-gray-900">AI Tools Mastery</option>
                    <option className="text-gray-900">Brand Building</option>
                  </select>
                  <textarea required name="message" rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your message" />
                  <button disabled={submitting} type="submit" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:bg-white/90 transition">
                    {submitting ? 'Sending…' : 'Send'}
                  </button>
                </form>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white grid place-items-center">
              <div className="text-center">
                <div className="text-sm text-white/60">We respond within 24 hours</div>
                <div className="mt-2 text-2xl font-semibold">SUNIKA EDUSPHERE</div>
                <p className="mt-2 text-white/70 max-w-md">Premium, modern, cinematic learning experiences that are ultra-responsive and conversion-focused.</p>
                <div className="mt-6 grid gap-2 text-white/70 text-sm">
                  <div>Phone: +91 6005146041</div>
                  <div>Email: hello@sunikaedusphere.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
