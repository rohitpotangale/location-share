"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Heart, Gift as GiftIcon } from "lucide-react";
import { motion } from "framer-motion";
import Matter from "matter-js";

export function Progress({ step, dark = false }) {
  return (
    <div className="bs-progress" aria-label={`Step ${step} of 9`}>
      <div className="bs-progress-track">
        <motion.i
          initial={{ width: 0 }}
          animate={{ width: `${(step / 9) * 100}%` }}
          transition={{ duration: 0.55 }}
        />
      </div>
      <span className={dark ? "dark" : ""}>{String(step).padStart(2, "0")} / 09</span>
    </div>
  );
}

export function Screen({ step, dark = false, children }) {
  return (
    <motion.section
      className={`bs-screen ${dark ? "is-dark" : ""}`}
      initial={{ opacity: 0, x: 28, scale: 0.99 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -28, scale: 0.99 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <Progress step={step} dark={dark} />
      {children}
    </motion.section>
  );
}

export function FlowButton({ children, onClick, icon: Icon, showArrow = true, disabled = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="bs-flow-btn"
    >
      <span className="bs-flow-shine" />
      <span className="bs-flow-content">
        {Icon ? <Icon size={18} strokeWidth={1.8} /> : <GiftIcon size={18} strokeWidth={1.8} />}
        <span>{children}</span>
        {showArrow && <ArrowRight size={16} strokeWidth={1.8} className="bs-flow-arrow" />}
      </span>
    </motion.button>
  );
}

/* Kept as an alias so older screens using Button continue to work. */
export const Button = FlowButton;

export function FloatingHearts({ dark = false }) {
  const items = ["♡", "♥", "✦", "♡", "✦"];
  return (
    <div className={`bs-floating ${dark ? "dark" : ""}`} aria-hidden="true">
      {items.map((x, i) => (
        <motion.span
          key={i}
          style={{ left: `${8 + i * 21}%`, top: `${12 + (i % 3) * 27}%` }}
          animate={{ y: [0, -10, 0], rotate: [-8, 8, -8], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.45 }}
        >
          {x}
        </motion.span>
      ))}
    </div>
  );
}

export function Cake() {
  return (
    <motion.div className="bs-cake-svg" initial={{ scale: 0.78, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 150, damping: 13 }}>
      <svg viewBox="0 0 260 170" role="img" aria-label="Birthday cake">
        <defs>
          <linearGradient id="cakeBody" x1="0" x2="1"><stop offset="0" stopColor="#fff7f8"/><stop offset="0.55" stopColor="#f7c8d2"/><stop offset="1" stopColor="#e995aa"/></linearGradient>
          <linearGradient id="cakeTop" x1="0" x2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#ffe8ee"/></linearGradient>
          <filter id="cakeShadow"><feDropShadow dx="0" dy="8" stdDeviation="7" floodOpacity=".16"/></filter>
        </defs>
        <ellipse cx="130" cy="151" rx="101" ry="12" fill="#fff" opacity=".9"/>
        <path d="M47 83h166v50c0 11-12 20-27 20H74c-15 0-27-9-27-20Z" fill="url(#cakeBody)" filter="url(#cakeShadow)"/>
        <ellipse cx="130" cy="83" rx="83" ry="25" fill="url(#cakeTop)" stroke="#efb7c4" strokeWidth="2"/>
        <path d="M63 84c10 11 17 12 25 0 9 12 17 12 26 0 9 12 18 12 27 0 9 12 18 12 27 0 9 12 17 12 26 0" fill="none" stroke="#e8899f" strokeWidth="6" strokeLinecap="round"/>
        <rect x="123" y="35" width="14" height="43" rx="5" fill="#fff0d5"/>
        <path d="M130 10c-8 9-7 16 0 22 7-6 8-13 0-22Z" fill="#f2a13d"/>
        <path d="M91 55V30M169 55V30" stroke="#e9a4b2" strokeWidth="8" strokeLinecap="round"/>
        <path d="M91 20c-6 8-5 13 0 18 5-5 6-10 0-18ZM169 20c-6 8-5 13 0 18 5-5 6-10 0-18Z" fill="#f2a13d"/>
        <circle cx="74" cy="107" r="4" fill="#d96582"/><circle cx="187" cy="108" r="4" fill="#d96582"/>
        <text x="130" y="126" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#bd526d">Mahii</text>
      </svg>
    </motion.div>
  );
}

export function OpenGift({ revealImage = null, onOpen, autoOpen = true }) {
  const [opened, setOpened] = React.useState(false);
  useEffect(() => {
    if (!autoOpen) return;
    const t = setTimeout(() => { setOpened(true); onOpen?.(); }, 950);
    return () => clearTimeout(t);
  }, [autoOpen]);
  return (
    <motion.div className={`bs-open-gift ${opened ? "is-open" : ""}`} initial={{ opacity: 0, scale: 0.82, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 120 }}>
      <div className="bs-gift-glow" />
      <motion.div className="bs-gift-sparkles" animate={opened ? { opacity: 0, scale: 1.3 } : { opacity: [0.45, 1, 0.45], y: [0, -5, 0] }} transition={opened ? { duration: .35 } : { duration: 1.8, repeat: Infinity }}>
        <Sparkles/><Heart/><Sparkles/>
      </motion.div>
      <motion.div className="bs-gift-reveal" initial={{ opacity: 0, y: 35, scale: .55 }} animate={opened ? { opacity: 1, y: -28, scale: 1 } : { opacity: 0, y: 35, scale: .55 }} transition={{ delay: opened ? .12 : 0, type: "spring", stiffness: 125, damping: 11 }}>
        {revealImage ? <img src={revealImage} alt="Gift reveal" /> : <span>✨</span>}
      </motion.div>
      <motion.div className="bs-open-base" animate={opened ? { opacity: 0, scale: .86, y: 18 } : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: .42, delay: opened ? .3 : 0 }}>
        <span />
      </motion.div>
      <motion.div className="bs-open-lid" animate={opened ? { opacity: 0, y: -58, rotate: -18, x: 18 } : { opacity: 1, y: 0, rotate: 0, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 12 }}>
        <span className="bs-lid-ribbon" />
      </motion.div>
      <motion.div className="bs-gift-open-glow" initial={{ opacity: 0, scale: .6 }} animate={opened ? { opacity: [0, 1, .72], scale: [0.6, 1.2, 1] } : { opacity: 0 }} transition={{ duration: 1 }} />
    </motion.div>
  );
}

export function LockedGift() {
  return (
    <motion.div className="bs-locked-gift" animate={{ y: [0, -5, 0] }} transition={{ duration: 2.8, repeat: Infinity }}>
      <div className="bs-locked-box"><span className="bs-box-ribbon" /></div>
      <div className="bs-lock">🔒</div>
      <div className="bs-key-sparkle">✦</div>
    </motion.div>
  );
}

export function PhysicsCelebration() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const { Engine, Render, Runner, Bodies, Composite } = Matter;
    const engine = Engine.create();
    engine.gravity.y = 0.55;
    const width = ref.current.clientWidth || window.innerWidth;
    const height = ref.current.clientHeight || window.innerHeight;
    const render = Render.create({
      element: ref.current, engine,
      options: { width, height, wireframes: false, background: "transparent" }
    });
    const floor = Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    const pieces = Array.from({ length: 55 }, (_, i) =>
      Bodies.rectangle(
        Math.random() * width, -20 - Math.random() * height, 6 + Math.random() * 8, 7 + Math.random() * 12,
        { restitution: 0.55, friction: 0.01, angle: Math.random() * 6.28,
          render: { fillStyle: ["#d95776", "#e9b45f", "#b88ac4", "#f08fa8", "#f5cf88"][i % 5] } }
      )
    );
    Composite.add(engine.world, [floor, ...pieces]);
    const runner = Runner.run(engine);
    Render.run(render);
    const timer = setTimeout(() => {
      Runner.stop(runner); Render.stop(render); render.canvas?.remove(); Engine.clear(engine);
    }, 6500);
    return () => {
      clearTimeout(timer); Runner.stop(runner); Render.stop(render); render.canvas?.remove(); Engine.clear(engine);
    };
  }, []);
  return <div className="bs-physics" ref={ref} aria-hidden="true" />;
}
