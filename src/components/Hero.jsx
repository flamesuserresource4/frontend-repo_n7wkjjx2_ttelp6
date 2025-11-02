import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-40 overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[120vh] opacity-70">
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-cyan-700 bg-cyan-50 ring-1 ring-inset ring-cyan-200">
                Next‑gen AI chat platform
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Beautiful conversations powered by intelligence
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-lg text-gray-600 max-w-xl">
              Engage your audience with a fast, reliable, and stunning chat experience enhanced by real‑time AI. Built for teams, creators, and enterprises.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
                Launch Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-300 hover:bg-gray-50">
                Explore Features
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[0,1,2,3,4].map((i) => (
                  <span key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Trusted by teams worldwide • 99.9% uptime
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <svg className="w-full text-gray-100" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,64L48,53.3C96,43,192,21,288,21.3C384,21,480,43,576,58.7C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
