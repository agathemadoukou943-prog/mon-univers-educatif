
/* MON UNIVERS EDUCATION */

// Afficher un message dans la console
console.log("Bienvenue sur Mon Univers Éducation !");

// Animation douce lors du clic sur les liens internes
document.querySelectorAll('a[href^="#"]').forEach(function (lien) {
    lien.addEventListener("click", function (event) {
        const cible = document.querySelector(
            this.getAttribute("href")
        );

        if (cible) {
            event.preventDefault();

            cible.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Message de bienvenue
document.addEventListener("DOMContentLoaded", function () {
    console.log("Le site est prêt !");
});
  
