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
      <div className="bs-eyebrow-pill dark-pill"><Sparkles size={11}/> ACCESS GRANTED • 🎉 <Sparkles size={11}/></div>
      <OpenGift revealImage={secretRevealImage}/>
      <h2 className="bs-heading dark-heading">You made it.<br/><em>The final reveal is yours. 💗</em></h2>
      <p className="bs-subtitle dark-subtitle">One last screen is waiting for you.</p>
      <FlowButton onClick={next} icon={Heart}>Open the final chapter</FlowButton>
      <div className="bs-auto-note">Taking you to the final chapter… ✨</div>
    </div>
  </main></Screen>;
}
