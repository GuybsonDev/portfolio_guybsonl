// Detecta quando as seções entram na tela
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.scroll-section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight / 1.5; // A seção será visível antes de entrar completamente

    if (sectionTop < sectionVisible) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});