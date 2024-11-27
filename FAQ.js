document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle a classe "active" no botão clicado
        button.classList.toggle('active');

        // Seleciona a resposta correspondente
        const answer = button.nextElementSibling;

        // Verifica se a resposta está visível e ajusta
        if (button.classList.contains('active')) {
            answer.style.display = 'block'; // Mostra a resposta
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Ajusta altura
        } else {
            answer.style.maxHeight = null; // Colapsa a resposta
            answer.style.display = 'none'; // Oculta a resposta
        }
    });
});
