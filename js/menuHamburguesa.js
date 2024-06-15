const hamburguesa = document.querySelector(".hamburguesa");
const oscurecer_fondo = document.querySelector(".oscurecer_fondo");
const enlaces_nav_movil = document.querySelector(".enlaces_nav_movil");

/*=============================================
=            MARK:Menú Hamburguesa                  
=============================================*/
abrirCerraMenuHamburguesa = () => {
    hamburguesa.classList.toggle("activo");
    oscurecer_fondo.classList.toggle("mostrar");
    enlaces_nav_movil.classList.toggle("animar");

    setTimeout(() => {}, 100);
    document.body.classList.toggle("noScroll");
};

hamburguesa.addEventListener("click", () => {
    abrirCerraMenuHamburguesa();
});

/*=============================================
=       MARK:Posicionamiento Menú Movil                  
=============================================*/

const nav = document.querySelector("nav");
const main = document.querySelector("main");

const calcularAlturaOscurecerFondo = () => {
    const alturaNav = nav.offsetHeight;
    main.style.marginTop = `${alturaNav-1}px`;
    enlaces_nav_movil.style.top = `${alturaNav + 15}px`;

    console.log();
};

window.addEventListener("load", calcularAlturaOscurecerFondo);
window.addEventListener("resize", calcularAlturaOscurecerFondo);

window.addEventListener("resize", () => {
    if (
        window.innerWidth > 770 &&
        oscurecer_fondo.classList.contains("mostrar")
    ) {
        abrirCerraMenuHamburguesa();
    }
});

/*============  End of Posicionamiento Menú Movil  =============*/
