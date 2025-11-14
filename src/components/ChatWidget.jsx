import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const SUGGESTIONS = [
  'What courses do you offer?',
  'Tell me about Python course',
  'Fees and duration for AI Tools',
  'Do you provide certificates?',
]

const FAQS = [
  { q: 'What courses do you offer', a: 'Python (Basic to Advanced), Digital Marketing, Content Creation, AI Tools Mastery, and Brand Building.' },
  { q: 'fees', a: 'Pricing tiers are shown on the Pricing section. We also run seasonal scholarships and bundles.' },
  { q: 'certificate', a: 'Yes, a completion certificate is provided for all programs.' },
  { q: 'contact', a: 'You can call +91 6005146041 or use the contact form for a quick response.' },
]

function getAnswer(input) {
  const text = input.toLowerCase()
  const match = FAQS.find(f => text.includes(f.q))
  if (match) return match.a
  if (text.includes('python')) return 'Our Python program covers fundamentals to automation projects with real-world applications.'
  if (text.includes('ai')) return 'AI Tools Mastery focuses on prompt design, automation, and workflows to accelerate your work.'
  if (text.includes('digital')) return 'Digital Marketing covers funnels, content strategy, paid ads, SEO/SEM, and analytics.'
  if (text.includes('brand')) return 'Brand Building guides you through positioning, audience, identity, distribution, and monetization.'
  return "I'm your SUNIKA guide. Ask about courses, pricing, schedules, or anything on the site."
}

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([{ from: 'bot', text: 'Hi! How can I help you explore SUNIKA EDUSPHERE today?' }])
  const [input, setInput] = React.useState('')

  const send = (text) => {
    if (!text.trim()) return
    const userMsg = { from: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTimeout(() => {
      const reply = getAnswer(text)
      setMessages(prev => [...prev, { from: 'bot', text: reply }])
    }, 400)
  }

  return (
    <>
      <button
        aria-label="Open assistant"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-xl hover:scale-[1.03] active:scale-95 transition"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="text-sm font-semibold text-white">SUNIKA Assistant</div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto space-y-2 p-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from==='user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from==='user' ? 'bg-white text-gray-900' : 'bg-white/10 text-white'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-3">
              <div className="flex flex-wrap gap-2 pb-2">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/10">{s}</button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key==='Enter') send(input) }}
                  placeholder="Type your question..."
                  className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button onClick={() => send(input)} className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-3 py-2">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
