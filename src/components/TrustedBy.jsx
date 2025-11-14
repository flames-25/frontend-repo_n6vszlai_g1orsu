import { motion } from 'framer-motion'

const logos = [
  { name: 'Google', svg: (
    <svg viewBox="0 0 48 48" className="h-7 w-7"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.672,6.053,29.084,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.86,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C33.672,6.053,29.084,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.188,0-9.594-3.317-11.258-7.961l-6.53,5.033C9.517,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.793,2.237-2.231,4.166-4.093,5.565 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.123,44,34,44,24C44,22.659,43.86,21.35,43.611,20.083z"/></svg>
  )},
  { name: 'YouTube', svg: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M19.615 3.184A3.01 3.01 0 0 1 21 5.33v13.34a3.01 3.01 0 0 1-1.385 2.146c-.82.507-9.615.507-9.615.507s-8.794 0-9.615-.507A3.01 3.01 0 0 1 .385 18.67V5.33A3.01 3.01 0 0 1 1.77 3.184C2.59 2.677 12 2.677 12 2.677s9.41 0 10.23.507ZM9.75 8.25v7.5l6-3.75-6-3.75Z"/></svg>
  )},
  { name: 'Figma', svg: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M15 12a3 3 0 0 0-3-3h3V6a3 3 0 1 0 0 6ZM9 12a3 3 0 1 0 0 6h3v-3a3 3 0 0 0-3-3Zm0-6a3 3 0 1 0 0 6h3V6H9Zm6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-9a3 3 0 1 0-3-3v3h3Z"/></svg>
  )},
  { name: 'Notion', svg: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M4 3h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V3Z" opacity=".25"/><path d="M6 5h12a1 1 0 0 1 1 1v12H7a1 1 0 0 1-1-1V5Zm3 3h2l3 6V8h2v9h-2l-3-6v6H9V8Z"/></svg>
  )},
]

export default function TrustedBy() {
  return (
    <section className="relative bg-[#0a0f1f] py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-white/50">Trusted tools used across our programs</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-80">
          {logos.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-4 backdrop-blur hover:bg-white/[0.06]"
            >
              <div className="text-white/80">{item.svg}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
