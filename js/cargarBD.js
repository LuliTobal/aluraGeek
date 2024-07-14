import {baseDatosConectar} from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function obteniendoValores(evento){
    
    evento.preventDefault();
    const portada = document.querySelector("[data-portada]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const autor = document.querySelector("[data-autor]").value;
    const genero = document.querySelector("[data-genero]").value;
    const isbn = document.querySelector("[data-isbn]").value;

    await baseDatosConectar.cargarBaseDatos(portada, titulo, autor, genero, isbn);
}

formulario.addEventListener("submit", evento => obteniendoValores(evento));