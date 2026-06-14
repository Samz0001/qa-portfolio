import { motion } from 'framer-motion';

const checkItems = [
  { label: 'Manual Testing', y: 72 },
  { label: 'API Testing', y: 94 },
  { label: 'Automation', y: 116 },
  { label: 'Regression', y: 138 },
];

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg viewBox="0 0 500 420" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#060612" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Laptop body */}
        <motion.rect
          x="60" y="180" width="380" height="230" rx="12"
          fill="url(#laptopGrad)"
          stroke="#334155" strokeWidth="1.5"
          initial={{ opacity: 0, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Laptop screen frame */}
        <motion.rect
          x="75" y="190" width="350" height="210" rx="8"
          fill="#0f0f1a"
          stroke="#1e293b" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Screen content */}
        <motion.rect
          x="80" y="195" width="340" height="200" rx="6"
          fill="url(#screenGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Screen glow pulse */}
        <motion.rect
          x="80" y="195" width="340" height="200" rx="6"
          fill="url(#glowGrad)"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Code lines on screen */}
        {[210, 220, 230, 240].map((y, i) => (
          <motion.rect
            key={i} x="95" y={y}
            width={60 + i * 20} height="4" rx="2"
            fill={i % 2 === 0 ? 'rgba(0,212,255,0.4)' : 'rgba(124,58,237,0.4)'}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          />
        ))}

        {/* Test Checklist Panel */}
        <motion.rect
          x="270" y="55" width="185" height="170" rx="10"
          fill="rgba(15,23,42,0.95)"
          stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          filter="url(#glow)"
        />
        <motion.text
          x="280" y="76" fontSize="11" fill="#00d4ff" fontFamily="monospace" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          TEST SUITE
        </motion.text>
        <motion.line x1="270" y1="83" x2="455" y2="83" stroke="rgba(0,212,255,0.2)" strokeWidth="1"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 }} />

        {checkItems.map((item, i) => (
          <g key={i}>
            {/* Checkbox bg */}
            <motion.rect
              x="283" y={item.y - 11} width="14" height="14" rx="3"
              fill="rgba(0,212,255,0.1)"
              stroke="rgba(0,212,255,0.5)" strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.3 }}
            />
            {/* Checkmark draw */}
            <motion.path
              d={`M${286} ${item.y - 4} L${289} ${item.y - 1} L${295} ${item.y - 7}`}
              fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.3, duration: 0.4 }}
            />
            {/* Label */}
            <motion.text
              x="303" y={item.y} fontSize="10" fill="#94a3b8" fontFamily="monospace"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.3 }}
            >
              {item.label}
            </motion.text>
          </g>
        ))}

        {/* Status bar */}
        <motion.rect x="280" y="198" width="160" height="18" rx="9"
          fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        />
        <motion.text x="318" y="210" fontSize="9" fill="#10b981" fontFamily="monospace"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        >
          4/4 PASSED ✓
        </motion.text>

        {/* Bug icon — floating */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.circle cx="95" cy="110" r="28"
            fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: 'spring' }}
          />
          {/* Bug body */}
          <ellipse cx="95" cy="112" rx="10" ry="12" fill="none" stroke="#ef4444" strokeWidth="1.8" />
          {/* Bug head */}
          <circle cx="95" cy="97" r="7" fill="none" stroke="#ef4444" strokeWidth="1.8" />
          {/* Antennae */}
          <line x1="91" y1="91" x2="87" y2="85" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="99" y1="91" x2="103" y2="85" stroke="#ef4444" strokeWidth="1.5" />
          {/* Legs */}
          <line x1="85" y1="104" x2="75" y2="100" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="85" y1="112" x2="74" y2="112" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="85" y1="120" x2="75" y2="124" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="105" y1="104" x2="115" y2="100" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="105" y1="112" x2="116" y2="112" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="105" y1="120" x2="115" y2="124" stroke="#ef4444" strokeWidth="1.5" />
          {/* X eyes */}
          <motion.text x="91" y="101" fontSize="6" fill="#ef4444" fontFamily="monospace"
            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✕✕
          </motion.text>
        </motion.g>

        {/* Shield verification */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <motion.circle cx="430" cy="100" r="30"
            fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.4)" strokeWidth="1"
            animate={{ r: [30, 34, 30], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.path
            d="M430 72 L448 80 L448 98 Q448 112 430 120 Q412 112 412 98 L412 80 Z"
            fill="rgba(124,58,237,0.2)" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <motion.path
            d="M422 96 L428 102 L440 88"
            fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          />
        </motion.g>

        {/* API nodes with connections */}
        {/* Node 1 */}
        <motion.circle cx="165" cy="85" r="18"
          fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5"
          animate={{ r: [18, 22, 18], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ scale: 0 }}
        />
        <motion.text x="157" y="89" fontSize="9" fill="#00d4ff" fontFamily="monospace" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        >
          API
        </motion.text>

        {/* Node 2 */}
        <motion.circle cx="230" cy="55" r="15"
          fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5"
          animate={{ r: [15, 19, 15], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          initial={{ scale: 0 }}
        />
        <motion.text x="221" y="59" fontSize="8" fill="#00d4ff" fontFamily="monospace" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        >
          REST
        </motion.text>

        {/* Node 3 */}
        <motion.circle cx="165" cy="145" r="15"
          fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5"
          animate={{ r: [15, 19, 15], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          initial={{ scale: 0 }}
        />
        <motion.text x="153" y="149" fontSize="8" fill="#00d4ff" fontFamily="monospace" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          GQL
        </motion.text>

        {/* Connection lines between nodes */}
        <motion.path
          d="M183 85 Q207 70 215 55"
          fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" strokeDasharray="5 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M165 103 L165 130"
          fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" strokeDasharray="5 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Automation arrows */}
        {[0, 1, 2].map((i) => (
          <motion.g key={i}
            animate={{ x: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          >
            <line
              x1={155 + i * 20} y1={158 + i * 6}
              x2={175 + i * 20} y2={158 + i * 6}
              stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"
            />
            <polygon
              points={`${178 + i * 20},${155 + i * 6} ${185 + i * 20},${158 + i * 6} ${178 + i * 20},${161 + i * 6}`}
              fill="#7c3aed"
            />
          </motion.g>
        ))}

        {/* Laptop base/keyboard */}
        <motion.rect
          x="40" y="408" width="420" height="12" rx="6"
          fill="#1e293b" stroke="#334155" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        />
        <rect x="200" y="405" width="100" height="8" rx="4" fill="#0f172a" />
      </svg>
    </div>
  );
}
