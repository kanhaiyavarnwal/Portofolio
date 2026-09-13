// import { motion } from 'framer-motion';
// import { ArrowUpRight, Github, LockKeyhole, Sparkles } from 'lucide-react';
// import SectionHeading from './SectionHeading';
// import { futureProjects, projects } from '../data/projects';
// import { toast } from 'react-toastify';
// const accentClasses = {
//   emerald: 'from-emerald-300/20 via-emerald-300/5 to-transparent border-emerald-300/10',
//   violet: 'from-violet-300/20 via-violet-300/5 to-transparent border-violet-300/10',
// };

// export default function Projects() {
//   return (
//     <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32">
//       <div className="mx-auto max-w-6xl">
//         <SectionHeading eyebrow="Selected work" title="Projects built around real user flows." description="These projects demonstrate full-stack product thinking: authentication, payments, media, data, and end-to-end workflows." />
//         <div className="space-y-6">
//           {projects.map((project, i) => (
//             <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: i * .05 }} className={`overflow-hidden rounded-[2rem] border bg-gradient-to-br ${accentClasses[project.accent]} to-slate-950/40 p-1`}>
//               <div className="grid gap-0 overflow-hidden rounded-[1.8rem] bg-[#091221]/90 lg:grid-cols-[.9fr_1.1fr]">
//                 <div className="relative min-h-72 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.16),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,.12),transparent_30%)] p-7 lg:border-b-0 lg:border-r">
//                   <div className="absolute right-5 top-5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-500">{project.number}</div>
//                   <div className="mt-10 max-w-sm">
//                     <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{project.type}</div>
//                     <div className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">{project.title}</div>
//                     <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
//                   </div>
//                   <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2">
//                     {project.stack.map(tag => <span key={tag} className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-slate-300">{tag}</span>)}
//                   </div>
//                 </div>
//                 <div className="p-7 lg:p-8">
//                   <div className="text-xs uppercase tracking-[0.18em] text-emerald-300">What it includes</div>
//                   <div className="mt-5 grid gap-3 sm:grid-cols-2">
//                     {project.features.map(feature => <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">{feature}</div>)}
//                   </div>
//                   <div className="mt-8 flex flex-wrap gap-3">
//                     <a href={project.github} className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-950 "><Github size={15} /> GitHub <ArrowUpRight size={14} /></a>
//                     <a  onClick={()=>{
//                          toast.success("This feature coming soon")

//                     }} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/5"><ArrowUpRight size={14} /> Live demo</a>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         <div className="mt-12 grid gap-4 md:grid-cols-2">
//           {futureProjects.map((project, i) => (
//             <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="rounded-3xl border border-dashed border-white/10 bg-slate-950/25 p-6">
//               <div className="flex items-center gap-2 text-xs font-medium text-violet-300"><Sparkles size={14} /> Exploring next</div>
//               <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
//               <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
//               <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] text-slate-400">{tag}</span>)}</div>
//               <div className="mt-5 inline-flex items-center gap-2 text-xs text-slate-500"><LockKeyhole size={13} /> Learning path — not presented as completed work</div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { futureProjects, projects } from "../data/projects";
import { toast } from "react-toastify";

const accentClasses = {
  emerald:
    "from-emerald-300/20 via-emerald-300/5 to-transparent border-emerald-300/10",
  violet:
    "from-violet-300/20 via-violet-300/5 to-transparent border-violet-300/10",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built around real user flows."
          description="These projects demonstrate full-stack product thinking: authentication, payments, media, data, and end-to-end workflows."
        />

        {/* Main Projects */}
        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
              }}
              className={`w-full overflow-hidden rounded-[1.5rem] border bg-gradient-to-br sm:rounded-[2rem] ${accentClasses[project.accent]} p-[2px]`}
            >
              <div className="grid w-full overflow-hidden rounded-[1.4rem] bg-[#091221]/90 sm:rounded-[1.8rem] lg:grid-cols-[0.9fr_1.1fr]">
                {/* LEFT */}
                <div
                  className="
                    relative
                    flex
                    min-h-[420px]
                    flex-col
                    overflow-hidden
                    bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.16),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,.12),transparent_30%)]
                    p-5
                    sm:min-h-[400px]
                    sm:p-7
                    lg:min-h-[420px]
                    lg:border-r
                    lg:border-white/10
                  "
                >
                  {/* Number */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-slate-500 sm:right-5 sm:top-5 sm:text-[10px]">
                    {project.number}
                  </div>

                  {/* Project Info */}
                  <div className="mt-12 max-w-xl sm:mt-10">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                      {project.type}
                    </div>

                    <div className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:mt-4 sm:text-3xl">
                      {project.title}
                    </div>

                    <p className="mt-3 max-w-lg text-xs leading-6 text-slate-400 sm:mt-4 sm:text-sm sm:leading-7">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-slate-300 sm:text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col p-5 sm:p-7 lg:p-8">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-300 sm:text-xs">
                    What it includes
                  </div>

                  {/* Features */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.02]
                          p-3
                          text-xs
                          leading-5
                          text-slate-300
                          transition
                          hover:bg-white/[0.04]
                          sm:rounded-2xl
                          sm:p-4
                          sm:text-sm
                        "
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-emerald-400
                        px-4
                        py-3
                        text-xs
                        font-semibold
                        text-slate-950
                        transition
                        hover:bg-emerald-600
                        sm:w-auto
                      "
                    >
                      <Github size={15} />
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        toast.success("This feature is coming soon");
                      }}
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        px-4
                        py-3
                        text-xs
                        font-semibold
                        text-white
                        transition
                        hover:bg-white/5
                        sm:w-auto
                      "
                    >
                      <ArrowUpRight size={14} />
                      Live demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Future Projects */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2">
          {futureProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
              }}
              className="
                w-full
                rounded-2xl
                border
                border-dashed
                border-white/10
                bg-slate-950/25
                p-5
                sm:rounded-3xl
                sm:p-6
              "
            >
              {/* Label */}
              <div className="flex items-center gap-2 text-[10px] font-medium text-violet-300 sm:text-xs">
                <Sparkles size={14} />
                Exploring next
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold leading-tight text-white sm:mt-4 sm:text-xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] text-slate-400 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-5 flex items-start gap-2 text-[10px] leading-5 text-slate-500 sm:text-xs">
                <LockKeyhole
                  size={13}
                  className="mt-0.5 shrink-0"
                />
                <span>
                  Learning path — not presented as completed work
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
