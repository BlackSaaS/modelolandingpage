document.addEventListener('DOMContentLoaded', function() {
    // Acordeão de Perguntas Frequentes
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alterna o item atual
            item.classList.toggle('active');
        });
    });
    
    // Animação de rolagem suave para links de navegação
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Botões CTA - Adicionar eventos
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aqui você pode adicionar o código para abrir um modal de contato
            // ou redirecionar para uma página de cadastro/compra
            console.log('Botão CTA clicado');
        });
    });
    
    // Animação de entrada para elementos quando visíveis na tela
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .testimonial-card, .faq-item, .cta-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    // Adicionar classe para animação CSS
    window.addEventListener('scroll', animateOnScroll);
    
    // Iniciar animação para elementos já visíveis
    animateOnScroll();
});

//visíveis Iniciar animação para elementos já 