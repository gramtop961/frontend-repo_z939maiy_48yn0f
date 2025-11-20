import React from 'react'

function WhatIs() {
  return (
    <section id="what" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-300/80">What MemoryFilm Is</p>
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Custom tribute films crafted from your photos, voice recordings, and memories.</h3>
          <p className="mt-6 text-amber-100/90 leading-relaxed text-lg">
            MemoryFilm turns your family’s moments into a cinematic story. We carefully arrange photographs, video clips, voice notes, and recorded interviews into a film that feels warm, personal, and timeless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Funerals & Memorials',
              desc: 'Respectful tribute films for services and celebrations of life — gentle pacing, soft color, and meaningful music.'
            },
            {
              title: 'Weddings & Anniversaries',
              desc: 'Love stories that weave vows, speeches, and family memories into a keepsake you’ll revisit for years.'
            },
            {
              title: 'Family Legacy',
              desc: 'Capture a lifetime of photographs and oral histories into a cohesive film that future generations can cherish.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <h4 className="font-serif text-2xl text-white">{item.title}</h4>
              <p className="mt-3 text-amber-100/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIs
