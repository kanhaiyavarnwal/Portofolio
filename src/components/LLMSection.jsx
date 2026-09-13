import { motion } from 'framer-motion';
import { Braces, Database, FileText, Search, Sparkles, WandSparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const pipeline = [
  { icon: FileText, title: 'Documents', text: 'Source material' },
  { icon: Braces, title: 'Embeddings', text: 'Meaning as vectors' },
  { icon: Database, title: 'Vector search', text: 'Find relevant context' },
  { icon: Search, title: 'Retrieved context', text: 'Ground the answer' },
  { icon: WandSparkles, title: 'LLM', text: 'Generate response' },
];

export default function LLMSection() {
  return (
    <section id="llm" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="AI direction" title="Exploring LLMs & RAG" description="I’m interested in the engineering behind useful AI applications: connecting data and retrieval systems to language models, then wrapping the experience in a reliable full-stack product." />
        <div className="overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-gradient-to-br from-emerald-300/[0.06] via-slate-950/60 to-violet-400/[0.05] p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {pipeline.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="relative rounded-2xl border border-white/10 bg-black/15 p-4">
                <div className="flex items-center justify-between">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04] text-emerald-300"><Icon size={16} /></div>
                  <span className="text-[10px] text-slate-600">0{i + 1}</span>
                </div>
                <div className="mt-5 text-sm font-semibold text-white">{title}</div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                {i < pipeline.length - 1 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/10 lg:block" />}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
            <Sparkles size={17} className="shrink-0 text-violet-300" />
            The goal: combine strong software engineering with AI systems that retrieve useful information and produce grounded, relevant responses.
          </div>
        </div>
      </div>
    </section>
  );
}
