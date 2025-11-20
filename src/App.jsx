import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WhatIs from './components/WhatIs'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl">MemoryFilm</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-amber-100/80">
            <a href="#what" className="hover:text-white">What it is</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#contact" className="hover:text-white">Get Started</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-slate-900 font-medium hover:bg-amber-300 transition">
            Start
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <WhatIs />
        <About />
        <Packages />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
