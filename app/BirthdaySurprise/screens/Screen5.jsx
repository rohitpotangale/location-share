"use client";

import React from "react";
import { Camera, Heart, Sparkles, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Screen, FlowButton, FloatingHearts } from "../components";

const fallback =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85";

export default function Screen5({ next, memoryPhoto }) {
  return (
    <Screen step={5}>
      <main className="bs-stage bs-screen5">
        <FloatingHearts />

        <div className="bs-content bs-screen5-content">
          {/* Label */}
          <motion.div
            className="bs-eyebrow-pill bs-screen5-eyebrow"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Camera size={11} />
            <span>CHAPTER 02 • MEMORY</span>
            <Sparkles size={11} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="bs-heading bs-screen5-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            One frame.
            <br />
            <em>A whole little feeling. 📸</em>
          </motion.h2>

          {/* Photo */}
          <motion.div
            className="bs-photo-frame bs-screen5-photo"
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
            }}
          >
            <div className="bs-photo-tape" />

            <img
              src={memoryPhoto || fallback}
              alt="A special memory"
            />

            <div className="bs-photo-footer">
              <span>OUR MEMORY</span>
              <Heart size={12} fill="currentColor" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.p
            className="bs-memory-copy bs-screen5-copy"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            The best memories rarely announce themselves.
            Sometimes they’re simply{" "}
            <strong>the tiny moments that stayed with us.</strong> 💗
          </motion.p>

          {/* Next button */}
          <motion.div
            className="bs-screen5-button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <FlowButton onClick={next} icon={Gift}>
              There’s another layer
            </FlowButton>
          </motion.div>
        </div>
      </main>
    </Screen>
  );
}