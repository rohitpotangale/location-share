"use client";

import React, { useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Screen } from "../components";
import "./screen1.css";

export default function Screen1({ herName = "Mahii" }) {
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

        {/* Soft background glows */}
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
          transition={{
            duration: 2.6,
            repeat: Infinity,
          }}
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
              <img
                src="/assets/mahi-screen1.jpeg"
                alt={`${herName} birthday portrait`}
              />
            </motion.div>

            {/* Hearts around photo */}
            <motion.span
              className="photo-heart photo-heart-1"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              ♥
            </motion.span>

            <motion.span
              className="photo-heart photo-heart-2"
              animate={{
                y: [0, 7, 0],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              ♥
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.div
            className="screen1-name-section"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
          >
            <div className="screen1-name-decoration">
              <Sparkles size={17} />
              <span>♡</span>
              <Sparkles size={17} />
            </div>

            <div className="screen1-name-row">
              <h1>{herName}</h1>
              <span className="name-heart">❤️</span>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="screen1-divider"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              delay: 0.65,
              duration: 0.5,
            }}
          >
            <span />
            <Heart size={14} fill="currentColor" />
            <span />
          </motion.div>

          {/* Birthday message */}
          <motion.div
            className="screen1-birthday-message"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
          >
            <h2>
              Happy Birthday, {herName}! 🎂💗
            </h2>

            <p>
              May your day be filled with happiness,
              <br />
              smiles, and beautiful moments. ✨
            </p>

            <p>
              Keep smiling and stay amazing always! 🌸
            </p>

            <div className="screen1-signature">
              — Jiju 💗
            </div>
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
      <i />
      <b />
    </span>
  );
}