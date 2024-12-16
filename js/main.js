let btnFinalizar = document.getElementById("FinalizarCompra");
let lista = document.querySelector(".contenedorProductos");
let totalText = document.getElementById("totalTextDinamico");
let total = 0;
const productos = [
    { nombre: "Pan", precio: 1500, imagen: "../imagenes/imagenesEstructura/mignon.jpg", descripcion: "Pan fresco y sabroso" },
    { nombre: "Galleta", precio: 1500, imagen: "../imagenes/imagenesEstructura/galleta.avif", descripcion: "Galleta de campo" },
    { nombre: "Caserito", precio: 1600, imagen: "../imagenes/imagenesEstructura/pancasero.jpeg", descripcion: "Pan casero, suave y esponjoso" },
    { nombre: "Chips", precio: 3500, imagen: "../imagenes/imagenesEstructura/chips.jpg", descripcion: "Chips de viena" },
    { nombre: "Fugacitas", precio: 2000, imagen: "../imagenes/imagenesEstructura/fugazas.JPG", descripcion: "Pan Fugaza" },
    { nombre: "Bizcochitos Grasa", precio: 3000, imagen: "../imagenes/imagenesEstructura/bizcDeGrasa.webp", descripcion: "Bizcochitos de grasa o criollitos" },
];

function screenPrinter(arrayProductos) {
    lista.innerHTML = '';
    arrayProductos.forEach((producto, i) => {
        lista.innerHTML += `
        <div class="ICard-i">
        <img class="contenedorImagenes" src="${arrayProductos[i].imagen}" alt="${arrayProductos[i].nombre}">
            <h3 class="nombrePrecio">${producto.nombre} - $${producto.precio}</h3>
            <p>${producto.descripcion}</p>
            <input type="number" id="cantidad${i}" placeholder="Ingrese cantidad">
            <button id="btn${i}">Cargar</button>
        </div>`;
    });
    arrayProductos.forEach((_, i) => {
        document.getElementById(`btn${i}`).addEventListener("click", () => cargarCantidad(i));
    });
}
function cargarCantidad(i) {
    let cantidadInput = document.getElementById(`cantidad${i}`);
    let cantidad = parseInt(cantidadInput.value);
    let precio = productos[i].precio;
    if (!isNaN(cantidad) && cantidad > 0) {
        let subtotal = cantidad * precio;
        total += subtotal;
        totalText.innerText = `Total: $${total}`; // Actualiza el total
        console.log("Cantidad agregada:", cantidad, "Subtotal:", subtotal, "Total acumulado:", total);
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}
btnFinalizar.addEventListener("click", () => {
    if (total > 0) {
        alert(`Total a pagar: $${total}`);
        total = 0;
        totalText.innerText = `Total: $${total}`;
    } else {
        alert("No has agregado productos.");
    }
});
screenPrinter(productos);






