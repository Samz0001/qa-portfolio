import { motion } from 'framer-motion';

const nodes = [
  { cx: '10%', cy: '20%', r: 3, delay: 0 },
  { cx: '85%', cy: '15%', r: 2, delay: 0.5 },
  { cx: '50%', cy: '10%', r: 4, delay: 1 },
  { cx: '75%', cy: '60%', r: 2.5, delay: 1.5 },
  { cx: '20%', cy: '70%', r: 3, delay: 2 },
  { cx: '90%', cy: '80%', r: 2, delay: 0.8 },
  { cx: '35%', cy: '85%', r: 3.5, delay: 1.2 },
  { cx: '60%', cy: '40%', r: 2, delay: 0.3 },
];

const paths = [
  'M 10% 20% Q 30% 5% 50% 10%',
  'M 50% 10% Q 70% 5% 85% 15%',
  'M 85% 15% Q 90% 40% 75% 60%',
  'M 20% 70% Q 25% 78% 35% 85%',
];

export default function AnimatedBackground({ dark }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={dark ? '#00d4ff' : '#3b82f6'} stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={dark ? '#7c3aed' : '#8b5cf6'} stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="blur-heavy">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        {/* Gradient blobs */}
        <motion.ellipse
          cx="20%" cy="30%" rx="300" ry="250"
          fill="url(#blob1)"
          filter="url(#blur-heavy)"
          animate={{ cx: ['20%', '25%', '20%'], cy: ['30%', '25%', '30%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx="80%" cy="70%" rx="280" ry="220"
          fill="url(#blob2)"
          filter="url(#blur-heavy)"
          animate={{ cx: ['80%', '75%', '80%'], cy: ['70%', '75%', '70%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke={dark ? 'rgba(0,212,255,0.04)' : 'rgba(59,130,246,0.06)'} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Floating nodes */}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx} cy={n.cy} r={n.r}
            fill={i % 2 === 0 ? '#00d4ff' : '#7c3aed'}
            opacity={0.4}
            animate={{
              cy: [n.cy, `calc(${n.cy} - 15px)`, n.cy],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 4 + n.delay, repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
          />
        ))}

        {/* Circuit path lines */}
        {['M150,80 L300,80 L300,200 L450,200', 'M600,300 L750,300 L750,150 L900,150',
          'M100,400 L200,400 L200,500 L350,500', 'M800,400 L900,400 L900,500'].map((d, i) => (
          <motion.path
            key={i} d={d}
            fill="none"
            stroke={i % 2 === 0 ? 'rgba(0,212,255,0.12)' : 'rgba(124,58,237,0.12)'}
            strokeWidth="1.5"
            strokeDasharray="8 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
          />
        ))}

        {/* Moving dots along paths */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`dot-${i}`}
            r="2"
            fill="#00d4ff"
            opacity={0.6}
            animate={{
              cx: [150 + i * 200, 300 + i * 200, 300 + i * 200],
              cy: [80, 80, 200],
            }}
            transition={{ duration: 3, delay: i * 1.2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
          />
        ))}

        {/* Code-like horizontal lines */}
        {[15, 30, 45, 60, 75, 90].map((pct, i) => (
          <motion.line
            key={`line-${i}`}
            x1="0" y1={`${pct}%`}
            x2={`${20 + (i % 3) * 15}%`} y2={`${pct}%`}
            stroke={i % 2 === 0 ? 'rgba(0,212,255,0.06)' : 'rgba(124,58,237,0.06)'}
            strokeWidth="1"
            strokeDasharray="4 8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  );
}
