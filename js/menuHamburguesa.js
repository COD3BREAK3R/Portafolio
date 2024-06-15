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
=       MARK:Cerrar Menú Movil                  
=============================================*/

window.addEventListener("resize", () => {
    if (
        window.innerWidth > 770 &&
        oscurecer_fondo.classList.contains("mostrar")
    ) {
        abrirCerraMenuHamburguesa();
    }
});

/*============  End of Cerrar Menú Movil  =============*/
