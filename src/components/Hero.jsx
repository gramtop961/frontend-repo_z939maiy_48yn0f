import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-900/30 via-slate-900/40 to-slate-950/80" />

      {/* Subtle film grain */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-amber-200 backdrop-blur">
              MemoryFilm by Matthew Brown
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              We turn your photos and memories into meaningful cinematic films.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-amber-100/90 leading-relaxed">
              Tribute films, memorial and celebration-of-life stories, wedding memory films, and family legacy videos — handcrafted with care, warmth, and respect.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-slate-900 font-medium hover:bg-amber-300 transition">
                Get Started
              </a>
              <a href="#packages" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-white font-medium hover:bg-white/10 transition">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
