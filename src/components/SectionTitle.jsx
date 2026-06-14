import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, accent }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <span className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase">
          {accent || title}
        </span>
        <motion.div
          className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
