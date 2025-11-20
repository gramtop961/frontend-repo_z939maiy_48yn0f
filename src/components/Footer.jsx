import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-serif text-xl">MemoryFilm</p>
          <p className="text-amber-200/80 text-sm">By Matthew Brown • Warm, respectful, cinematic stories</p>
        </div>
        <div className="text-amber-200/60 text-sm">
          © {new Date().getFullYear()} MemoryFilm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
