import { motion } from 'framer-motion';

function TestingIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      <rect x="10" y="15" width="60" height="55" rx="6" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" />
      {[28, 40, 52, 64].map((y, i) => (
        <g key={i}>
          <motion.rect x="18" y={y - 7} width="10" height="10" rx="2"
            fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.5)" strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}
          />
          <motion.path d={`M${20} ${y - 2} L${23} ${y + 1} L${26} ${y - 4}`}
            fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.25, duration: 0.4 }}
          />
          <motion.rect x="34" y={y - 4} width={20 + i * 5} height="4" rx="2"
            fill="rgba(0,212,255,0.2)"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 + i * 0.2 }}
          />
        </g>
      ))}
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Robot head */}
      <motion.rect x="22" y="12" width="36" height="28" rx="6"
        fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1.5"
        animate={{ boxShadow: ['0 0 0px #7c3aed', '0 0 10px #7c3aed', '0 0 0px #7c3aed'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Eyes */}
      {[30, 46].map((x, i) => (
        <motion.circle key={i} cx={x} cy="26" r="4"
          fill="rgba(124,58,237,0.3)" stroke="#a78bfa" strokeWidth="1.5"
          animate={{ fill: ['rgba(124,58,237,0.3)', 'rgba(124,58,237,0.8)', 'rgba(124,58,237,0.3)'] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {/* Mouth */}
      <motion.path d="M30 36 Q40 42 50 36" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"
        animate={{ d: ['M30 36 Q40 42 50 36', 'M30 38 Q40 44 50 38', 'M30 36 Q40 42 50 36'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Body */}
      <rect x="28" y="40" width="24" height="20" rx="4" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1.5" />
      {/* Arms */}
      <motion.line x1="28" y1="45" x2="14" y2="50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [14, 10, 14], y2: [50, 55, 50] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.line x1="52" y1="45" x2="66" y2="50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [66, 70, 66], y2: [50, 45, 50] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      {/* Flow arrows */}
      {[0, 1].map((i) => (
        <motion.path key={i} d={`M${18 + i * 30} 68 L${28 + i * 30} 68`}
          fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"
          strokeDasharray="4 2"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
        />
      ))}
    </svg>
  );
}

function APIIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {[
        { cx: 40, cy: 20, label: 'API' },
        { cx: 18, cy: 55, label: 'GET' },
        { cx: 62, cy: 55, label: 'POST' },
      ].map((node, i) => (
        <g key={i}>
          <motion.circle cx={node.cx} cy={node.cy} r={i === 0 ? 14 : 11}
            fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5"
            animate={{ r: [i === 0 ? 14 : 11, (i === 0 ? 14 : 11) + 4, i === 0 ? 14 : 11] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
          <text x={node.cx} y={node.cy + 4} fontSize="7" fill="#00d4ff" fontFamily="monospace"
            fontWeight="700" textAnchor="middle">
            {node.label}
          </text>
        </g>
      ))}
      {/* Connecting lines */}
      {[
        { x1: 30, y1: 30, x2: 23, y2: 45 },
        { x1: 50, y1: 30, x2: 57, y2: 45 },
      ].map((l, i) => (
        <motion.line key={i} {...l} stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" strokeDasharray="4 2"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* DB cylinder rings */}
      {[20, 35, 50].map((y, i) => (
        <motion.ellipse key={i} cx="40" cy={y} rx="24" ry="8"
          fill={i === 0 ? "rgba(0,212,255,0.15)" : "rgba(0,212,255,0.05)"}
          stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"
          animate={{ ry: [8, 10, 8], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <rect x="16" y="20" width="48" height="30" fill="rgba(0,212,255,0.05)" />
      <line x1="16" y1="20" x2="16" y2="50" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" />
      <line x1="64" y1="20" x2="64" y2="50" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" />
      {/* Scan line */}
      <motion.line x1="16" y1="20" x2="64" y2="20" stroke="#00d4ff" strokeWidth="2" opacity="0.8"
        animate={{ y1: [20, 50, 20], y2: [20, 50, 20] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Pulse rings */}
      <motion.ellipse cx="40" cy="65" rx="10" ry="4"
        fill="none" stroke="rgba(0,212,255,0.4)" strokeWidth="1"
        animate={{ rx: [10, 20, 10], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Shield */}
      <motion.path d="M40 10 L62 20 L62 42 Q62 60 40 70 Q18 60 18 42 L18 20 Z"
        fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Scan line over shield */}
      <motion.line x1="18" y1="25" x2="62" y2="25" stroke="#a78bfa" strokeWidth="2" opacity="0.7"
        animate={{ y1: [15, 65, 15], y2: [15, 65, 15] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Check inside */}
      <motion.path d="M30 42 L37 49 L52 32" fill="none" stroke="#10b981" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />
      {/* Pulse */}
      <motion.path d="M40 10 L62 20 L62 42 Q62 60 40 70 Q18 60 18 42 L18 20 Z"
        fill="none" stroke="#7c3aed" strokeWidth="0.5"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
        style={{ transformOrigin: '40px 40px' }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Central gear */}
      <motion.circle cx="40" cy="40" r="12" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5"
        animate={{ rotate: 360 }} style={{ transformOrigin: '40px 40px' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 40 + Math.cos(rad) * 12;
        const y1 = 40 + Math.sin(rad) * 12;
        const x2 = 40 + Math.cos(rad) * 18;
        const y2 = 40 + Math.sin(rad) * 18;
        return <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#00d4ff" strokeWidth="3" strokeLinecap="round"
          animate={{ rotate: 360 }} style={{ transformOrigin: '40px 40px' }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />;
      })}
      {/* Floating tool icons */}
      {[
        { label: 'JS', x: 8, y: 12, color: '#f7df1e' },
        { label: 'PW', x: 55, y: 8, color: '#2ead33' },
        { label: 'PM', x: 58, y: 58, color: '#ff6c37' },
        { label: 'SE', x: 5, y: 60, color: '#00b4a0' },
      ].map((t, i) => (
        <motion.g key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        >
          <rect x={t.x} y={t.y} width="18" height="14" rx="3" fill={`${t.color}22`} stroke={t.color} strokeWidth="1" />
          <text x={t.x + 9} y={t.y + 10} fontSize="7" fill={t.color} fontFamily="monospace" fontWeight="700" textAnchor="middle">{t.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}

const iconMap = {
  testing: TestingIcon,
  automation: AutomationIcon,
  api: APIIcon,
  database: DatabaseIcon,
  security: SecurityIcon,
  tools: ToolsIcon,
};

export default function SkillIconSVG({ type }) {
  const Icon = iconMap[type] || TestingIcon;
  return <Icon />;
}
