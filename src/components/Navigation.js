export const Navigation = (projectData, skillData, svgIcons) => {
  return `
    <nav class="sidebar-nav">
      <div class="sidebar-top">
        <a href="#/" class="logo-sidebar">
          <span class="logo-init">NC</span>
        </a>
      </div>
      
      <ul class="nav-links-vertical">
        <li class="nav-item-vertical" data-drawer="home">
          <a href="#/" class="nav-icon-link">
            <span class="nav-icon">${svgIcons.home}</span>
            <span class="nav-label">Accueil</span>
          </a>
          <div class="nav-drawer glass" id="drawer-home">
             <div class="drawer-header">Accueil</div>
             <a href="#/presentation" class="drawer-link nav-link-final">Ma Présentation</a>
             <a href="#/parcours" class="drawer-link nav-link-final">Mon parcours</a>
          </div>
        </li>
        
        <li class="nav-item-vertical" data-drawer="projects">
          <a href="#/realisations" class="nav-icon-link">
            <span class="nav-icon">${svgIcons.briefcase}</span>
            <span class="nav-label">Projets</span>
          </a>
          <div class="nav-drawer glass" id="drawer-projects">
            <div class="drawer-header">Réalisations</div>
            <div class="drawer-grid">
              ${Object.entries(projectData).map(([id, data]) => `
                <a href="#/realisations/${id}" class="drawer-link-card nav-link-final">
                  <span class="mini-icon">${data.icon}</span>
                  <span>${data.title}</span>
                </a>
              `).join('')}
            </div>
          </div>
        </li>

        <li class="nav-item-vertical" data-drawer="skills">
          <a href="#/competences" class="nav-icon-link">
            <span class="nav-icon">${svgIcons.code}</span>
            <span class="nav-label">Skills</span>
          </a>
          <div class="nav-drawer glass" id="drawer-skills">
            <div class="drawer-header">Compétences</div>
            <div class="drawer-section">
              <h4>Techniques</h4>
              <div class="drawer-grid">
                ${Object.entries(skillData.techniques).map(([id, data]) => `
                  <a href="#/competences/techniques/${id}" class="drawer-link-card nav-link-final">
                    <span class="mini-icon">${data.icon}</span>
                    <span>${data.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>
            <div class="drawer-section">
              <h4>Humaines</h4>
              <div class="drawer-grid">
                ${Object.entries(skillData.humaines).map(([id, data]) => `
                  <a href="#/competences/humaines/${id}" class="drawer-link-card nav-link-final">
                    <span class="mini-icon">${data.icon}</span>
                    <span>${data.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item-vertical">
          <a href="#/contact" class="nav-icon-link nav-link-final">
            <span class="nav-icon">${svgIcons.mail}</span>
            <span class="nav-label">Contact</span>
          </a>
        </li>
      </ul>

      <button class="mobile-toggle-sidebar" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;
};
