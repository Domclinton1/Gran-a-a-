function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


let lastScrollY = window.scrollY;

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Fecha o menu se clicar fora dele
document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');

    // Verifica se o clique foi fora do menu e do botão de menu
    if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > lastScrollY) {
        // Rolando para baixo - esconde o menu e fecha a lista
        header.classList.add("hide");
        navbar.classList.remove('active');
    } else {
        // Rolando para cima - mostra o menu
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});