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
  photo,
  celebrate,
  celebrated,
  finalSignature,
}) {
  const image =
    photo || "/assets/Mahii-final.jpg";

  return (
    <Screen step={9}>

      <main className="bs-final-fullscreen">

        {/* =================================================
            FULL SCREEN ORIGINAL PHOTO
            ================================================= */}
        <motion.img
          className="bs-final-background-photo"
          src={image}
          alt="Mahii"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* =================================================
            PHOTO OVERLAY
            ================================================= */}
        <div className="bs-final-photo-overlay" />

        {/* Soft pink glow */}
        <div className="bs-final-pink-glow" />

        {/* Floating hearts */}
        <FloatingHearts />

        {/* =================================================
            MAIN CONTENT
            ================================================= */}
        <div className="bs-final-overlay-content">

          {/* Top label */}
          <motion.div
            className="bs-final-top-label"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.5,
            }}
          >
            <Sparkles size={11} />
            <span>EVERYTHING UNLOCKED</span>
            <Sparkles size={11} />
          </motion.div>


          {/* Message card */}
          <motion.div
            className="bs-final-message-card"
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Small heart */}
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
              <Heart
                size={17}
                fill="currentColor"
              />
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
              Happy
              <br />
              <em>Birthday, Mahii! 🎂</em>
            </motion.h1>


            {/* Divider */}
            <div className="bs-final-divider">
              <span />
              <Heart
                size={12}
                fill="currentColor"
              />
              <span />
            </div>


            {/* Message */}
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
                <strong>Mahii,</strong>
              </p>

              <p>
                Some people quietly become part of
                the memories we never want to forget.
                I'm really grateful you're one of
                those people in my life.
              </p>

              <p>
                For the random conversations,
                stupid laughs, little moments and
                memories that somehow became special
                — thank you. 💗
              </p>

              <p>
                I hope this year brings you{" "}
                <strong>
                  happiness that stays,
                  dreams that come true,
                  and countless reasons to smile.
                </strong>
              </p>

              <p className="bs-final-last-line">
                You deserve all the beautiful things
                coming your way. ✨
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
                delay: 0.9,
              }}
            >
              <span>
                With lots of love & memories,
              </span>

              <strong>
                {finalSignature || "— Jiju 💗"}
              </strong>
            </motion.div>


            {/* Celebrate */}
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
                Make a wish & Celebrate
              </FlowButton>
            </motion.div>

          </motion.div>


          {/* Bottom tiny message */}
          <motion.div
            className="bs-final-bottom-note"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.25,
            }}
          >
            <Sparkles size={9} />
            <span>Made with love, just for you</span>
            <Sparkles size={9} />
          </motion.div>

        </div>


        {/* Celebration */}
        {celebrated && <PhysicsCelebration />}

      </main>
    </Screen>
  );
}