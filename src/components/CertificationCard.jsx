import { motion } from 'framer-motion';

function CertBadgeSVG({ color = '#00d4ff', index = 0 }) {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20">
      <defs>
        <linearGradient id={`certGrad${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={index === 0 ? '#7c3aed' : '#00d4ff'} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Border drawing */}
      <motion.rect x="5" y="5" width="90" height="90" rx="12"
        fill={`url(#certGrad${index})`}
        stroke={color} strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: index * 0.3 }}
      />
      {/* Ribbon */}
      <motion.polygon
        points="5,5 35,5 20,28"
        fill={color} opacity="0.6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5 + index * 0.3 }}
      />
      {/* Shield */}
      <motion.path d="M50 22 L65 28 L65 44 Q65 55 50 62 Q35 55 35 44 L35 28 Z"
        fill={`${color}22`} stroke={color} strokeWidth="1.5" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6 + index * 0.3, duration: 0.8 }}
      />
      {/* Check in shield */}
      <motion.path d="M43 43 L49 49 L59 36"
        fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.4 + index * 0.3, duration: 0.5 }}
      />
      {/* Sparkles */}
      {[[15, 75], [80, 20], [82, 78], [18, 22]].map(([cx, cy], si) => (
        <motion.g key={si}
          animate={{ scale: [0, 1.2, 0], rotate: [0, 180, 360] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ delay: 1 + si * 0.2, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke={color} strokeWidth="1.5" opacity="0.7" />
          <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke={color} strokeWidth="1.5" opacity="0.7" />
        </motion.g>
      ))}
      {/* Ribbon bottom */}
      <motion.path d="M35 88 L50 78 L65 88 L65 95 L50 85 L35 95 Z"
        fill={color} opacity="0.4"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        style={{ transformOrigin: '50px 88px' }}
        transition={{ delay: 0.8 + index * 0.3 }}
      />
    </svg>
  );
}

export default function CertificationCard({ title, issuer, index = 0 }) {
  const colors = ['#00d4ff', '#7c3aed'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="glass rounded-2xl p-6 flex flex-col items-center text-center group hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <CertBadgeSVG color={color} index={index} />

      <h3 className="text-base font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-xs font-mono">{issuer}</p>

      {/* Verified pill */}
      <motion.div
        className="mt-3 px-3 py-1 rounded-full text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        Certified
      </motion.div>
    </motion.div>
  );
}
