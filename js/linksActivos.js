const menu = document.querySelector("nav");
const enlacesPC = menu.querySelectorAll(".linkPC");
const enlacesMovil = document.querySelectorAll(".enlaces_nav_movil .linkMovil");
const sections = document.querySelectorAll(".seccion");

function elementoOcupaMitadViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    const alturaViewport =
        window.innerHeight || document.documentElement.clientHeight;

    const parteSuperiorElemento = Math.floor(rect.top);
    const parteInferiorElemento = Math.floor(rect.bottom);

    const alturaTargetViewport = (alturaViewport / 2) * 0.35;

    const elementoApareceCompleto =
        parteSuperiorElemento >= 0 && parteInferiorElemento <= alturaViewport;

    return (
        (parteSuperiorElemento <= alturaTargetViewport &&
            parteInferiorElemento >= alturaTargetViewport) ||
        elementoApareceCompleto
    );
}

agregarClaseEnlaces = () => {
    sections.forEach((elemento, i) => {
        let tipoEnlace = undefined;

        if (window.innerWidth < 770) {
            tipoEnlace = enlacesMovil;
        } else {
            tipoEnlace = enlacesPC;
        }

        if (elementoOcupaMitadViewport(elemento)) {
            tipoEnlace[i].classList.add("linkActivo");

            tipoEnlace.forEach((_, indice2) => {
                if (
                    tipoEnlace[indice2].classList.contains("linkActivo") &&
                    indice2 !== i
                ) {
                    tipoEnlace[indice2].classList.remove("linkActivo");
                }
            });
        } else {
            tipoEnlace[i].classList.remove("linkActivo");
        }
    });
};

window.addEventListener("scroll", agregarClaseEnlaces);
