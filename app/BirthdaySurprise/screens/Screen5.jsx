"use client";
import React from "react";
import { Camera, Heart, Sparkles, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Screen, FlowButton, FloatingHearts } from "../components";

const fallback="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85";

export default function Screen5({ next, memoryPhoto }) {
 return <Screen step={5}><main className="bs-stage"><FloatingHearts/>
  <div className="bs-content">
   <div className="bs-eyebrow-pill"><Camera size={11}/> Our little memory <Sparkles size={11}/></div>
   <h2 className="bs-heading">A moment<br/><em>worth keeping. 📸</em></h2>
   <motion.div className="bs-photo-frame" initial={{opacity:0,scale:.88,rotate:-4}} animate={{opacity:1,scale:1,rotate:-1.2}} transition={{type:"spring",stiffness:110}}>
     <div className="bs-photo-tape"/>
     <img src={memoryPhoto || fallback} alt="A special memory"/>
     <div className="bs-photo-footer"><span>OUR MEMORY</span><Heart size={12} fill="currentColor"/></div>
   </motion.div>
   <p className="bs-memory-copy">Because the best memories aren't always big moments — sometimes they're simply <strong>the moments that made us smile.</strong> 💗</p>
   <FlowButton onClick={next} icon={Gift}>There's more…</FlowButton>
  </div>
 </main></Screen>;
}
