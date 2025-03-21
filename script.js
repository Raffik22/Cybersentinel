document.addEventListener("DOMContentLoaded", function() {
    // ✅ Menu burger
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navigbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // ✅ Gestion des cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "flex";
    }

    document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookie-banner").style.display = "none";
        
        // Création d'un cookie avec consentement utilisateur
        document.cookie = "userConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30; // Expire après 30 jours
    });
});
