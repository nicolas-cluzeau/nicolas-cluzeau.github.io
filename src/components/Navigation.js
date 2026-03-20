export const Navigation = (projectData, skillData) => {
  return `
    <nav class="glass">
      <div class="nav-container">
        <a href="#/" class="logo">Nicolas CLUZEAU</a>
        <button class="mobile-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li class="nav-item">
            <a href="#/" class="nav-link has-dropdown">Accueil <span class="arrow">⌄</span></a>
            <div class="dropdown glass">
              <a href="#/presentation" class="dropdown-link">Ma Présentation</a>
              <a href="#/parcours" class="dropdown-link">Mon parcours</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="#/realisations" class="nav-link has-dropdown">Réalisations <span class="arrow">⌄</span></a>
            <div class="dropdown glass">
              ${Object.entries(projectData).map(([id, data]) => `
                <a href="#/realisations/${id}" class="dropdown-link">${data.title}</a>
              `).join('')}
            </div>
          </li>
          <li class="nav-item">
            <a href="#/competences" class="nav-link has-dropdown">Compétences <span class="arrow">⌄</span></a>
            <div class="dropdown glass">
              <div class="dropdown-item">
                <a href="#/competences/techniques" class="dropdown-link has-nested">Techniques <span class="arrow">›</span></a>
                <div class="nested-dropdown glass">
                  ${Object.entries(skillData.techniques).map(([id, data]) => `
                    <a href="#/competences/techniques/${id}" class="dropdown-link">${data.title}</a>
                  `).join('')}
                </div>
              </div>
              <div class="dropdown-item">
                <a href="#/competences/humaines" class="dropdown-link has-nested">Humaines <span class="arrow">›</span></a>
                <div class="nested-dropdown glass">
                  ${Object.entries(skillData.humaines).map(([id, data]) => `
                    <a href="#/competences/humaines/${id}" class="dropdown-link">${data.title}</a>
                  `).join('')}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#/contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
};
