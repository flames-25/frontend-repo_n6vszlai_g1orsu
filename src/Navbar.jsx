import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between py-3 px-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-500 to-cyan-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-black/80 grid place-items-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-wide">SUNIKA EDUSPHERE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              <NavItem to="/" label="Home" />
              <NavItem to="/courses" label="Courses" />
              <NavItem to="/contact" label="Contact" />
            </nav>

            <div className="hidden md:block">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-white/90 px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                Explore Courses
              </Link>
            </div>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                <NavItem to="/" label="Home" />
                <NavItem to="/courses" label="Courses" />
                <NavItem to="/contact" label="Contact" />
                <Link
                  to="/courses"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center bg-white text-gray-900 hover:bg-white/90 px-5 py-2 rounded-full text-sm font-semibold"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
