import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
                <p className="mt-2 text-sm text-gray-600">For personal projects and small tests.</p>
                <p className="mt-6 text-3xl font-bold">Free</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>• Basic theming</li>
                  <li>• Community support</li>
                  <li>• Limited history</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black/90">Choose</a>
              </div>
              <div className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-cyan-500/10 to-fuchsia-600/10 p-[2px] shadow-sm">
                <div className="rounded-2xl bg-white p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
                  <p className="mt-2 text-sm text-gray-600">Perfect for teams that need performance.</p>
                  <p className="mt-6 text-3xl font-bold">$19<span className="text-base font-medium text-gray-500">/mo</span></p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    <li>• Advanced themes</li>
                    <li>• Priority support</li>
                    <li>• Unlimited history</li>
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95">Choose</a>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
                <p className="mt-2 text-sm text-gray-600">Custom needs, SLAs, and security.</p>
                <p className="mt-6 text-3xl font-bold">Contact</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>• SSO / RBAC</li>
                  <li>• Dedicated support</li>
                  <li>• Custom integrations</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md ring-1 ring-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">Talk to us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
