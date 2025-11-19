import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_100%,rgba(20,184,166,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-3 text-slate-300/85 leading-relaxed">
              I’m a product designer and front-end engineer who loves mixing motion, 3D, and systems thinking. Over the past years I’ve helped startups and teams ship experiences that feel alive and inclusive.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300/80">
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Design Systems</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Motion & Micro-interactions</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">3D & WebGL</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Accessibility</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-xs text-slate-300/80">Years Experience</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-xs text-slate-300/80">Projects Shipped</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-3xl font-bold text-white">5</p>
                <p className="text-xs text-slate-300/80">Design Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
