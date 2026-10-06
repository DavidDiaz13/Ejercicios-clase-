for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let numero = 1;
let suma = 0;

do {
    suma = suma + numero;
    numero++;
} while (numero <= 100);

console.log(suma);