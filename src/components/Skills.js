import React from 'react';

const categories = [
  {title:'Programming & Scripting', items:['python','shell','c','cpp','sql','bash','javascript','nosql']},
  {title:'Web Development', items:['react','tailwind','html','css','js','postgresql','sqlite','mongodb']},
  {title:'Sécurité', items:['owasp','pentest','audit']},
  {title:'Outils', items:['vscode','git','docker','linux','metasploit','figma']}
];

export default function Skills(){
  return (
    <section id="skills" className="section container" style={{position:'relative',zIndex:10}}>
      <h3>Compétences</h3>
      {categories.map((c,idx)=>(
        <div key={idx} style={{marginTop:18}}>
          <h4 style={{marginBottom:6}}>{c.title}</h4>
          <div className="marquee" aria-hidden="false">
            <div className="marquee-track" style={{minWidth:'200%'}}>
              {c.items.concat(c.items).map((it,i)=>(
                <img key={i} src={`/icons/${it}.png`} alt={it} title={it} style={{marginRight:12}}/>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
