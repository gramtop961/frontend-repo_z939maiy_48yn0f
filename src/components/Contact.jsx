import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // This is a placeholder submission since backend is not required for the marketing site.
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thank you — we’ll be in touch within 24 hours.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-300/80">Get Started</p>
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Begin your MemoryFilm</h3>
          <p className="mt-6 text-amber-100/90 leading-relaxed">
            Tell us about your story, the occasion, and what materials you have. We’ll guide you through the rest with care.
          </p>
          <div className="mt-8 space-y-3 text-amber-200/80">
            <p>• memorials, funerals, celebration-of-life</p>
            <p>• weddings, anniversaries, milestones</p>
            <p>• family legacy and oral histories</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="First name" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/10 focus:ring-amber-400/60" />
            <input required placeholder="Last name" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/10 focus:ring-amber-400/60" />
          </div>
          <div className="mt-4">
            <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/10 focus:ring-amber-400/60" />
          </div>
          <div className="mt-4">
            <select className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-amber-400/60">
              <option className="text-slate-900">Memorial / Tribute</option>
              <option className="text-slate-900">Celebration of Life</option>
              <option className="text-slate-900">Wedding Memory Film</option>
              <option className="text-slate-900">Family Legacy Video</option>
              <option className="text-slate-900">Other</option>
            </select>
          </div>
          <div className="mt-4">
            <textarea rows="5" placeholder="Share anything you’d like us to know" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/10 focus:ring-amber-400/60" />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-slate-900 font-medium hover:bg-amber-300 transition">Send Inquiry</button>
            <span className="text-amber-200/80 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
