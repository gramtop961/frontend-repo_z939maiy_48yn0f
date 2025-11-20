import React from 'react'

const tiers = [
  {
    name: 'Keepsake',
    price: '$1,200',
    features: [
      'Up to 5 minutes',
      '50–80 photos',
      '1 interview or voiceover',
      'Licensed music',
      'Digital delivery',
    ],
  },
  {
    name: 'Legacy',
    price: '$2,400',
    features: [
      '8–12 minutes',
      '120–180 photos + clips',
      '2 interviews / voiceovers',
      'Color grading + restoration',
      'USB + Digital delivery',
    ],
    highlight: true,
  },
  {
    name: 'Heirloom',
    price: 'Custom',
    features: [
      '20+ minutes',
      'Archival scanning & restoration',
      'Multiple interviews',
      'Family archive consulting',
      'Custom score + physical set',
    ],
  },
]

function Packages() {
  return (
    <section id="packages" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-amber-300/80">Packages</p>
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Choose the right MemoryFilm for your story</h3>
          <p className="mt-4 text-amber-100/90">Every project is crafted by hand. We’ll guide you through gathering photos, audio, and memories.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-3xl p-6 ring-1 backdrop-blur ${tier.highlight ? 'bg-amber-400/10 ring-amber-400/40' : 'bg-white/5 ring-white/10'}`}>
              <div className="flex items-baseline justify-between">
                <h4 className="font-serif text-2xl text-white">{tier.name}</h4>
                <span className="text-amber-200/90 font-medium">{tier.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-amber-100/90">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-medium transition ${tier.highlight ? 'bg-amber-400 text-slate-900 hover:bg-amber-300' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                  Start this package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
