import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-[conic-gradient(at_10%_10%,rgba(59,130,246,0.05),transparent_30%,rgba(147,51,234,0.06),transparent_60%,rgba(20,184,166,0.05))]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-slate-400/80">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="/test" className="hover:text-white/90">System Check</a>
        </div>
      </footer>
    </div>
  )
}

export default App
