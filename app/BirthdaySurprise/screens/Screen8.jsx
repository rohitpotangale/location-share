"use client";
import React, { useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Screen, OpenGift, FlowButton, FloatingHearts } from "../components";

export default function Screen8({ next, secretRevealImage }) {
  useEffect(() => {
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [next]);
  return <Screen step={8} dark><main className="bs-stage bs-dark-stage"><FloatingHearts dark/>
    <div className="bs-content">
      <div className="bs-eyebrow-pill dark-pill"><Sparkles size={11}/> Unlocked! 🎉 <Sparkles size={11}/></div>
      <OpenGift revealImage={secretRevealImage}/>
      <h2 className="bs-heading dark-heading">You did it!<br/><em>The secret is yours. 💗</em></h2>
      <p className="bs-subtitle dark-subtitle">Your final surprise is ready…</p>
      <FlowButton onClick={next} icon={Heart}>Open my final message</FlowButton>
      <div className="bs-auto-note">Opening your final message… ✨</div>
    </div>
  </main></Screen>;
}
