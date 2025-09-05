// ====== MENÚ RESPONSIVE ======
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ====== VALIDACIÓN DE LOGIN ======
const loginForm = document.querySelector("#login form");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío para validar primero

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor ingresa un correo válido.");
            return;
        }

        // Validar contraseña mínima
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("✅ Inicio de sesión exitoso.");
        loginForm.reset();
    });
}

// ====== MENSAJE DE CONTACTO ======
const contactForm = document.querySelector("#contacto form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("📩 Gracias por contactarnos. Te responderemos pronto.");
        contactForm.reset();
    });
}
// Archivo: script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar una alerta de bienvenida al cargar la página
    alert('¡Bienvenido a Mi LMS!');

    // 2. Funcionalidad para mostrar/ocultar la sección de contacto
    const contactSection = document.getElementById('contacto');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mostrar/Ocultar Contacto';
    toggleButton.style.cssText = 'padding: 10px; margin-top: 20px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 5px;';
    
    // Inserta el botón antes de la sección de contacto
    contactSection.parentNode.insertBefore(toggleButton, contactSection);
    
    toggleButton.addEventListener('click', () => {
        if (contactSection.style.display === 'none') {
            contactSection.style.display = 'block';
            toggleButton.textContent = 'Ocultar Contacto';
        } else {
            contactSection.style.display = 'none';
            toggleButton.textContent = 'Mostrar Contacto';
        }
    });
    
    // 3. Funcionalidad de filtrado de cursos por categoría
    // Nota: Para este ejemplo, hemos modificado el HTML para incluir categorías
    const courseContainer = document.querySelector('.course-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Oculta todos los cursos
            const courses = courseContainer.querySelectorAll('.course-card');
            courses.forEach(course => {
                course.style.display = 'none';
            });

            // Muestra solo los cursos de la categoría seleccionada
            if (category === 'all') {
                courses.forEach(course => {
                    course.style.display = 'block';
                });
            } else {
                const filteredCourses = courseContainer.querySelectorAll(`.course-card[data-category="${category}"]`);
                filteredCourses.forEach(course => {
                    course.style.display = 'block';
                });
            }
        });
    });
});