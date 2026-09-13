import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Toolkit" title="Skills that ship products." description="A practical stack for full-stack development, with a growing focus on the building blocks behind modern LLM and RAG systems." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.article key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className={`rounded-3xl border p-5 ${group.title === 'AI / LLM' ? 'border-emerald-300/20 bg-emerald-300/[0.04]' : 'border-white/10 bg-slate-950/30'}`}>
              <div className="text-sm font-semibold text-white">{group.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
