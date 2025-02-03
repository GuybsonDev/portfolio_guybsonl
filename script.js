document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("inicio");
  
  // Adiciona a classe 'visible' após um pequeno delay para o efeito de transição de carregamento
  setTimeout(() => {
    inicio.classList.add("visible");
  }, 100);  // Pequeno delay para o carregamento suave
  
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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;

    if (entry.isIntersecting) {
      section.classList.add('visible'); // Adiciona a classe visível

      // Se existirem elementos internos, adiciona a classe visível a eles
      const title = section.querySelector('h2');
      const paragraph = section.querySelector('p');
      const fotoContainer = section.querySelector('.foto-container');
      const projetosContainer = section.querySelector('.projetos-container');
      const projetos = section.querySelectorAll('.projeto');

      // Adiciona animação suave ao título, parágrafo, foto e container de projetos
      if (title) title.classList.add('visible');
      if (paragraph) paragraph.classList.add('visible');
      if (fotoContainer) fotoContainer.classList.add('visible');
      if (projetosContainer) projetosContainer.classList.add('visible');

      // Adiciona animação progressiva aos projetos dentro da seção
      projetos.forEach((projeto, index) => {
        projeto.style.animation = `fadeInProject 0.6s ease-out ${0.6 + (index * 0.2)}s forwards`;
      });
      
    } else {
      // Quando a seção sai da tela, remove a classe 'visible' para resetar
      section.classList.remove('visible');

      // Remover a visibilidade de elementos internos
      const title = section.querySelector('h2');
      const paragraph = section.querySelector('p');
      const fotoContainer = section.querySelector('.foto-container');
      const projetosContainer = section.querySelector('.projetos-container');
      const projetos = section.querySelectorAll('.projeto');

      if (title) title.classList.remove('visible');
      if (paragraph) paragraph.classList.remove('visible');
      if (fotoContainer) fotoContainer.classList.remove('visible');
      if (projetosContainer) projetosContainer.classList.remove('visible');

      projetos.forEach(projeto => {
        projeto.style.animation = ''; // Remove a animação ao sair da tela
      });
    }
  });
}, {
  threshold: 0.5 // A seção precisa ocupar 50% da tela para ativar
});

// Seleciona as seções que precisam do efeito de carregamento
const sectionsToObserve = document.querySelectorAll('#inicio, #sobre, #projetos, #contato'); // Seções #sobre e #projetos
sectionsToObserve.forEach(section => observer.observe(section)); // Aplica o observer a ambas as seções


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

document.addEventListener("DOMContentLoaded", function () {
  const projetos = document.querySelectorAll(".projeto");
  const modais = document.querySelectorAll(".modal");

  // Exibe o modal com animação ao clicar no projeto
  projetos.forEach(projeto => {
    projeto.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      
      // Adiciona a classe 'active' ao modal para ativar a animação
      modal.classList.add("active");

      // Adiciona o evento de fechar o modal
      modal.querySelector(".modal-close").addEventListener("click", function () {
        // Adiciona a animação de fechamento antes de ocultar
        modal.style.animation = "modalClose 0.3s forwards";
        
        // Espera a animação de fechamento acabar e então esconde o modal
        setTimeout(() => {
          modal.classList.remove("active");
          modal.style.animation = ''; // Reseta a animação
        }, 300); // Tempo da animação de fechamento
      });
    });
  });

  // Fechar o modal clicando fora dele
  window.addEventListener("click", function (e) {
    modais.forEach(modal => {
      if (e.target === modal) {
        modal.style.animation = "modalClose 0.3s forwards";
        setTimeout(() => {
          modal.classList.remove("active");
          modal.style.animation = '';
        }, 300);
      }
    });
  });
});







