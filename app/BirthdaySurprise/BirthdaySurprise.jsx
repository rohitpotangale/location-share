"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
import Screen8 from "./screens/Screen8";
import Screen9 from "./screens/Screen9";
import "./styles.css";

export default function BirthdaySurprise({
  birthday = "2026-09-09T00:00:00",
  herName = "Birthday Girl",
  photo,
  memoryPhoto,
  giftRevealImage,
  secretRevealImage,
  secretPassword = "jiju",
  finalSignature = "— Jiju 💗",
}) {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("Take your time… you’ll get it. 💗");
  const [celebrated, setCelebrated] = useState(false);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const target = new Date(birthday);
      let diff = target - Date.now();
      if (diff < 0) {
        target.setFullYear(target.getFullYear() + 1);
        diff = target - Date.now();
      }
      diff = Math.max(0, diff);
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [birthday]);

  const next = () => setStep((s) => Math.min(9, s + 1));
  const unlock = () => {
    if (password.trim().toLowerCase() === secretPassword.trim().toLowerCase()) {
      setMsg("🔓 Unlocked!");
      setTimeout(() => setStep(8), 420);
    } else setMsg("💭 Almost… read the clue one more time.");
  };
  const celebrate = () => {
    if (celebrated) return;
    setCelebrated(true);
    confetti({
      particleCount: 220,
      spread: 120,
      startVelocity: 48,
      origin: { x: 0.5, y: 0.72 },
      scalar: 1.05,
      ticks: 220,
    });
    setTimeout(
      () =>
        confetti({
          particleCount: 120,
          spread: 80,
          startVelocity: 40,
          origin: { x: 0.15, y: 0.58 },
          scalar: 1.05,
        }),
      350
    );
    setTimeout(
      () =>
        confetti({
          particleCount: 120,
          spread: 80,
          startVelocity: 40,
          origin: { x: 0.85, y: 0.58 },
          scalar: 1.05,
        }),
      700
    );
  };

  const common = {
    next,
    herName,
    photo,
    memoryPhoto,
    giftRevealImage,
    secretRevealImage,
    time,
    password,
    setPassword,
    msg,
    unlock,
    celebrate,
    celebrated,
    finalSignature,
  };
  const screens = [
    <Screen1 key="1" {...common} />,
    <Screen2 key="2" {...common} />,
    <Screen3 key="3" {...common} />,
    <Screen4 key="4" {...common} />,
    <Screen5 key="5" {...common} />,
    <Screen6 key="6" {...common} />,
    <Screen7 key="7" {...common} />,
    <Screen8 key="8" {...common} />,
    <Screen9 key="9" {...common} />,
  ];
  return (
    <main className="birthday-surprise" aria-label="Birthday surprise">
      <AnimatePresence mode="wait">{screens[step - 1]}</AnimatePresence>
    </main>
  );
}
