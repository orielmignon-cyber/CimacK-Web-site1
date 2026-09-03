// CIMACK Medical Imaging Center Website Script

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', function () {
            const navMenu = navbar.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }
        });
    }

    // Set active link based on current page URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Appointment Form Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const examen = document.getElementById('examen').value;
    const date = document.getElementById('preferred_date').value;

    if (!fullname || !phone || !examen) {
        alert('Veuillez remplir tous les champs obligatoires (*).');
        return;
    }

    // Display success message
    const successBox = document.getElementById('formSuccess');
    if (successBox) {
        successBox.style.display = 'block';
        successBox.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset form fields
    document.getElementById('appointmentForm').reset();
}
