import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="hero" style={{position:'relative',overflow:'hidden'}}>
      <div className="halo" aria-hidden="true" />
      <div className="container" style={{position:'relative',zIndex:10}}>
        <div className="left">
          <motion.h1 initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>Bonjour, je suis <span style={{color:'var(--accent)'}}>Guele Wilfried</span></motion.h1>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>Concepteur Développeur d'Applications — Spécialisation Cybersécurité</motion.h2>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} style={{color:'var(--muted)',marginTop:12}}>Je conçois des applications fullstack sécurisées et je recherche un stage/alternance pour approfondir mes compétences en cybersécurité.</motion.p>
          <a className="cta" href="#projects" style={{display:'inline-block'}}>Voir mes projets</a>
          <div style={{marginTop:18}}>
            <span className="badge">React</span><span className="badge">Cybersecurity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
