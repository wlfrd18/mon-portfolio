import React from 'react';
export default function Footer(){
  return (
    <footer className="footer" style={{position:'relative',zIndex:10}}>
      <div className="container">
        <div>© {new Date().getFullYear()} Guele Wilfried — Concepteur Développeur d'Applications (Spécialisation Cybersécurité)</div>
      </div>
    </footer>
  );
}
