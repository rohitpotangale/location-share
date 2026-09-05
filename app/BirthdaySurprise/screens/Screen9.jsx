"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Sparkles,
  Heart,
} from "lucide-react";

import {
  Screen,
  FlowButton,
  PhysicsCelebration,
  FloatingHearts,
} from "../components";

import "./screen9.css";

export default function Screen9({
  herName = "Birthday Girl",
  photo,
  celebrate,
  celebrated,
  finalSignature,
}) {
  const image = photo || "/assets/Mahii-final.jpg";

  return (
    <Screen step={9}>
      <main className="bs-final-fullscreen">

        {/* Same original photo */}
        <motion.img
          className="bs-final-background-photo"
          src={image}
          alt={herName}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
        />

        {/* Very subtle readability gradient */}
        <div className="bs-final-photo-overlay" />

        {/* Soft light */}
        <div className="bs-final-pink-glow" />

        {/* Floating hearts */}
        <FloatingHearts />

        {/* Top label */}
        <motion.div
          className="bs-final-top-label"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.5,
          }}
        >
          <Sparkles size={11} />
          <span>FOR YOU, MAHII ✨</span>
          <Sparkles size={11} />
        </motion.div>

        {/* Message directly over image */}
        <div className="bs-final-overlay-content">

          <motion.div
            className="bs-final-message-content"
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Heart */}
            <motion.div
              className="bs-final-heart"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={17} fill="currentColor" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="bs-final-title-new"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
            >
              Happy Birthday,
              <br />
              <em>{herName} 🎂</em>
            </motion.h1>

            {/* Divider */}
            <div className="bs-final-divider">
              <span />
              <Heart size={11} fill="currentColor" />
              <span />
            </div>

            {/* New message */}
            <motion.div
              className="bs-final-text-new"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
            >
              <p>
                <strong>Mahii,</strong></p>

              <p>
                I hope this year gives you more moments
                that make you genuinely happy, more
                reasons to laugh, and more days that
                feel exactly the way you want them to.
              </p>

              <p>
                Thank you for all the little conversations,
                random laughs, unexpected memories,
                and moments that became special without
                us even planning them.
              </p>

              <p className="bs-final-highlight">
                Keep being the person who makes ordinary
                moments feel a little more beautiful. ✨
              </p>

              <p className="bs-final-last-line">
                May this be the year you look back on
                and smile the most. 💗
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              className="bs-final-signature-new"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.95,
              }}
            >
              <span>Always cheering for your happiness,</span>

              <strong>
                {finalSignature || "— Jiju 💗"}
              </strong>
            </motion.div>

            {/* Celebration button */}
            <motion.div
              className="bs-final-button-wrap"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.05,
              }}
            >
              <FlowButton
                onClick={celebrate}
                icon={PartyPopper}
              >
                Make a wish & celebrate
              </FlowButton>
            </motion.div>

          </motion.div>

          {/* Bottom note */}
          <motion.div
            className="bs-final-bottom-note"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
          >
            <Sparkles size={9} />
            <span>A little birthday memory, made just for you</span>
            <Sparkles size={9} />
          </motion.div>

        </div>

        {celebrated && <PhysicsCelebration />}

      </main>
    </Screen>
  );
}