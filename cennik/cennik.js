document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const centerText = document.getElementById("center-text"); 
    const servicesContainer = document.getElementById("services-container"); 
    const leftText = document.getElementById("left-text");

    document.getElementById("menu-toggle").addEventListener("click", function() {
        // Sprawdzamy, czy menu jest ukryte
        if (mobileMenu.classList.contains("hidden")) {
            // Pokazujemy menu, ukrywamy inne elementy
            mobileMenu.classList.remove("hidden");
            centerText.classList.add("hidden");
            servicesContainer.classList.add("hidden");
            leftText.classList.add("hidden");
        } else {
            // Ukrywamy menu, przywracamy widoczność innych elementów
            mobileMenu.classList.add("hidden");
            centerText.classList.remove("hidden");
            servicesContainer.classList.remove("hidden");
            leftText.classList.remove("hidden");
        }
    });
});


function toggleSecondButtons(button) {
    const service = button.closest('.service');
    const allServices = document.querySelectorAll('.service');  

    const allFirstButtons = document.querySelectorAll('.first-button');
    allFirstButtons.forEach((btn) => {
        btn.style.display = 'none';
    });

    allServices.forEach((otherService) => {
        otherService.style.display = 'none';
    });

    service.style.display = 'flex';

    const service2 = service.querySelector('.service-2');
    if (service2) {
        service2.classList.remove('hidden');
    }
}


function toggleDescription(button) {

    const description = button.nextElementSibling; 

    const allDescriptions = button.closest('.service-2').querySelectorAll('.description');
    
    allDescriptions.forEach((desc) => {
        if (desc !== description) {
            desc.classList.add('hidden'); 
        }
    });

    description.classList.toggle('hidden');
}


function toggleBold(button) {
    const allSecondButtons = button.closest('.service-2').querySelectorAll('.second-button');

    const isAlreadyBold = button.classList.contains('bold');

    allSecondButtons.forEach((btn) => {
        btn.classList.remove('bold');
    });

    if (!isAlreadyBold) {
        button.classList.add('bold');
    }
}


function back() {
    const allSecondServices = document.querySelectorAll('.service-2');
    allSecondServices.forEach((service2) => {
        service2.classList.add('hidden'); 
    });

    const allFirstButtons = document.querySelectorAll('.first-button');
    allFirstButtons.forEach((btn) => {
        btn.style.display = 'block'; 
    });

    const allServices = document.querySelectorAll('.service');
    allServices.forEach((service) => {
        service.style.display = 'flex'; 
    });
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

