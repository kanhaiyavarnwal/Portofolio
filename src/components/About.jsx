import { motion } from 'framer-motion';
import { Braces, Database, ServerCog } from 'lucide-react';
import SectionHeading from './SectionHeading';

const cards = [
  { icon: Braces, title: 'Frontend', text: 'Responsive React interfaces with attention to UX, reusable components, and performance.' },
  { icon: ServerCog, title: 'Backend', text: 'REST APIs, authentication, business logic, and clean Express.js services.' },
  { icon: Database, title: 'Data', text: 'MongoDB-backed applications with practical CRUD, relationships, and product workflows.' },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A full-stack builder with an AI direction." description="I enjoy taking an idea from interface to API to database—and now I’m extending that foundation toward LLM and RAG-powered experiences." />
        <div className="grid gap-4 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="glass rounded-3xl p-6 hover:border-white/20">
              <Icon className="text-emerald-300" size={20} />
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
