import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import ProjectAnimationSVG from './ProjectAnimationSVG';

export default function ProjectCard({ title, description, tech, delay = 0 }) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden group relative hover:border-cyan-400/30 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6 }}
    >
      {/* Animation area */}
      <div className="relative bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-gray-900/80 dark:to-gray-950/80 border-b border-black/5 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5" />
        <ProjectAnimationSVG project={title} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t, i) => (
            <span key={i}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
