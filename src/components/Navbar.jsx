import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['LLM & RAG', '#llm'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/10">
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-sm font-black text-slate-950">KV</span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:block">Kanhaiya.dev</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium text-slate-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="https://github.com/kanhaiyavarnwal" target='_blank' aria-label="GitHub" className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/kanhaiya-varnwal04/" target='_blank' aria-label="LinkedIn" className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"><Linkedin size={16} /></a>
          <a href="#contact" className="ml-1 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-600">Let's talk</a>
        </div>

        <button className="rounded-lg p-2 text-slate-300 lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{label}</a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
