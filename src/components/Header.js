import React from 'react';
export default function Header(){
  return (
    <header className="container header" style={{position:'relative',zIndex:20}}>
      <div className="logo">GUELE WILFRIED</div>
      <nav className="nav">
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
