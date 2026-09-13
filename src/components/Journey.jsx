import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code2, DatabaseZap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  { icon: Code2, label: 'Web foundations', text: 'HTML, CSS, JavaScript, responsive UI, and developer tooling.' },
  { icon: DatabaseZap, label: 'MERN development', text: 'React, Node.js, Express, MongoDB, APIs, auth, payments, and cloud media.' },
  { icon: Brain, label: 'LLM + RAG direction', text: 'Exploring retrieval, embeddings, vector search, prompting, and AI product architecture.' },
];

export default function Journey() {
  return (
    <section id="journey" className="border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Learning journey" title="From full-stack foundations to intelligent products." description="A simple progression: build strong software fundamentals first, then add AI capabilities where they create real product value." />
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map(({ icon: Icon, label, text }, i) => (
            <motion.div key={label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="relative rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-emerald-300"><Icon size={18} /></div>
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
              {i < steps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-600 lg:block" size={18} />}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-300/[0.05] to-violet-300/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Current focus</div>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300"><span className="rounded-xl border border-white/10 px-3 py-2">DSA</span><span className="rounded-xl border border-white/10 px-3 py-2">Computer Networks</span><span className="rounded-xl border border-white/10 px-3 py-2">Operating Systems</span><span className="rounded-xl border border-white/10 px-3 py-2">Next.js</span><span className="rounded-xl border border-emerald-300/15 bg-emerald-300/5 px-3 py-2 text-emerald-200">LLMs</span><span className="rounded-xl border border-emerald-300/15 bg-emerald-300/5 px-3 py-2 text-emerald-200">RAG</span></div>
        </div>
      </div>
    </section>
  );
}
