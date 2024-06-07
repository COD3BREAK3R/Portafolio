function corregirDesplazamientoScroll() {
    const menu = document.querySelector("nav");
    const enlaces_nav_movil = document.querySelector(".enlaces_nav_movil");

    document.querySelectorAll('a[href^="#"]').forEach((element) => {
        element.addEventListener("click", function (e) {
            e.preventDefault();

            let menuAltura = menu.offsetHeight;

            // Obtiene el objetivo del enlace con hastag
            let targetId = this.getAttribute("href");
            let targetElement = document.querySelector(targetId);

            // Calcula la posición del elemento objetivo y ajusta con el offset de la altura del menú sticky
            let posicionElemento = targetElement.getBoundingClientRect().top;
            let desplazamiento = posicionElemento + window.scrollY - menuAltura;

            window.scrollTo({
                top: desplazamiento,
                behavior: "smooth",
            });

            if (enlaces_nav_movil.classList.contains("animar")) {
                abrirCerraMenuHamburguesa();
            }
        });
    });
}

corregirDesplazamientoScroll();