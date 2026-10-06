let productos = [
  { nombre: "Labial", precio: 150, disponible: true },
  { nombre: "Rímel", precio: 220, disponible: true },
  { nombre: "Base", precio: 300, disponible: false }
];

function mostrarProducto(nombre, precio) {
  console.log(`El producto ${nombre} cuesta $${precio}`);
}

let producto = productos[0];

console.log(producto);

console.log(producto.precio);

mostrarProducto(producto.nombre, producto.precio);

productos.splice(2, 1);

console.log(productos);