export default function Footer() {
  return (
    <footer className="bg-[#070a14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} SUNIKA EDUSPHERE. All rights reserved.</p>
        <div className="text-white/60 text-sm">Crafted with care for premium learning experiences.</div>
      </div>
    </footer>
  )
}
