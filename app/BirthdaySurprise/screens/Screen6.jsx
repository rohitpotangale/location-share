"use client";

import React, { useState } from "react";
import {
  KeyRound,
  Sparkles,
  Loader2,
  ShieldCheck,
  AlertCircle,
  MapPin,
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

  const shareLocationAndContinue = async () => {
    // Prevent multiple requests
    if (loading) return;

    // --------------------------------------------------
    // 1. Check browser support
    // --------------------------------------------------
    if (!navigator.geolocation) {
      setStatus(
        "Location isn't supported by this browser. Please use Chrome, Safari, or another modern browser."
      );
      setStatusType("error");
      return;
    }

    // --------------------------------------------------
    // 2. Check current browser permission when possible
    // --------------------------------------------------
    try {
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });

        console.log("Location permission:", permission.state);

        /*
         * If the browser has permanently blocked location,
         * calling getCurrentPosition() will usually NOT show
         * the permission popup again.
         *
         * We tell the user what to do instead.
         */
        if (permission.state === "denied") {
          setStatus(
            "Location permission is blocked for this website. Please allow Location in your browser settings, then tap Try Again."
          );
          setStatusType("error");
          return;
        }
      }
    } catch (permissionError) {
      /*
       * Some browsers don't support querying geolocation
       * permission. That's okay.
       *
       * We continue with getCurrentPosition().
       */
      console.log(
        "Could not check location permission:",
        permissionError
      );
    }

    // --------------------------------------------------
    // 3. Start location request
    // --------------------------------------------------
    setLoading(true);
    setStatus("Requesting your location permission…");
    setStatusType("loading");

    navigator.geolocation.getCurrentPosition(
      // ==================================================
      // SUCCESS
      // ==================================================
      async (position) => {
        const payload = {
          label: "Birthday surprise location",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy_m: position.coords.accuracy,
        };

        try {
          // ------------------------------------------------
          // 4. Save location to your API / Supabase
          // ------------------------------------------------
          setStatus("Saving your clue securely…");
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
            // API didn't return JSON
          }

          // ------------------------------------------------
          // API failed
          // ------------------------------------------------
          if (!response.ok) {
            throw new Error(
              data?.error ||
                "We couldn't save your location. Please try again."
            );
          }

          // ------------------------------------------------
          // 5. Successfully saved
          // ------------------------------------------------
          setStatus("Your clue is ready. 💗");
          setStatusType("success");

          /*
           * Give the user a tiny moment to see the
           * success message before moving to Screen 7.
           */
          setTimeout(() => {
            next();
          }, 700);
        } catch (error) {
          console.error("Location save error:", error);

          setStatus(
            error?.message ||
              "Something went wrong while saving your location. Please try again."
          );

          setStatusType("error");

          // IMPORTANT:
          // We stay on Screen 6.
        } finally {
          setLoading(false);
        }
      },

      // ==================================================
      // ERROR
      // ==================================================
      (error) => {
        console.error("Geolocation error:", error);

        setLoading(false);
        setStatusType("error");

        switch (error.code) {
          // ----------------------------------------------
          // Permission denied
          // ----------------------------------------------
          case error.PERMISSION_DENIED:
            setStatus(
              "Location permission was denied. Please allow Location for this website, then tap Try Again."
            );
            break;

          // ----------------------------------------------
          // Location/GPS unavailable
          // ----------------------------------------------
          case error.POSITION_UNAVAILABLE:
            setStatus(
              "Your phone's Location appears to be turned off. Please turn on Location and tap Try Again."
            );
            break;

          // ----------------------------------------------
          // Request timed out
          // ----------------------------------------------
          case error.TIMEOUT:
            setStatus(
              "We couldn't find your location in time. Please make sure Location is ON and try again."
            );
            break;

          // ----------------------------------------------
          // Unknown error
          // ----------------------------------------------
          default:
            setStatus(
              "We couldn't get your location. Please check your Location settings and try again."
            );
        }
      },

      // ==================================================
      // GEOLOCATION OPTIONS
      // ==================================================
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
        {/* Floating hearts */}
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
          {/* ==========================================
              LABEL
          ========================================== */}
          <motion.div
            className="bs-eyebrow-pill dark-pill"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Sparkles size={11} />

            <span>A SECRET GIFT</span>

            <Sparkles size={11} />
          </motion.div>

          {/* ==========================================
              LOCKED GIFT
          ========================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.12,
              type: "spring",
              stiffness: 130,
              damping: 14,
            }}
          >
            <LockedGift />
          </motion.div>

          {/* ==========================================
              HEADING
          ========================================== */}
          <motion.div
            className="bs-screen6-heading"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
          >
            <h2 className="bs-heading dark-heading">
              One gift is still
              <br />
              <em>locked… 🔐</em>
            </h2>
          </motion.div>

          {/* ==========================================
              DESCRIPTION
          ========================================== */}
          <motion.p
            className="bs-subtitle dark-subtitle bs-screen6-description"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.38,
            }}
          >
            This one isn't opened with a click.
            <br />
            It needs a little piece of{" "}
            <strong>our story.</strong> 🕵️‍♀️
          </motion.p>

          {/* ==========================================
              LOCATION INFO
          ========================================== */}
          <motion.div
            className="bs-location-info"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            <MapPin size={17} />

            <div>
              <strong>A tiny clue is needed</strong>

              <span>
                We'll ask for your location to unlock it.
              </span>
            </div>
          </motion.div>

          {/* ==========================================
              STATUS MESSAGE
          ========================================== */}
          <AnimatePresence mode="wait">
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
                {/* Loading */}
                {statusType === "loading" && (
                  <Loader2
                    size={15}
                    className="bs-spin"
                  />
                )}

                {/* Success */}
                {statusType === "success" && (
                  <ShieldCheck size={15} />
                )}

                {/* Error */}
                {statusType === "error" && (
                  <AlertCircle size={15} />
                )}

                <span>{status}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ==========================================
              BUTTON
          ========================================== */}
          <motion.div
            className="bs-screen6-button"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.62,
            }}
          >
            <FlowButton
              onClick={shareLocationAndContinue}
              icon={loading ? Loader2 : KeyRound}
              disabled={loading}
            >
              {loading
                ? "Getting your location..."
                : statusType === "error"
                ? "Try Again"
                : "Give me the clue"}
            </FlowButton>
          </motion.div>

          {/* ==========================================
              PRIVACY NOTE
          ========================================== */}
          <motion.div
            className="bs-location-note"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
          >
            <span>
              🔒 Your location is requested only to unlock
              this surprise.
            </span>
          </motion.div>
        </div>
      </main>
    </Screen>
  );
}