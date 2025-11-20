import React from 'react'

function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&auto=format&fit=crop"
              alt="Matthew Brown portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-300/80">About the Creator</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Matthew Brown</h2>
          <p className="mt-6 text-amber-100/90 leading-relaxed text-lg">
            Matthew Brown has been holding a camera since age five. Drawn to preserving moments from an early age, he grew up capturing the quiet details that make a life feel whole.
          </p>
          <p className="mt-4 text-amber-100/90 leading-relaxed">
            He studied digital media, emotional storytelling, and editing techniques — developing a warm, reverent style that prioritizes human connection over flashy effects. His films focus on emotion, pacing, sentiment, and the personal details that matter most.
          </p>
          <p className="mt-4 text-amber-100/90 leading-relaxed">
            Families hire Matthew for memorials and celebrations of life because he genuinely understands the emotional weight of these moments. Every tribute is handled with care, patience, and respect.
          </p>
          <blockquote className="mt-8 border-l-4 border-amber-400/70 pl-6 text-amber-200/90 italic">
            “I create MemoryFilms so families can feel close to the people they love — to hear their voices, see their smiles, and remember the texture of their lives.”
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
