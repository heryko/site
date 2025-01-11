document.getElementById('move-right').addEventListener('click', () => {
    handleMove('right');
});

document.getElementById('move-left').addEventListener('click', () => {
    handleMove('left');
});

function handleMove(direction) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('move-left', 'move-right');
    imageContainer.classList.add(`move-${direction}`);


    toggleActiveButton(document.getElementById(`move-${direction}`));

}

function resetImagePosition() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('move-right', 'move-left');
    hideTextContainer();
}

function clearActiveButtons() {
    const buttons = document.querySelectorAll('.top-buttons .button');
    buttons.forEach(button => button.classList.remove('active', 'inactive'));
}


function showTextContainer(direction) {
    const textContainer = document.getElementById('text-container');
    textContainer.classList.remove('left', 'right', 'hide');
    textContainer.classList.add(direction);
    textContainer.classList.add('show');
    textContainer.style.display = 'block';
}

function hideTextContainer() {
    const textContainer = document.getElementById('text-container');
    textContainer.classList.remove('show');
    textContainer.classList.add('hide');
    textContainer.addEventListener('animationend', function handler() {
        textContainer.style.display = 'none';
        textContainer.classList.remove('hide');
        textContainer.removeEventListener('animationend', handler);
    });
}

function loadText(fileName, direction) {
    const textContainer = document.getElementById('text-container');
    textContainer.style.display = 'none';

    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            setTimeout(() => {
                const dynamicText = document.getElementById('dynamic-text');
                dynamicText.innerHTML = htmlContent;
                showTextContainer(direction);
            }, 1000);
        })
        .catch(error => {
            console.error('Error fetching HTML:', error);
            const dynamicText = document.getElementById('dynamic-text');
            dynamicText.textContent = 'Error loading HTML.';
            textContainer.style.display = 'block';
            showTextContainer(direction);
        });
}

function toggleActiveButton(button) {
    const buttons = document.querySelectorAll('.top-buttons .button');
    const isActive = button.classList.contains('active');

    buttons.forEach(btn => btn.classList.remove('active', 'inactive'));

    if (!isActive) {
        button.classList.add('active');
        const direction = button.id === 'move-right' ? 'right' : 'left';
        loadText(direction === 'right' ? 'o-nas.html' : 'cennik.html', direction);
    } else {
        resetImagePosition();
    }
}

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

    // Sprawdzenie, czy przycisk już ma klasę 'bold'
    const isAlreadyBold = button.classList.contains('bold');

    // Usunięcie klasy 'bold' ze wszystkich przycisków
    allSecondButtons.forEach((btn) => {
        btn.classList.remove('bold');
    });

    // Jeśli kliknięty przycisk nie miał klasy 'bold', dodaj ją
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

document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded'); // Dodanie klasy 'loaded' po załadowaniu strony
});

