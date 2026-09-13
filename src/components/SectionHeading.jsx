import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .55 }} className="mb-12 max-w-3xl">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>}
    </motion.div>
  );
}
