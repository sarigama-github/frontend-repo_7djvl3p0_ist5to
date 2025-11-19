import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for freelance projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            Designing playful, interactive experiences for the modern web
          </h1>
          <p className="mt-4 text-slate-200/80 md:text-lg">
            I craft delightful product interfaces with a focus on motion, 3D, and accessibility. Let’s build something impactful together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100 transition">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 text-white px-4 py-2 font-semibold hover:bg-white/20 transition">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
