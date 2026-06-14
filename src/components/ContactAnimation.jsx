import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactAnimation() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
      >
        <svg viewBox="0 0 200 160" className="w-48 h-36">
          <defs>
            <linearGradient id="envelopeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Floating particles */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx={40 + i * 30} cy={20 + (i % 3) * 15} r="2"
              fill={i % 2 === 0 ? '#00d4ff' : '#7c3aed'}
              animate={{
                cy: [20 + (i % 3) * 15, 10 + (i % 3) * 15, 20 + (i % 3) * 15],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* Envelope body */}
          <motion.rect
            x="20" y={hovered ? 70 : 60} width="160" height="90" rx="8"
            fill="url(#envelopeGrad)"
            stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"
            animate={{ y: hovered ? 70 : 60 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Envelope flap — opens on hover */}
          <motion.path
            d={hovered
              ? "M20 70 L100 40 L180 70"
              : "M20 70 L100 110 L180 70"}
            fill="#0f172a"
            stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

          {/* Bottom V fold */}
          <motion.path
            d="M20 160 L100 115 L180 160"
            fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1"
            animate={{ y: hovered ? 10 : 0 }}
          />

          {/* Message card slides up */}
          <motion.g animate={{ y: hovered ? -35 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <rect x="55" y="58" width="90" height="60" rx="5"
              fill="#1e3a5f" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
            <text x="100" y="76" fontSize="8" fill="#00d4ff" fontFamily="monospace" textAnchor="middle" fontWeight="700">
              HI THERE!
            </text>
            <line x1="65" y1="84" x2="135" y2="84" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
            <text x="100" y="96" fontSize="6.5" fill="rgba(148,163,184,0.8)" fontFamily="monospace" textAnchor="middle">
              Let&apos;s connect and
            </text>
            <text x="100" y="107" fontSize="6.5" fill="rgba(148,163,184,0.8)" fontFamily="monospace" textAnchor="middle">
              build something great
            </text>
          </motion.g>

          {/* Envelope diagonal lines */}
          <motion.line x1="20" y1="70" x2="100" y2="115" stroke="rgba(0,212,255,0.15)" strokeWidth="1"
            animate={{ y1: hovered ? 70 : 70, y2: hovered ? 140 : 115 }}
          />
          <motion.line x1="180" y1="70" x2="100" y2="115" stroke="rgba(0,212,255,0.15)" strokeWidth="1"
            animate={{ y2: hovered ? 140 : 115 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
