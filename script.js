// Seleciona o container das portas
const container = document.querySelector(".container");

// Adiciona um evento de scroll
window.addEventListener("scroll", () => {
    // Verifica se o scroll ultrapassou 100px
    if (window.scrollY > 100) {
        container.classList.add("open");
    } else {
        container.classList.remove("open");
    }
});

// carrossel

const carouselInner = document.querySelector(".carousel-inner");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

if (carouselInner && leftArrow && rightArrow) {
  console.log("Todos os elementos foram encontrados!");

  let currentIndex = 0;
  const itemsPerView = 3;
  const totalItems = document.querySelectorAll(".depoimento").length;

  console.log("Total de itens no carrossel:", totalItems);

  // Atualiza a posição do carrossel
  function updateCarousel() {
    const offset = currentIndex * (100 / itemsPerView);
    console.log("Atualizando carrossel para o índice:", currentIndex);
    carouselInner.style.transform = `translateX(-${offset}%)`;
  }

  // Avança para o próximo conjunto de depoimentos
  rightArrow.addEventListener("click", () => {
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
      console.log("Clicou na seta direita. Índice atual:", currentIndex);
      updateCarousel();
    } else {
      console.log("Fim do carrossel.");
    }
  });

  // Volta para o conjunto anterior
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      console.log("Clicou na seta esquerda. Índice atual:", currentIndex);
      updateCarousel();
    } else {
      console.log("Início do carrossel.");
    }
  });
} else {
  console.error("Alguns elementos necessários não foram encontrados no DOM.");
}