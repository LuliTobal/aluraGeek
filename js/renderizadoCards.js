import {baseDatosConectar} from "./conexionAPI.js";

const cards = document.querySelector("[data-cards]");

function cargarCards(portada, titulo, autor, genero, id){
    const libro = document.createElement("div");
    libro.className = "card_libro";
    libro.dataset.id = id;
    libro.innerHTML = `<img src="${portada}" alt="" class="imagen_card">
    <h3 class="titulo">${titulo}</h3>
    <h4 class="autor">${autor}</h4>
    <h5 class="genero">${genero}</h5>
    <span class="botones_edición"><button class="btn_editar"><img src="./assets/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="imagen_btn_card"></button>
    <button class="btn_eliminar" data-id="${id}"><img src="./assets/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="imagen_btn_card"></button></span>`;

    libro.querySelector('.btn_eliminar').addEventListener('click', eliminarCard);

    return libro;
}

async function eliminarCard(event) {
    const id = event.target.closest('.btn_eliminar').dataset.id;

    if (!id) {
        console.error('ID del libro no encontrado');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3001/libros/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el libro');
        }

        event.target.closest('.card_libro').remove();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function llenarCard(){
    const lista = await baseDatosConectar.conectarBaseDatos();
    if(lista.length == 0){
        cards.innerHTML = `<h1 class = "titulo" color= "#3B848C">No hay libros para mostrar, cargue uno nuevo para actualizar la lista</h1>`
    }
    lista.forEach(libro => cards.appendChild(cargarCards(libro.portada, libro.titulo, libro.autor, libro.genero, libro.id)))
}

llenarCard();