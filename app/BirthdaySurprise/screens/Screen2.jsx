"use client";

import React from "react";
import { Cake as CakeIcon, Sparkles, Gift, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Screen, Cake, FlowButton, FloatingHearts } from "../components";
import "./screen2.css"

export default function Screen2({ next, time }) {
  const tiles = [
    ["d", "DAYS"],
    ["h", "HOURS"],
    ["m", "MINUTES"],
    ["s", "SECONDS"],
  ];

  return (
    <Screen step={2}>
      <main className="bs-stage bs-screen2-stage">
        <FloatingHearts />

        {/* Soft background glow */}
        <div className="bs-screen2-glow bs-screen2-glow-a" />
        <div className="bs-screen2-glow bs-screen2-glow-b" />

        {/* Decorative sparkles */}
        <motion.span
          className="bs-screen2-star bs-screen2-star-1"
          animate={{ scale: [1, 1.25, 1], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ✦
        </motion.span>

        <motion.span
          className="bs-screen2-star bs-screen2-star-2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        >
          ✦
        </motion.span>

        <motion.span
          className="bs-screen2-heart"
          animate={{ y: [0, -7, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        >
          ♥
        </motion.span>

        <div className="bs-content bs-screen2-content">

          {/* Eyebrow */}
          <motion.div
            className="bs-eyebrow-pill bs-screen2-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={11} />
            <span>Your special day</span>
            <Sparkles size={11} />
          </motion.div>

          {/* Heading */}
          <motion.div
            className="bs-screen2-heading-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <h2 className="bs-screen2-title">
              It's almost
              <br />
              <em>here!</em> <span>💗</span>
            </h2>

            <p className="bs-screen2-subtitle">
              The countdown to your day
              <br />
              has officially begun.
            </p>
          </motion.div>

          {/* Cake */}
          <motion.div
            className="bs-screen2-cake"
            initial={{ opacity: 0, scale: 0.82, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.18,
              type: "spring",
              stiffness: 130,
              damping: 13,
            }}
          >
            <div className="bs-screen2-cake-glow" />
            <Cake />
          </motion.div>

          {/* Date */}
          <motion.div
            className="bs-screen2-date"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CakeIcon size={14} />
            <span>09 SEPTEMBER 2026</span>
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="bs-screen2-countdown"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            {tiles.map(([key, label], index) => (
              <React.Fragment key={key}>
                <motion.div
                  className="bs-screen2-count-item"
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.15,
                  }}
                >
                  <Heart
                    className="bs-count-heart"
                    size={10}
                    fill="currentColor"
                  />

                  <strong>
                    {String(time?.[key] ?? 0).padStart(2, "0")}
                  </strong>

                  <span>{label}</span>
                </motion.div>

                {index < tiles.length - 1 && (
                  <div className="bs-count-divider" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.div
            className="bs-screen2-bottom-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
          >
            <span>✦</span>
            <p>Your special day is getting closer...</p>
            <span>✦</span>
          </motion.div>

          {/* Button */}
          <motion.div
            className="bs-screen2-button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FlowButton onClick={next} icon={Gift}>
              Keep the surprises coming
            </FlowButton>
          </motion.div>

        </div>
      </main>
    </Screen>
  );
}