class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        console.log(`${this.nombre} - $${this.precio} - Disponible: ${this.disponible}`);
    }
}

const p1 = new Producto("Labial", 150, true);
const p2 = new Producto("Rimel", 220, true);
const p3 = new Producto("Base", 300, false);

p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();