import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D product explorer with smooth motion and hotspots.',
    tags: ['Three.js', 'Spline', 'Framer Motion'],
    link: '#',
    github: '#'
  },
  {
    title: 'Fintech Dashboard',
    description: 'Real-time analytics dashboard with accessible components.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#',
    github: '#'
  },
  {
    title: 'Creative Agency Site',
    description: 'Playful, animated landing experience with subtle micro-interactions.',
    tags: ['Animation', 'UX', 'Design System'],
    link: '#',
    github: '#'
  }
]

function Tag({ children }) {
  return <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{children}</span>
}

export default function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(147,51,234,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-slate-300/80 max-w-2xl">A snapshot of projects that blend storytelling, interaction, and performance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/80">{p.description}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a href={p.github} onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"><Github size={16} /></a>
                  <a href={p.link} onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"><ExternalLink size={16} /></a>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
