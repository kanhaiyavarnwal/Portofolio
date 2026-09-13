import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="orb pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
      <div className="orb pointer-events-none absolute right-[-80px] top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-1.5 text-xs font-medium text-emerald-200">
            <Sparkles size={14} /> Building with MERN · Exploring LLMs & RAG
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .05 }} className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Hi, I'm <span className="text-gradient">Kanhaiya</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .12 }} className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Full Stack MERN Developer building modern web applications and exploring <span className="text-slate-200">LLMs, Retrieval-Augmented Generation,</span> and intelligent AI-powered products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400  px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-600">View projects <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]">Contact me</a>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 text-slate-500">
            <a href="https://github.com/kanhaiyavarnwal" target="_blank" className="rounded-xl border border-white/10 p-2.5 hover:border-white/20 hover:text-white"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/kanhaiya-varnwal04/ " target="_blank" className="rounded-xl border border-white/10 p-2.5 hover:border-white/20 hover:text-white"><Linkedin size={17} /></a>
            <span className="h-px w-10 bg-white/10" />
            <span className="text-xs">Open to software engineering opportunities</span>
          </div>
        </div>

        {/* <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="relative mx-auto w-full max-w-md">
          <div className="glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(16,185,129,.14),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(139,92,246,.18),transparent_35%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-slate-400">developer_profile.json</span>
                <span className="text-[10px] text-emerald-300">ONLINE</span>
              </div>
              <div className="space-y-4 pt-5 font-mono text-xs">
                <div><span className="text-violet-300">"role"</span><span className="text-slate-500">: </span><span className="text-emerald-200">"Full Stack MERN Developer"</span></div>
                <div><span className="text-violet-300">"focus"</span><span className="text-slate-500">: </span><span className="text-emerald-200">["LLMs", "RAG"]</span></div>
                <div><span className="text-violet-300">"stack"</span><span className="text-slate-500">: </span><span className="text-emerald-200">["React", "Node", "MongoDB"]</span></div>
                <div><span className="text-violet-300">"goal"</span><span className="text-slate-500">: </span><span className="text-emerald-200">"Build useful products"</span></div>
              </div>
              <div className="mt-8 rounded-2xl border border-emerald-300/10 bg-emerald-300/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300" /> learning pipeline</div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                  {['MERN', 'APIs', 'Data', 'Embeddings', 'Retrieval', 'LLM'].map((item, i) => <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">{item}{i < 5 ? ' →' : ''}</span>)}
                </div>
              </div>
            </div>
          </div>
          <a href="#about" className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950 p-3 text-slate-400 hover:text-white"><ArrowDown size={16} /></a>
        </motion.div> */}



        
<motion.div
  initial={{
    opacity: 0,
    scale: 0.86,
    rotateY: 8,
    rotateZ:8,
    rotateX: 80,
      transformOrigin: "top left",
  }}
  animate={{
    opacity: 1,
    scale: 1,
    rotateY: -6,
    rotateX: 3,
  }}
  whileHover={{
    rotateY: -10,
    rotateX: 5,
    scale: 1.01,
  }}
  transition={{
    duration: 0.9,
    delay: 0.12,
  }}
  style={{
    transformStyle: "preserve-3d",
    perspective: 1000,
  }}
  className="relative mx-auto w-full max-w-md "
>
  <div className="glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(16,185,129,.14),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(139,92,246,.18),transparent_35%)]" />

    <div className="relative rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-medium text-slate-400">
          developer_profile.json
        </span>

        <span className="text-[10px] text-emerald-300">
          ONLINE
        </span>
      </div>

      <div className="space-y-4 pt-5 font-mono text-xs">
        <div>
          <span className="text-violet-300">"role"</span>
          <span className="text-slate-500">: </span>
          <span className="text-emerald-200">
            "Full Stack MERN Developer"
          </span>
        </div>

        <div>
          <span className="text-violet-300">"focus"</span>
          <span className="text-slate-500">: </span>
          <span className="text-emerald-200">
            ["LLMs", "RAG"]
          </span>
        </div>

        <div>
          <span className="text-violet-300">"stack"</span>
          <span className="text-slate-500">: </span>
          <span className="text-emerald-200">
            ["React", "Node", "MongoDB"]
          </span>
        </div>

        <div>
          <span className="text-violet-300">"goal"</span>
          <span className="text-slate-500">: </span>
          <span className="text-emerald-200">
            "Build useful products"
          </span>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-300/10 bg-emerald-300/5 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          learning pipeline
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
          {["MERN", "APIs", "Data", "Embeddings", "Retrieval", "LLM"].map(
            (item, i) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5"
              >
                {item}
                {i < 5 ? " →" : ""}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </div>

  <a
    href="#about"
    className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950 p-3 text-slate-400 hover:text-white"
  >
    <ArrowDown size={16} />
  </a>
</motion.div>






      </div>
    </section>
  );
}
