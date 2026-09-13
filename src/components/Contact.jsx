
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  Linkedin,
  Github,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="For opportunities, collaborations, or a good technical conversation, send a message."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 sm:p-8"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-emerald-300">
              <Mail size={18} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Reach me directly
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Send me a message about an opportunity, collaboration, or project.
            </p>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
            >
              YOUR_EMAIL@gmail.com
              <ArrowUpRight size={14} />
            </a>

            <div className="mt-8 flex gap-3">

              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 p-2.5 text-slate-400 hover:border-white/20 hover:text-white"
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/kanhaiya-varnwal04/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 p-2.5 text-slate-400 hover:border-white/20 hover:text-white"
              >
                <Linkedin size={17} />
              </a>

            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">

              <label className="text-xs text-slate-400">
                Name

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/30"
                />
              </label>

              <label className="text-xs text-slate-400">
                Email

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/30"
                />
              </label>

            </div>

            <label className="mt-4 block text-xs text-slate-400">
              Message

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                placeholder="Tell me a little about the opportunity or idea..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/30"
              />
            </label>

            {sent && (
              <p className="mt-4 text-sm text-emerald-300">
                Your email app should now be open with the message filled in.
              </p>
            )}

            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Send message
              <Send size={15} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}











