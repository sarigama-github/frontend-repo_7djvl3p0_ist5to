import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_100%_100%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Let’s collaborate</h3>
              <p className="mt-2 text-slate-300/85">Open to freelance, contracts, and interesting collaborations. Tell me about your goals and timeline.</p>
            </div>
            <motion.a
              href="mailto:hello@example.com?subject=Project%20Inquiry"
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 md:mt-0 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition shadow"
            >
              Say Hello
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
