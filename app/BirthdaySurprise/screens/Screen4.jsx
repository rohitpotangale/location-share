"use client";

import React from "react";
import { Camera, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Screen, FlowButton } from "../components";
import "./screen4.css"
export default function Screen4({ next, storyPhoto }) {
  return (
    <Screen step={4}>
      <main className="bs-screen4-clean">

        {/* Soft background */}
        <div className="bs-screen4-clean-glow glow-one" />
        <div className="bs-screen4-clean-glow glow-two" />

        {/* Floating decorations */}
        <motion.div
          className="bs-screen4-clean-heart heart-one"
          animate={{
            y: [0, -8, 0],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>

        <motion.div
          className="bs-screen4-clean-heart heart-two"
          animate={{
            y: [0, 7, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        >
          ♥
        </motion.div>

        <div className="bs-screen4-clean-content">

          {/* Small label */}
          <motion.div
            className="bs-screen4-clean-label"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Heart size={11} fill="currentColor" />
            <span>A NOTE, JUST FOR YOU</span>
            <Heart size={11} fill="currentColor" />
          </motion.div>

          {/* Heading */}
          <motion.div
            className="bs-screen4-clean-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2>
              Some people stay
              <br />
              <em>in your story. 💗</em>
            </h2>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="bs-screen4-clean-photo"
            initial={{
              opacity: 0,
              scale: 0.88,
              rotate: -2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -1,
            }}
            transition={{
              delay: 0.22,
              type: "spring",
              stiffness: 110,
              damping: 14,
            }}
          >
            <div className="bs-screen4-photo-glow" />

            <div className="bs-screen4-photo-frame">

              {/* Replace this image whenever you want */}
              <img
                src={
                  storyPhoto ||
                  "/assets/mahi-screen4.png"
                }
                alt="Mahii"
              />

              <div className="bs-screen4-photo-heart">
                <Heart size={15} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="bs-screen4-clean-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
          >
            <p>
              Some connections start quietly
              <br />
              and become part of the moments we remember.
            </p>

            <div className="bs-screen4-message-divider">
              <span />
              <Sparkles size={10} />
              <span />
            </div>

            <p>
              I’m genuinely happy ours became one of
              <br />
              those unexpectedly special stories. <strong>💗</strong>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="bs-screen4-clean-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
          >
            <FlowButton
              onClick={next}
              icon={Camera}
            >
              Open a memory
            </FlowButton>
          </motion.div>

          {/* Bottom hint */}
          <motion.div
            className="bs-screen4-clean-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span>♡</span>
            <span>Next: one moment worth keeping</span>
            <span>♡</span>
          </motion.div>

        </div>
      </main>
    </Screen>
  );
}