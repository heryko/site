window.addEventListener('load', () => {
    document.body.classList.add('loaded'); // This will trigger the fade-in and scale effect
    checkWindowSize(); 
});


function checkWindowSize() {
    if (window.innerWidth >= 1300 || window.innerHeight >= 700) {
        showTopButtons();  
        hidePhoneTextContainer();
        showImageContainer();
    }
}

function showTopButtons() {
    const topButtons = document.querySelector('.top-buttons');
    topButtons.style.display = 'block';  
}

function showImageContainer() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.display = 'block';  
}

function hidePhoneTextContainer(){
    const textContainerPhone = document.getElementById('text-container-phone');
    if (textContainerPhone) {
        textContainerPhone.style.display = 'none'; 
    }
}

function clearActiveButtons() {
    const buttons = document.querySelectorAll('.top-buttons .button');
    buttons.forEach(button => button.classList.remove('active', 'inactive'));
}

///PHONE


document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const imageContainer = document.getElementById('image-container');
    const textContainerPhone = document.getElementById('text-container-phone');

    const isMenuVisible = menu.style.display === 'flex' || menu.style.display === '';

    if (isMenuVisible) {
        menu.style.display = 'none';
        imageContainer.style.display = 'block';
    } else if (!isMenuVisible && imageContainer.style.display === 'none' ){
        menu.style.display = 'none';
        imageContainer.style.display = 'block';
    } else{
        menu.style.display = 'flex';
        imageContainer.style.display = 'none';
    }

    // Jeśli textContainerPhone jest widoczny, ukryj go i pokaż obrazek
    if (textContainerPhone.style.display === 'block') {
        textContainerPhone.style.display = 'none';
        imageContainer.style.display = 'block';
    }
});
