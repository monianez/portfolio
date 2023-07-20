'use strict'

/*-- index.js
Interacciones
- Abrir y cerrar el menú responsive
- La palabra del menú se queda activa al hacer click
Estructura:
- Constantes
- Funciones
--*/

// cuando hago CLICK en .headerBtn hace una FUNCTION
    // headerOpen le ADD la clase isActive
    // headerClose le REMOVE la clase isActive


// Selección del icono del menú hamburguesa
const headerOpen    = document.querySelector('.Header-open')
// Selección del icono cerrar del menú
const headerClose   = document.querySelector('.Header-close')
// Selección del navegador
const headerNav     = document.querySelector('.Header-nav')
// Selección de los enlaces del menú
const headerLinks   = document.querySelectorAll('.Header-link')
// Selección de las imágenes del grid (pequeñas imágenes del lightbox)
const gridImgs      = document.querySelectorAll('.Grid-img')
// Selección del lightbox
const lightbox      = document.querySelector(`.Lightbox`)
// Selección de las imágenes grandes del lightbox
const lightboxImg   = document.querySelector('.Lightbox-img')
// Selección del svg para cerrar el lightbox
const lightboxClose = document.querySelector(`.Lightbox-close`)
// Selección del background
const lightboxBg    = document.querySelector(`.Lightbox-bg`)

// Una función que abre y cierra el menú responsive

headerOpen.addEventListener(`click` , ()=>{
    headerNav.classList.add(`isActive`)
})

headerClose.addEventListener(`click` , ()=>{
    headerNav.classList.remove(`isActive`)
})


// Cuando hago CLICK en .headerLinks hace una FUNCTION
// A .headerLink le ADD la clase isActive

// Una función que al hacer click en un enlace del menú se queda activo

headerLinks.forEach(headerLink => {
    headerLink.addEventListener(`click`, () => {
        document.querySelector(`.isActive`)?.classList.remove(`isActive`);
        headerLink.classList.add(`isActive`);
    })
})


// Cuando hago CLICK en gridImgs hace una FUNCTION
// lightbox le ADD la clase isActive


gridImgs.forEach(( eachImg , i )=>{
    gridImgs[i].addEventListener(`click`,()=>{

        lightbox.classList.add(`isActive`)
        lightboxImg.src = gridImgs[i].src

    })
})


// Cuando hago CLICK en Lightbox-close
    // Lightbox le REMOVE la clase isActive

lightboxBg.addEventListener('click',()=>{
    lightbox.classList.remove(`isActive`)
})

lightboxClose.addEventListener('click',()=>{
    lightbox.classList.remove(`isActive`)
})