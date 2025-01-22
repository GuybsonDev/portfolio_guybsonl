window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.scroll-section');
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const start = index * windowHeight;
    const end = (index + 1) * windowHeight;

    // Ajustando a transição para ser mais rápida
    const transitionSpeed = 0.5; // Menor valor, mais rápido
    const progress = (scrollY - start) / windowHeight;

    if (scrollY >= start && scrollY <= end) {
      // Aplica a transição de opacidade e blur na seção visível
      section.style.transition = `opacity ${transitionSpeed}s ease-out, filter ${transitionSpeed}s ease-out`; // Transição acelerada de opacidade e blur

      section.style.opacity = 1 - Math.pow(progress, 2); // Aumenta a opacidade com uma curva mais acentuada
      section.style.filter = `blur(${Math.pow(progress, 1) * 7}px)`; // Aplica o efeito de blur

      // Remover o blur da próxima seção, se presente
      const nextSection = sections[index + 1];
      if (nextSection) {
        nextSection.style.opacity = 0; // Remove a opacidade da próxima seção enquanto não está visível
        nextSection.style.filter = 'none'; // Remove o efeito de blur da próxima seção
      }
    } else {
      // Se a seção não estiver visível, remove os efeitos
      section.style.opacity = 0;
      section.style.filter = 'none';
    }
  });
});
