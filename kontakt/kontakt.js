document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const centerText = document.getElementById("center-text"); 
    const mainContainer = document.getElementById("main-container"); 
    const leftText = document.getElementById("left-text");

    document.getElementById("menu-toggle").addEventListener("click", function() {
        // Sprawdzamy, czy menu jest ukryte
        if (mobileMenu.classList.contains("hidden")) {
            // Pokazujemy menu, ukrywamy inne elementy
            mobileMenu.classList.remove("hidden");
            centerText.classList.add("hidden");
            mainContainer.classList.add("hidden");
            leftText.classList.add("hidden");
        } else {
            // Ukrywamy menu, przywracamy widoczność innych elementów
            mobileMenu.classList.add("hidden");
            centerText.classList.remove("hidden");
            mainContainer.classList.remove("hidden");
            leftText.classList.remove("hidden");
        }
    });
});
