import { useState } from 'react'

const faqs = [
  { q: 'Do I get lifetime access?', a: 'Yes. You get lifetime access to course content, updates, and the community.' },
  { q: 'Are there live sessions?', a: 'Yes, there are regular live Q&A sessions and community events.' },
  { q: 'Will I receive a certificate?', a: 'Yes. You will receive a verified certificate upon course completion.' },
  { q: 'Is there a refund policy?', a: 'We offer a 7-day no-questions-asked refund if you are not satisfied.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="relative bg-[#0a0f1f] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
          {faqs.map((item, i) => (
            <div key={item.q} className="px-6">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
                <span className="text-white font-medium">{item.q}</span>
                <span className="text-white/60">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="pb-5 text-white/70 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
