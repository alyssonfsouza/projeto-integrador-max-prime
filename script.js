const menuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('#nav-menu');

// 1. Abrir e Fechar pelo ícone
menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão conte como "clique fora" imediatamente
    navMenu.classList.toggle('active');
});

// 2. NOVO: Fechar ao clicar fora do menu
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target); // Clicou dentro do menu?
    const isClickOnIcon = menuIcon.contains(event.target);    // Clicou no ícone?

    // Se o menu está aberto E o clique NÃO foi dentro dele NEM no ícone
    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnIcon) {
        navMenu.classList.remove('active');
    }
});

// 3. Rolagem suave ao clicar nos links (Já estava no seu código, mantive igual)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Garante que fecha o menu ao clicar no link
        if(navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
        }
    });
});