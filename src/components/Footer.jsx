import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} Kanhaiya Varnwal. Built with React.</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/kanhaiyavarnwal" target='_blank' aria-label="GitHub" className="rounded-lg p-2 text-slate-500 hover:text-white"><Github size={15} /></a>
          <a href="https://www.linkedin.com/in/kanhaiya-varnwal04/" target="_blank" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-500 hover:text-white"><Linkedin size={15} /></a>
          <a href="#top" aria-label="Back to top" className="rounded-lg border border-white/10 p-2 text-slate-500 hover:text-white"><ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
