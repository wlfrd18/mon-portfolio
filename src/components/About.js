import React from 'react';
export default function About(){
  return (
    <section className="section container" style={{position:'relative',zIndex:10}}>
      <h3>À propos</h3>
      <div className="card about">
        <p>Je suis Guele Wilfried, étudiant en programmation informatique, actuellement en spécialisation cybersécurité. Après avoir validé mon année de fondamentaux en développement web, j’ai travaillé sur divers projets utilisant Python, PostgreSQL, React, Django, HTML/CSS et le langage C. Passionné par la sécurité réseau, le développement logiciel et la gestion de bases de données, je cherche toujours à apprendre et à explorer de nouvelles technologies.</p>
        <p>🎯 Objectif actuel : trouver un stage ou une alternance pour contribuer à des projets innovants, approfondir mes compétences en cybersécurité et continuer à progresser dans un environnement collaboratif.</p>
        <p>Récemment, j’ai eu la chance de participer à Hacking Paris 2025, un hackathon organisé par Chiliz au Stade de France. Même si je n’ai pas remporté de prix, cette expérience m’a permis de :</p>
        <ul style={{color:'var(--muted)',marginTop:8}}>
          <li>🚀 Repousser mes limites sur un défi technique exigeant</li>
          <li>🔗 Découvrir la blockchain et le Web3 (Metamask, NFT, Solidity…)</li>
          <li>🤝 Collaborer avec des profils variés</li>
          <li>📚 Apprendre en équipe</li>
        </ul>
      </div>
    </section>
  );
}
