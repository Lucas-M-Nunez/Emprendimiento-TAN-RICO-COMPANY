
/* PreLOADER Con Javascript*/


const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.display = "none";
})



/* Cuando Hago CLICK sobre el BUTTON, lo que ocurre es que le AÑADO o le QUITO la clase al .nav (Activo)
    Dicha efecto en Javascript se llama, TOGGLE o TOGGLECLASS. Asique haremos un TOGGLE de la clase 'Activo'
*/

const button = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

button.addEventListener( 'click', () => {
    nav.classList.toggle('Activo')
})


/* Funcion para FOOTER, Mostrar Dia/mes y Año */

const fecha = document.querySelector('.fecha');

function mostrarFecha(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear();

    fecha.innerHTML = `${dia}/${mes}/${anio}`
}

mostrarFecha();
