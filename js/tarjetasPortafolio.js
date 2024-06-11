/*=============================================
=         MARK:Variables de Elementos                  
=============================================*/

const btnLeerMas = document.querySelectorAll(".leerMas");
const btnVolverAtras = document.querySelectorAll(".volver_atras");
// ------------------------------------------
const portafolio_card = document.querySelectorAll(".portafolio_card");
const portafolio_header = document.querySelectorAll(".portafolio_header");
const portafolio_tecnologias = document.querySelectorAll(
    ".portafolio_tecnologias"
);
const portafolio_botones = document.querySelectorAll(".portafolio_botones");
// ------------------------------------------
const portafolio_back = document.querySelectorAll(".portafolio_back");
const contenido_back = document.querySelectorAll(".contenido_back");

/*=============================================
=                MARK:Funciones                  
=============================================*/

invertirCard = (indice) => {
    portafolio_card[indice].style.transform = "rotateY(-180deg)";

    portafolio_header[indice].style.visibility = "hidden";
    portafolio_tecnologias[indice].style.visibility = "hidden";
    portafolio_botones[indice].style.visibility = "hidden";
    portafolio_back[indice].style.zIndex = "-10";

    setTimeout(() => {
        portafolio_back[indice].style.opacity = "1";
        portafolio_back[indice].style.visibility = "visible";
        contenido_back[indice].style.visibility = "visible";
    }, 199);
};

volverAtras = (indice) => {
    portafolio_card[indice].style.transform = "rotateY(0deg)";
    portafolio_back[indice].style.zIndex = "-1000";

    setTimeout(() => {
        portafolio_header[indice].style.visibility = "visible";
        portafolio_botones[indice].style.visibility = "visible";
        portafolio_tecnologias[indice].style.visibility = "visible";
        contenido_back[indice].style.visibility = "hidden";
    }, 199);

    portafolio_back[indice].style.opacity = "0";
    portafolio_back[indice].visibility = "hidden";
};

/*=============================================
=           MARK:Event Listeners                   
=============================================*/

btnLeerMas.forEach((element, indice) => {
    element.addEventListener("click", () => {
        invertirCard(indice);
    });
});

btnVolverAtras.forEach((element, indice) => {
    element.addEventListener("click", () => {
        volverAtras(indice);
    });
});