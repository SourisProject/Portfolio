document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation de la section Home par défaut
  showSection('home');
});

function showSection(sectionId) {
  // Cacher toutes les sections
  document.querySelectorAll('.main-content, .section-content').forEach(section => {
    section.classList.remove('active');
  });

  // Afficher la section sélectionnée
  document.getElementById(sectionId).classList.add('active');
}
