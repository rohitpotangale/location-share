"use client";
import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { Screen, OpenGift, FlowButton, FloatingHearts } from "../components";

export default function Screen3({ next, giftRevealImage }) {
 return <Screen step={3} dark><main className="bs-stage bs-dark-stage"><FloatingHearts dark/>
   <div className="bs-content">
    <div className="bs-eyebrow-pill dark-pill"><Sparkles size={11}/> CHAPTER 01 • UNWRAP <Sparkles size={11}/></div>
    <OpenGift revealImage={giftRevealImage}/>
    <div className="bs-gift-reveal-caption">A little something made just for you ✨</div>
    <div className="bs-screen-copy" >
      <h2 className="bs-heading dark-heading">One little reveal.<br/><em>And there’s more behind it.</em></h2>
      <p className="bs-subtitle dark-subtitle">That was just the opening scene. The next moments are a little more personal. 🎁</p>
    </div>
    <FlowButton onClick={next} icon={Heart}>Keep going</FlowButton>
   </div>
 </main></Screen>;
}
