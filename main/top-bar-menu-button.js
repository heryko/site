document.addEventListener("DOMContentLoaded", function() {
    const leftText = document.querySelector(".left-text");
    setTimeout(() => {
        leftText.classList.add("visible"); // Po załadowaniu strony dodajemy klasę "visible"
    }, 10); // Krótkie opóźnienie, aby animacja się rozpoczęła
});



function updateMenuButtonText() {
    var menuButton = document.getElementById('menu-toggle');
    
    if (window.innerWidth <= 1300 || window.innerHeight <= 700) {
        menuButton.textContent = '═'; 
    } else {
        menuButton.textContent = 'Menu';  
    }
}

window.onload = updateMenuButtonText;
window.onresize = updateMenuButtonText;
