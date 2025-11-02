import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-600 text-white shadow-md">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900 tracking-tight">Rhazys Chat</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#get-started" className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 shadow hover:opacity-95">
              Get Started
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-md hover:bg-gray-100">Features</a>
            <a href="#showcase" className="block px-3 py-2 rounded-md hover:bg-gray-100">Showcase</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md hover:bg-gray-100">Pricing</a>
            <div className="pt-2 flex gap-2">
              <a href="#login" className="flex-1 px-3 py-2 text-center rounded-md bg-gray-100 hover:bg-gray-200">Sign in</a>
              <a href="#get-started" className="flex-1 px-3 py-2 text-center rounded-md text-white bg-gradient-to-r from-cyan-500 to-fuchsia-600">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
