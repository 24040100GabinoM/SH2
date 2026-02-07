document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de aparición suave (Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Aplicar a las tarjetas y secciones
    const revealElements = document.querySelectorAll('.card-glass, section h2, p');
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 2. Efecto Parallax mejorado en los blobs de fondo
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach(blob => {
            blob.style.transform = `translate(${x * 80}px, ${y * 80}px) scale(${1 + (x - 0.5) * 0.1})`;
        });

        // Efecto de perspectiva en el documento
        document.body.style.perspective = '1500px';
    });

    // 3. Efecto de profundidad en botones y elementos
    const allButtons = document.querySelectorAll('button, .btn-main, .btn-main-hero');
    
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Botón se acerca sin afectar el fondo
            this.style.transform = 'translateZ(30px) scale(1.08)';
            this.style.filter = 'drop-shadow(0 0 20px rgba(176, 0, 255, 0.85))';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateZ(0) scale(1)';
            this.style.filter = 'drop-shadow(0px 0px 0px transparent)';
        });
    });

    // 4. Efecto de zoom diferenciado en tarjetas
    const cardItems = document.querySelectorAll('.card-item');
    
    cardItems.forEach((card, index) => {
        const cardsContainer = card.parentElement;
        
        card.addEventListener('mouseenter', function() {
            // Este card aumenta y se acerca
            this.style.transform = 'scale(1.12) translateZ(50px)';
            this.style.zIndex = '10';
            this.style.boxShadow = '0 25px 50px rgba(176, 0, 255, 0.22), inset 0 0 30px rgba(176,0,255,0.08)';
            
            // Los demás cards disminuyen y se alejan
            cardItems.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.transform = 'scale(0.92) translateZ(-30px)';
                    otherCard.style.zIndex = '1';
                    otherCard.style.filter = 'brightness(0.85)';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            // Volver al estado normal
            cardItems.forEach(allCards => {
                allCards.style.transform = 'scale(1) translateZ(0)';
                allCards.style.zIndex = '1';
                allCards.style.filter = 'brightness(1)';
            });
        });
    });

    // 5. Efecto de zoom en botones dentro de tarjetas
    const cardButtons = document.querySelectorAll('.card-item button');
    
    cardButtons.forEach(cardBtn => {
        cardBtn.addEventListener('mouseenter', function() {
            // El botón aumenta al hacer hover
            this.style.transform = 'scale(1.15) translateZ(20px)';
            this.style.boxShadow = '0 12px 30px rgba(176, 0, 255, 0.32), inset 0 0 20px rgba(176,0,255,0.12)';
        });

        cardBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateZ(0)';
        });
    });

    // 6. Botón Volver Arriba
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.pointerEvents = 'auto';
            } else {
                scrollBtn.style.opacity = '0.5';
                scrollBtn.style.pointerEvents = 'none';
            }
        });
    }

    // 7. Efecto de resplandor adaptativo en el movimiento del ratón
    const main = document.querySelector('main');
    if (main) {
        main.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Aplicar un gradiente radial que siga el cursor
            main.style.background = `radial-gradient(600px at ${x * 100}% ${y * 100}%, rgba(176, 0, 255, 0.04), transparent)`;
        });
    }

    // Log para confirmar carga
    console.log("Planet Fitness Neon Dark UI cargada exitosamente.");
});