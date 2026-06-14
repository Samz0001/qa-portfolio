import { motion } from 'framer-motion';

export default function Timeline({ items, type = 'experience' }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px">
        <motion.div
          className="w-full bg-gradient-to-b from-cyan-400 via-purple-600 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ height: '100%', transformOrigin: 'top' }}
        />
      </div>

      <div className="space-y-12 pl-20">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[52px] top-6 z-10">
              <motion.div
                className="relative w-5 h-5"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </motion.div>
            </div>

            {/* Card */}
            <div className="glass rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 group neon-border hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mt-0.5">{item.org}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {item.period}
                  </span>
                  {item.location && (
                    <p className="text-gray-500 text-xs mt-1">{item.location}</p>
                  )}
                  {item.grade && (
                    <p className="text-green-400 text-xs font-mono mt-1">{item.grade}</p>
                  )}
                </div>
              </div>

              {/* Responsibilities / bullets */}
              {item.bullets && (
                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      className="flex gap-3 text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08 }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
