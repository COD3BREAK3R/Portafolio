const hamburguesa = document.querySelector(".hamburguesa");
const oscurecer_fondo = document.querySelector(".oscurecer_fondo");
const enlaces_nav_movil = document.querySelector(".enlaces_nav_movil");

/*=============================================
=            MARK:Menú Hamburguesa                  
=============================================*/

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("activo");
    oscurecer_fondo.classList.toggle("mostrar");
    enlaces_nav_movil.classList.toggle("animar");

    setTimeout(() => {}, 100);
    document.body.classList.toggle("noScroll");
});

/*=============================================
=       MARK:Posicionamiento Menú Movil                  
=============================================*/

const nav = document.querySelector("nav");
const main = document.querySelector('main');

const calcularAlturaOscurecerFondo = () => {
    const alturaNav = nav.offsetHeight;
    main.style.marginTop = `${alturaNav}px`;
    enlaces_nav_movil.style.top = `${alturaNav + 15}px`;
};


window.addEventListener("load", calcularAlturaOscurecerFondo);
window.addEventListener("resize", calcularAlturaOscurecerFondo);

/*============  End of Posicionamiento Menú Movil  =============*/