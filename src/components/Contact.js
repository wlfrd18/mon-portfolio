import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact(){
  return (
    <section id="contact" className="section container" style={{position:'relative',zIndex:10}}>
      <h3>Contact</h3>
      <div className="grid">
        <div className="card">
          <h4>Écris-moi</h4>
          <p style={{color:'var(--muted)'}}>Clique sur l'email pour ouvrir ton client de messagerie.</p>
          <p><a href="mailto:Wilfriedpanol@gmail.com" style={{color:'var(--accent)',fontWeight:700}}><FiMail/> Wilfriedpanol@gmail.com</a></p>
          <p><a href="tel:+33775865112" style={{color:'var(--text)'}}><FiPhone/> +33 7 75 86 51 12</a></p>
        </div>
        <div className="card">
          <h4>Réseaux</h4>
          <p style={{color:'var(--muted)'}}>Retrouve-moi sur LinkedIn et GitHub.</p>
          <p className="icon-row">
            <a href="http://linkedin.com/in/wilfried-guele-5a456a190" target="_blank" rel="noreferrer" style={{color:'var(--text)'}}>LinkedIn</a>
          </p>
          <p className="icon-row">
            <a href="http://github.com/wlfrd18" target="_blank" rel="noreferrer" style={{color:'var(--text)'}}>GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}
