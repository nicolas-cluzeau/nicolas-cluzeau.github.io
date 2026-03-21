export const Footer = (projectData, skillData) => {
  return `
    <footer class="glass footer-premium">
      <div class="container fade-in">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#/" class="logo">Nicolas CLUZEAU</a>
            <p class="footer-bio">Étudiant en 5ème année à l'ESIEA (ASI) & Alternant Administrateur d'Infrastructures.</p>
            <div class="footer-socials">
              <a href="https://www.linkedin.com/in/nicolas-cluzeau-3617ab255" target="_blank" rel="noopener noreferrer" class="social-btn">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:cluzeau@et.esiea.fr" class="social-btn">
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4>Général</h4>
            <ul>
              <li><a href="#/">Accueil</a></li>
              <li><a href="#/presentation">Ma Présentation</a></li>
              <li><a href="#/parcours">Mon parcours</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4><a href="#/realisations">Réalisations</a></h4>
            <ul>
              ${Object.entries(projectData).map(([id, data]) => `
                <li><a href="#/realisations/${id}">${data.title}</a></li>
              `).join('')}
            </ul>
          </div>
          
          <div class="footer-col">
            <h4><a href="#/competences">Compétences</a></h4>
            <ul>
              <li><a href="#/competences/techniques">Techniques</a></li>
              <li><a href="#/competences/humaines">Humaines</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Nicolas Cluzeau</p>
        </div>
      </div>
    </footer>
  `;
};
