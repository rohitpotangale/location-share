"use client";

import React, { useEffect } from "react";
import { Gift, Sparkles, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Screen } from "../components";
import "./screen1.css"

export default function Screen1({ next, herName = "Mahii" }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 55,
        spread: 70,
        startVelocity: 22,
        origin: { x: 0.5, y: 0.45 },
        colors: ["#ff6f91", "#ff9eb5", "#ffd1dc", "#ffffff"],
        scalar: 0.65,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen step={1}>
      <main className="screen1">

        {/* Background glows */}
        <div className="screen1-glow screen1-glow-left" />
        <div className="screen1-glow screen1-glow-right" />
        <div className="screen1-glow screen1-glow-center" />

        {/* Floating hearts */}
        <div className="screen1-floating">
          <span className="float-heart fh1">♥</span>
          <span className="float-heart fh2">♥</span>
          <span className="float-heart fh3">♥</span>
          <span className="float-heart fh4">♥</span>
          <span className="float-heart fh5">♥</span>
          <span className="float-heart fh6">♥</span>
        </div>

        {/* Sparkles */}
        <motion.span
          className="screen1-sparkle sp1"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.35, 1, 0.35],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 2.6, repeat: Infinity }}
        >
          ✦
        </motion.span>

        <motion.span
          className="screen1-sparkle sp2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0.7,
          }}
        >
          ✦
        </motion.span>

        <motion.span
          className="screen1-sparkle sp3"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.2,
          }}
        >
          ✦
        </motion.span>

        {/* Main content */}
        <div className="screen1-content">

          {/* Top badge */}
          <motion.div
            className="screen1-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart size={12} fill="currentColor" />
            <span>A PRIVATE BIRTHDAY EDIT</span>
            <Heart size={12} fill="currentColor" />
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="screen1-photo-wrap"
            initial={{
              opacity: 0,
              scale: 0.78,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.75,
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
          >
            <div className="screen1-photo-halo" />

            <motion.div
              className="screen1-photo-ring"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,255,255,.65)",
                  "0 0 42px rgba(255,120,155,.75)",
                  "0 0 20px rgba(255,255,255,.65)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* REPLACE THIS IMAGE LATER */}
              <img
                src="/assets/mahi-screen1.jpeg"
                alt={`${herName} birthday portrait`}
              />
            </motion.div>

            {/* Small hearts around portrait */}
            <motion.span
              className="photo-heart photo-heart-1"
              animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              ♥
            </motion.span>

            <motion.span
              className="photo-heart photo-heart-2"
              animate={{ y: [0, 7, 0], scale: [1, 1.12, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              ♥
            </motion.span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            className="screen1-greeting"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
          >
            <div className="screen1-hey">
              Hey,
            </div>

            <div className="screen1-name-row">
              <Sparkles className="name-sparkle left" size={19} />

              <h1>{herName}</h1>

              <span className="name-heart">❤️</span>

              <Sparkles className="name-sparkle right" size={17} />
            </div>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            className="screen1-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span />
            <Heart size={17} fill="currentColor" />
            <span />
          </motion.div>

          {/* Message */}
          <motion.div
            className="screen1-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p>
              A normal birthday text felt
              <br />
              a little too <strong>ordinary.</strong>
              <br />
              So I made this instead. ✨
            </p>

            <div className="message-dot-line">
              <span />
              <Heart size={10} fill="currentColor" />
              <span />
            </div>

            <p>
              Think of this as a <strong>mini experience</strong> —
              <br />
              nine little moments, made <strong>for you.</strong> 💫
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            className="screen1-button"
            onClick={next}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            whileHover={{
              scale: 1.025,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <span className="button-gift">
              <Gift size={23} />
            </span>

            <span>Enter the experience</span>

            <ArrowRight size={23} />
          </motion.button>

          {/* Bottom note */}
          <motion.div
            className="screen1-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Heart size={10} fill="currentColor" />
            <span>P.S. The details are part of the surprise</span>
            <Heart size={10} fill="currentColor" />
          </motion.div>

        </div>

        {/* Bottom flowers */}
        <div className="screen1-flowers screen1-flowers-left">
          <Flower type="large" />
          <Flower type="medium" />
          <Flower type="small" />
        </div>

        <div className="screen1-flowers screen1-flowers-right">
          <Flower type="large" />
          <Flower type="medium" />
          <Flower type="small" />
        </div>

      </main>
    </Screen>
  );
}


/* CSS flower component */
function Flower({ type = "medium" }) {
  return (
    <span className={`css-flower css-flower-${type}`}>
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}