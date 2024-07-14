import {baseDatosConectar} from "./conexionAPI.js";

const cards = document.querySelector("[data-cards]");

function cargarCards(portada, titulo, autor, genero){
    const libro = document.createElement("div");
    libro.className = "card_libro";
    libro.innerHTML = `<img src="${portada}" alt="" class="imagen_card">
    <h3 class="titulo">${titulo}</h3>
    <h4 class="autor">${autor}</h4>
    <h5 class="genero">${genero}</h5>
    <span class="botones_edición"><button class="btn_editar"><img src="./assets/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="imagen_btn_card"></button>
    <button class="btn_eliminar"><img src="./assets/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="imagen_btn_card"></button></span>`;

    return libro;
}

async function llenarCard(){
    const lista = await baseDatosConectar.conectarBaseDatos();
    if(lista.length == 0){
        cards.innerHTML = `<h1 class = "titulo" color= "#3B848C">No hay libros para mostrar, cargue uno nuevo para actualizar la lista</h1>`
    }
    lista.forEach(libro => cards.appendChild(cargarCards(libro.portada, libro.titulo, libro.autor, libro.genero)))
}

llenarCard();