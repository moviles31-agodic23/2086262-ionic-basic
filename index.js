let ArticuloInput = document.getElementById("InputArticulo")
let PrecioInput = document.getElementById("InputPrecio")
let Productos = document.getElementById("Product")
let Suma = document.getElementById("Suma")
let total = 0;

function Insertar(){
 Productos.innerHTML = Productos.innerHTML + "<p>"+ArticuloInput.value+" "+PrecioInput.value+"</p>";
 total = total + Number.parseInt(PrecioInput.value);
 Suma.innerHTML = total
}