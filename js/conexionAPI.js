async function conectarBaseDatos() {
    const baseDatos = await fetch("http://localhost:3001/libros");
    
    const baseDatosConvertida = baseDatos.json();
    return baseDatosConvertida;
}

async function cargarBaseDatos(portada, titulo, autor, genero, isbn) {
    const nuevoObjetoBD = await fetch("http://localhost:3001/libros", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            portada: portada,
            titulo: titulo,
            autor: autor,
            genero: genero,
            isbn: isbn
        }),
    })
    const convertirIngresoDatos = nuevoObjetoBD.json();
    return convertirIngresoDatos;
}

export const baseDatosConectar = {
    conectarBaseDatos, cargarBaseDatos
}