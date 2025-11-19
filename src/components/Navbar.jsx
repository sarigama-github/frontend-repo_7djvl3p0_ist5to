import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="text-slate-300 hover:text-white/90 transition-colors"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white/90 transition-colors"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="text-slate-300 hover:text-white/90 transition-colors"><Mail size={18} /></a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-3">
            <div className="flex flex-col">
              <NavLink href="#work" onClick={close}>Work</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
