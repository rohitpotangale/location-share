"use client";
import React from "react";
import { KeyRound, Sparkles, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Screen, FlowButton, FloatingHearts } from "../components";

export default function Screen7({ password, setPassword, msg, unlock }) {
 return <Screen step={7}><main className="bs-stage"><FloatingHearts/>
  <div className="bs-content">
   <div className="bs-eyebrow-pill"><Lightbulb size={11}/> One last little game <Sparkles size={11}/></div>
   <h2 className="bs-heading">Do you know<br/><em>what to call me? 😏</em></h2>
   <motion.div className="bs-clue-card" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}}>
    <div className="bs-clue-number">THE CLUE</div>
    <p><strong>Four letters.</strong><br/>Starts with <b>J</b>.<br/>And somehow makes me sound older than I feel. 😂</p>
    <div className="bs-clue-hint">Hint: What do you call me?</div>
    <input autoFocus={true} value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&unlock()} placeholder="Type your answer…" autoCapitalize="none" autoComplete="off" />
    <FlowButton onClick={unlock} icon={KeyRound}>Unlock my secret gift</FlowButton>
    <motion.div className={`bs-unlock-msg ${msg.includes("Unlocked") ? "good":""}`} key={msg} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}}>{msg}</motion.div>
   </motion.div>
  </div>
 </main></Screen>;
}
