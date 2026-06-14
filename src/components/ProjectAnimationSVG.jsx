import { motion } from 'framer-motion';

function ZeoGenieAnimation() {
  const fields = [
    { y: 38, label: 'Full Name', value: 'Shyam Dua' },
    { y: 60, label: 'Email', value: 'shyam@email.com' },
    { y: 82, label: 'University', value: 'Chitkara Univ.' },
    { y: 104, label: 'Program', value: 'MCA' },
  ];
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full">
      <defs>
        <linearGradient id="formGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      {/* Form card */}
      <rect x="10" y="10" width="160" height="140" rx="8" fill="url(#formGrad)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      <text x="90" y="28" fontSize="10" fill="#00d4ff" fontFamily="monospace" fontWeight="700" textAnchor="middle">APPLICATION FORM</text>
      {fields.map((f, i) => (
        <g key={i}>
          <motion.rect x="18" y={f.y} width="144" height="14" rx="3"
            fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.2)" strokeWidth="1"
            animate={{ stroke: ['rgba(0,212,255,0.2)', 'rgba(0,212,255,0.8)', 'rgba(0,212,255,0.2)'] }}
            transition={{ delay: i * 0.6, duration: 0.4, repeat: Infinity, repeatDelay: 2.4 }}
          />
          <text x="22" y={f.y + 10} fontSize="7" fill="rgba(148,163,184,0.5)" fontFamily="monospace">{f.label}</text>
          <motion.text x="22" y={f.y + 10} fontSize="7" fill="#00d4ff" fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 1] }}
            transition={{ delay: 0.3 + i * 0.6, duration: 0.3, repeat: Infinity, repeatDelay: 2.1 }}
          >
            {f.value}
          </motion.text>
          <motion.path d={`M${140} ${f.y + 2} L${145} ${f.y + 7} L${154} ${f.y - 1}`}
            fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 0.5 + i * 0.6, duration: 0.3, repeat: Infinity, repeatDelay: 2.1 }}
          />
        </g>
      ))}
      {/* Cursor */}
      <motion.polygon points="185,30 195,38 188,38 192,48 182,40 189,40"
        fill="#7c3aed"
        animate={{ x: [0, 0, 0, 0], y: [0, 28, 50, 72] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Bot icon */}
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <rect x="188" y="95" width="40" height="52" rx="6" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="198" y="85" width="20" height="16" rx="4" fill="rgba(124,58,237,0.15)" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="203" cy="93" r="3" fill="#a78bfa" />
        <circle cx="213" cy="93" r="3" fill="#a78bfa" />
        <motion.line x1="208" y1="120" x2="188" y2="130" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"
          animate={{ x2: [188, 182, 188] }} transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.line x1="208" y1="120" x2="228" y2="130" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"
          animate={{ x2: [228, 234, 228] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
        />
      </motion.g>
    </svg>
  );
}

function ZeoVerifyAnimation() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full">
      {/* Document */}
      <rect x="30" y="10" width="120" height="140" rx="6" fill="rgba(15,23,42,0.9)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      <rect x="40" y="22" width="100" height="8" rx="2" fill="rgba(148,163,184,0.15)" />
      {[34, 42, 50, 58, 66].map((y, i) => (
        <motion.rect key={i} x="40" y={30 + y} width={60 + (i % 3) * 15} height="4" rx="1"
          fill="rgba(148,163,184,0.1)"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
        />
      ))}
      {/* Scanner line */}
      <motion.line x1="30" y1="10" x2="150" y2="10" stroke="#00d4ff" strokeWidth="2"
        animate={{ y1: [10, 148, 10], y2: [10, 148, 10], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Scan glow */}
      <motion.rect x="30" y="10" width="120" height="12" rx="0" fill="rgba(0,212,255,0.08)"
        animate={{ y: [10, 145, 10] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Verified badge */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        style={{ transformOrigin: '185px 80px' }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <circle cx="185" cy="80" r="30" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2" />
        <path d="M170 80 L180 90 L200 68" fill="none" stroke="#10b981" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round" />
        <text x="185" y="118" fontSize="8" fill="#10b981" fontFamily="monospace" fontWeight="700" textAnchor="middle">VERIFIED</text>
      </motion.g>
      {/* OCR text lines fade in */}
      {[85, 95, 105, 115].map((y, i) => (
        <motion.text key={i} x="40" y={y} fontSize="6" fill="rgba(0,212,255,0.6)" fontFamily="monospace"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: [0, 0.6, 0.6], x: [45, 40, 40] }}
          transition={{ delay: 0.5 + i * 0.2, duration: 0.4, repeat: Infinity, repeatDelay: 2.6 }}
        >
          {['OCR: DETECTED', 'SIG: VALID', 'ID: MATCHED', 'STATUS: OK'][i]}
        </motion.text>
      ))}
    </svg>
  );
}

function ZeoCRMAnimation() {
  const stages = [
    { x: 20, label: 'INQUIRY', color: '#00d4ff' },
    { x: 75, label: 'APP', color: '#7c3aed' },
    { x: 130, label: 'PAYMENT', color: '#f59e0b' },
    { x: 185, label: 'INVOICE', color: '#10b981' },
  ];
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full">
      {/* Pipeline track */}
      <line x1="30" y1="80" x2="210" y2="80" stroke="rgba(148,163,184,0.2)" strokeWidth="2" />
      {/* Stage nodes */}
      {stages.map((s, i) => (
        <g key={i}>
          <motion.circle cx={s.x + 15} cy="80" r="16"
            fill={`${s.color}15`} stroke={s.color} strokeWidth="1.5"
            animate={{ r: [16, 20, 16] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
          <text x={s.x + 15} y="84" fontSize="6" fill={s.color} fontFamily="monospace" fontWeight="700" textAnchor="middle">{s.label}</text>
          <text x={s.x + 15} y="108" fontSize="7" fill="rgba(148,163,184,0.6)" fontFamily="monospace" textAnchor="middle">0{i + 1}</text>
        </g>
      ))}
      {/* Moving dot */}
      <motion.circle r="5" fill="#00d4ff"
        animate={{
          cx: [35, 90, 145, 200, 200],
          opacity: [1, 1, 1, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.6, 0.9, 1] }}
      />
      {/* Stage highlight */}
      {stages.map((s, i) => (
        <motion.circle key={`hl-${i}`} cx={s.x + 15} cy="80" r="20"
          fill="none" stroke={s.color} strokeWidth="2" opacity="0"
          animate={{ opacity: [0, 0.8, 0], r: [16, 26, 36] }}
          transition={{ delay: i * 0.75, duration: 0.6, repeat: Infinity, repeatDelay: 2.25 }}
        />
      ))}
      {/* Arrow connections */}
      {stages.slice(0, 3).map((s, i) => (
        <motion.path key={`arr-${i}`}
          d={`M${s.x + 31} 80 L${stages[i + 1].x} 80`}
          fill="none" stroke={`${s.color}60`} strokeWidth="1.5" strokeDasharray="4 2"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {/* Title */}
      <text x="120" y="148" fontSize="9" fill="rgba(148,163,184,0.5)" fontFamily="monospace" textAnchor="middle">CRM PIPELINE TRACKER</text>
    </svg>
  );
}

function ZeoSignAnimation() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-full">
      {/* Document */}
      <rect x="20" y="10" width="130" height="140" rx="6" fill="rgba(15,23,42,0.9)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      {[25, 35, 45, 55, 65, 75].map((y, i) => (
        <rect key={i} x="32" y={y} width={70 + (i % 3) * 10} height="4" rx="1" fill="rgba(148,163,184,0.1)" />
      ))}
      {/* Signature line */}
      <line x1="32" y1="130" x2="130" y2="130" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      {/* Animated signature path */}
      <motion.path
        d="M35 128 Q45 118 55 128 Q65 138 75 120 Q85 102 95 118 L105 125 Q115 128 125 122"
        fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
      />
      {/* Verified badge */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 1, 0] }}
        style={{ transformOrigin: '185px 80px' }}
        transition={{ delay: 1.6, duration: 0.4, repeat: Infinity, repeatDelay: 1.1 }}
      >
        <circle cx="185" cy="80" r="28" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2" />
        <path d="M172 80 L181 89 L200 68" fill="none" stroke="#10b981" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      {/* Stamp effect */}
      <motion.rect x="160" y="115" width="50" height="28" rx="4"
        fill="rgba(124,58,237,0.05)" stroke="#7c3aed" strokeWidth="1.5"
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: [2, 1, 1, 1], opacity: [0, 1, 1, 0] }}
        style={{ transformOrigin: '185px 129px' }}
        transition={{ delay: 2, duration: 0.3, repeat: Infinity, repeatDelay: 1.7 }}
      />
      <motion.text x="185" y="127" fontSize="7" fill="#7c3aed" fontFamily="monospace" fontWeight="700" textAnchor="middle"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 2.1, duration: 0.3, repeat: Infinity, repeatDelay: 1.6 }}
      >
        SIGNED
      </motion.text>
      <motion.text x="185" y="137" fontSize="6" fill="#7c3aed" fontFamily="monospace" textAnchor="middle"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 2.1, duration: 0.3, repeat: Infinity, repeatDelay: 1.6 }}
      >
        DIGITALLY
      </motion.text>
    </svg>
  );
}

const animationMap = {
  ZeoGenie: ZeoGenieAnimation,
  ZeoVerify: ZeoVerifyAnimation,
  ZeoCRM: ZeoCRMAnimation,
  ZeoSign: ZeoSignAnimation,
};

export default function ProjectAnimationSVG({ project }) {
  const Anim = animationMap[project] || ZeoGenieAnimation;
  return (
    <div className="w-full h-40">
      <Anim />
    </div>
  );
}
