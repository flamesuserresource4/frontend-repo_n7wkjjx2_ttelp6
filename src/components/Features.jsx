import { Sparkles, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Smooth animations, rich theming, and elegant interactions tuned for modern users.'
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade',
    desc: 'Secure by default with role controls, audit trails, and robust uptime.'
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Optimized rendering and realtime updates keep conversations instant and lively.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Designed to impress</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A crisp interface, powerful features, and a futuristic aesthetic come together for a premium chat experience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-200/40 to-fuchsia-200/40 blur-2xl group-hover:scale-125 transition-transform" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 text-white shadow">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
