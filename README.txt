
Portfolio React — Guele Wilfried (Cyber)

Contenu:
- React app prête à l'emploi
- Projets: cards cliquables ouvrant modales avec 3 boutons (demo, github, live)
- Compétences: icônes PNG + animation défilement horizontal (loop)
- Contact: mailto, tel, LinkedIn, GitHub
- Effet visuel "cyber" (fond binaire léger)
- Déploiement: GitHub Pages (gh-pages)

Installation:
1. Extrais le zip.
2. Ouvre un terminal dans le dossier extrait.
3. Lancer:
   npm install
   npm start
4. Pour déployer:
   - Modifier "homepage" dans package.json: https://TON-USERNAME.github.io/mon-portfolio
   - git init ; git add . ; git commit -m "Initial"
   - git branch -M main
   - git remote add origin https://github.com/TON-USERNAME/mon-portfolio.git
   - git push -u origin main
   - npm run deploy

Personnalisation rapide:
- Projets: src/components/Projects.js (change title, short, stack, demo/github/live links)
- Compétences: icônes PNG dans public/icons/*.png (remplacer par tes propres images si tu veux)
- Contact: src/components/Contact.js
