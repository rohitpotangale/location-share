"use client";

import React from "react";
import { Cake as CakeIcon, Sparkles, Gift } from "lucide-react";
import { motion } from "framer-motion";

import {
  Screen,
  FlowButton,
  FloatingHearts,
} from "../components";

import "./screen2.css";

export default function Screen2({ next, time }) {
  const tiles = [
    ["d", "Days"],
    ["h", "Hours"],
    ["m", "Minutes"],
    ["s", "Seconds"],
  ];

  return (
    <Screen step={2}>
      <main className="bs-stage bs-screen2-follow">
        <FloatingHearts />

        {/* Background image */}
        <div className="bs-screen2-image-wrap">
          <img
            src="/assets/follow.jpeg"
            alt="A special memory"
            className="bs-screen2-follow-image"
          />
        </div>

        {/* Soft overlay */}
        <div className="bs-screen2-follow-overlay" />

        <div className="bs-content bs-screen2-follow-content">

          {/* Small label */}
          <motion.div
            className="bs-eyebrow-pill bs-screen2-follow-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={11} />
            <span>THE COUNTDOWN IS ON</span>
            <Sparkles size={11} />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="bs-heading bs-screen2-follow-heading">
              The moment is getting closer
              <br />
              <em>and this is only chapter two. ✨</em>
            </h2>
          </motion.div>

          {/* Date */}
          <motion.div
            className="bs-screen2-follow-date"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CakeIcon size={13} />
            09 SEPTEMBER 2026
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="bs-screen2-follow-countdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {tiles.map(([key, label]) => (
              <div key={key}>
                <strong>
                  {String(time?.[key] ?? 0).padStart(2, "0")}
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            className="bs-screen2-follow-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <FlowButton onClick={next} icon={Gift}>
              Continue the story
            </FlowButton>
          </motion.div>

        </div>
      </main>
    </Screen>
  );
}