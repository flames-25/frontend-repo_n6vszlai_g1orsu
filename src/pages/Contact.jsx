import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0f1f]">
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Contact</h1>
          <p className="mt-4 text-white/70 max-w-2xl">We would love to hear from you. Reach out for program details, partnerships, or custom training.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white">
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="mt-2 text-white/70">+91 6005146041</p>

              <h3 className="mt-6 text-xl font-semibold">Message</h3>
              <form className="mt-3 space-y-3">
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email or phone" />
                <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your message" />
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:bg-white/90 transition">Send</button>
              </form>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white grid place-items-center">
              <div className="text-center">
                <div className="text-sm text-white/60">We respond within 24 hours</div>
                <div className="mt-2 text-2xl font-semibold">SUNIKA EDUSPHERE</div>
                <p className="mt-2 text-white/70 max-w-md">Premium, modern, cinematic learning experiences that are ultra-responsive and conversion-focused.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
