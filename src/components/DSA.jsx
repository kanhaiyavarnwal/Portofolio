import { motion } from 'framer-motion';
import { Brackets, Network, Server } from 'lucide-react';
import SectionHeading from './SectionHeading';

const subjects = [
  { icon: Brackets, title: 'DSA', text: 'Arrays, strings, recursion, sorting, searching, linked lists, stacks, queues, trees, graphs, and problem solving.' },
  { icon: Network, title: 'Computer Networks', text: 'Building understanding of HTTP, TCP/IP, DNS, client-server communication, and common web fundamentals.' },
  { icon: Server, title: 'Operating Systems', text: 'Processes, threads, memory, scheduling, synchronization, and core interview concepts.' },
];

export default function DSA() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Interview prep" title="Sharpening core CS fundamentals." description="Alongside projects, I’m strengthening the fundamentals that make engineering decisions more rigorous and interview-ready." />
        <div className="grid gap-4 md:grid-cols-3">
          {subjects.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }} className="rounded-3xl border border-white/10 bg-slate-950/35 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-violet-300"><Icon size={18} /></div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
