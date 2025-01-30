window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.scroll-section');
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const start = index * windowHeight - windowHeight / 2; // Ajusta o início para que a seção apareça antes
    const end = (index + 1) * windowHeight - windowHeight / 2; // Ajusta o final

    // Ajustando a transição para ser mais rápida
    const transitionSpeed = 0.5; // Menor valor, mais rápido
    const progress = (scrollY - start) / windowHeight;

    if (scrollY >= start && scrollY <= end) {
      // Aplica a transição de opacidade na seção visível
      section.style.transition = `opacity ${transitionSpeed}s ease-out`; // Apenas a transição de opacidade

      section.style.opacity = 1 - Math.pow(progress, 5); // Aumenta a opacidade com uma curva mais acentuada

      // Remover o efeito da próxima seção
      const nextSection = sections[index + 1];
      if (nextSection) {
        nextSection.style.opacity = 0; // Remove a opacidade da próxima seção enquanto não está visível
      }
    } else {
      // Se a seção não estiver visível, remove os efeitos
      section.style.opacity = 0;
    }
  });
});

// Movimento de fundo no #inicio
window.addEventListener('mousemove', (e) => {
  const inicioSection = document.querySelector('#inicio'); // Seção com id "inicio"
  
  if (inicioSection) {
    const sectionRect = inicioSection.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = sectionRect.left + sectionRect.width / 2;
    const centerY = sectionRect.top + sectionRect.height / 2;
    const deltaX = (mouseX - centerX) * 0.05; // Ajuste o movimento
    const deltaY = (mouseY - centerY) * 0.05; // Ajuste o movimento

    inicioSection.style.backgroundPosition = `${50 + deltaX}% ${50 + deltaY}%`;
  }
});

// Função para o Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Se a seção #sobre estiver visível, adiciona a classe 'visible'
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add('visible'); // Torna a seção visível

      // Adiciona 'visible' também nos elementos dentro da seção
      const title = section.querySelector('h2');
      const paragraph = section.querySelector('p');
      const fotoContainer = section.querySelector('.foto-container');

      title.classList.add('visible');
      paragraph.classList.add('visible');
      fotoContainer.classList.add('visible');
    } else {
      // Quando a seção sai da tela, remove a classe 'visible' para resetar
      const section = entry.target;
      section.classList.remove('visible');

      // Remove 'visible' também nos elementos dentro da seção
      const title = section.querySelector('h2');
      const paragraph = section.querySelector('p');
      const fotoContainer = section.querySelector('.foto-container');

      title.classList.remove('visible');
      paragraph.classList.remove('visible');
      fotoContainer.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 // A seção precisa ocupar 50% da tela para ser considerada visível
});

// Observa a seção #sobre
const sobreSection = document.querySelector('#sobre');
observer.observe(sobreSection);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = Array.from(document.querySelectorAll(".carousel-image"));
  const totalWidth = images.reduce((sum, img) => sum + img.offsetWidth + 10, 0); // Soma das larguras das imagens
  let scrollPosition = 0;
  let speed = 0.3; // Velocidade da rolagem

  // Duplicamos todas as imagens para criar um efeito de loop contínuo
  images.forEach((image) => {
      let clone = image.cloneNode(true);
      carousel.appendChild(clone);
  });

  function scrollCarousel() {
      scrollPosition -= speed;
      carousel.style.transform = `translateX(${scrollPosition}px)`;

      // Quando todo o primeiro conjunto de imagens sair da tela, reposicionamos instantaneamente
      if (Math.abs(scrollPosition) >= totalWidth) {
          scrollPosition = 0;
          carousel.style.transition = "none"; // Remove transição para evitar travamentos
          carousel.style.transform = `translateX(0px)`;

          // Pequeno timeout para garantir que o CSS processe a mudança sem engasgo
          requestAnimationFrame(() => {
              carousel.style.transition = "transform 0.3s linear"; // Retorna a transição suave
          });
      }

      requestAnimationFrame(scrollCarousel);
  }

  scrollCarousel(); // Iniciar a rolagem
});


