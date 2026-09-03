"use client";
import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { Screen, OpenGift, FlowButton, FloatingHearts } from "../components";

export default function Screen3({ next, giftRevealImage }) {
 return <Screen step={3} dark><main className="bs-stage bs-dark-stage"><FloatingHearts dark/>
   <div className="bs-content">
    <div className="bs-eyebrow-pill dark-pill"><Sparkles size={11}/> Surprise #1 <Sparkles size={11}/></div>
    <OpenGift revealImage={giftRevealImage}/>
    <div className="bs-gift-reveal-caption">A little something made just for you ✨</div>
    <div className="bs-screen-copy" >
      <h2 className="bs-heading dark-heading">A gift for you.<br/><em>And we're just getting started.</em></h2>
      <p className="bs-subtitle dark-subtitle">One little surprise opened. A few more are hiding behind the next steps. 🎁</p>
    </div>
    <FlowButton onClick={next} icon={Heart}>Open the next surprise</FlowButton>
   </div>
 </main></Screen>;
}
