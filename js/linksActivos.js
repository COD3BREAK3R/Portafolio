const menu = document.querySelector("nav");
const enlacesPC = menu.querySelectorAll(".linkPC");
const enlacesMovil = enlaces_nav_movil.querySelectorAll(".linkMovil");
const sections = document.querySelectorAll(".seccion");

function elementoOcupaMitadViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    const alturaViewport =
        window.innerHeight || document.documentElement.clientHeight;

    const parteSuperiorElemento = rect.top;
    const parteInferiorElemento = rect.bottom;

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
            console.log(tipoEnlace[i]);

            tipoEnlace.forEach((element, indice2) => {
                if (
                    tipoEnlace[indice2].classList.contains("linkActivo") &&
                    indice2 !== i
                ) {
                    console.log(tipoEnlace[indice2]);
                    tipoEnlace[indice2].classList.remove("linkActivo");
                }

            });
        } else {
            tipoEnlace[i].classList.remove("linkActivo");
        }
    });
};

window.addEventListener("scroll", agregarClaseEnlaces);
