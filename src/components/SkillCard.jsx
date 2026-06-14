import { motion } from 'framer-motion';
import SkillIconSVG from './SkillIconSVG';

export default function SkillCard({ title, skills, iconType, delay = 0 }) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="flex items-center gap-4 mb-5">
        <div className="flex-shrink-0">
          <SkillIconSVG type={iconType} />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium
                       bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                       border border-cyan-500/20 text-cyan-300
                       hover:border-cyan-400/50 hover:bg-cyan-500/15 transition-all cursor-default"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 + i * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
