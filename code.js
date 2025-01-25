resetImagePosition(); 
checkWindowSize();

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

window.addEventListener('resize', checkWindowSize);

function checkWindowSize() {
    if (window.innerWidth <= 1300 || window.innerHeight <= 700) {
        resetImagePosition();
    } else {
        resetImagePosition();  
        showTopButtons();  
        showImageContainer();
        hidePhoneTextContainer();
    }
}
function showTopButtons() {
    const topButtons = document.querySelector('.top-buttons');
    topButtons.style.display = 'block';  
}

function showImageContainer() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.display = 'flex';  
}

function hidePhoneTextContainer(){
    const textContainerPhone = document.getElementById('text-container-phone');
    if (textContainerPhone) {
        textContainerPhone.style.display = 'none'; 
    }
}

function resetImagePosition() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('move-right', 'move-left');
    imageContainer.classList.remove('menu-open');
    hideTextContainer();
}

function clearActiveButtons() {
    const buttons = document.querySelectorAll('.top-buttons .button');
    buttons.forEach(button => button.classList.remove('active', 'inactive'));
}


function showTextContainer(direction) {
    const textContainer = document.getElementById('text-container');

    textContainer.classList.remove('left', 'right', 'show', 'hide');

    void textContainer.offsetWidth; 

    // Dodaj odpowiednie klasy
    textContainer.classList.add(direction); 
    textContainer.classList.add('show'); 
}

function hideTextContainer() {
    const textContainer = document.getElementById('text-container');

    textContainer.classList.remove('show');

    textContainer.classList.add('hide');

    textContainer.addEventListener('animationend', function handler() {
        textContainer.classList.remove('hide'); 
        textContainer.removeEventListener('animationend', handler); 
    }, { once: true }); 
}

function loadText(fileName, direction) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const dynamicText = document.getElementById('dynamic-text');
            dynamicText.innerHTML = htmlContent; 
            showTextContainer(direction); 
        })
        .catch(error => {
            console.error('Error fetching HTML:', error);
            const dynamicText = document.getElementById('dynamic-text');
            dynamicText.textContent = 'Error loading HTML.'; 
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

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

///PHONE


document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const imageContainer = document.getElementById('image-container');
    const textContainerPhone = document.getElementById('text-container-phone');

    // Przełączanie widoczności menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';  // Pokazuje menu
        imageContainer.classList.add('menu-open');  // Dodaje klasę do przesunięcia kontenera
    } else {
        menu.style.display = 'none';  // Ukrywa menu
        imageContainer.classList.remove('menu-open');  // Usuwa klasę przesunięcia
    }

    // Ukrywanie textContainerPhone jeśli jest widoczny
    if (textContainerPhone.style.display === 'block') {
        textContainerPhone.style.display = 'none';
        imageContainer.style.display = 'block';  // Przywrócenie widoczności kontenera obrazka
    }
});



function loadHtmlContentPhone(fileName) {
    const mobileMenu = document.getElementById('mobile-menu');
    const textContainerPhone = document.getElementById('text-container-phone');
    const imageContainer = document.querySelector('.image-container');

    // Hide menu and image container, show text container
    if (mobileMenu) mobileMenu.style.display = 'none';
    if (imageContainer) imageContainer.style.display = 'none';
    textContainerPhone.style.display = 'block';

    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            textContainerPhone.innerHTML = data; // Insert the fetched HTML
        })
        .catch(error => {
            textContainerPhone.innerHTML = '<p>Sorry, something went wrong. Unable to load the content.</p>';
            console.error('Error loading HTML:', error);
        });
}
