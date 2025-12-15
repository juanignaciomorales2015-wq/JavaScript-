let edad = 25;
let nombre = "Ignacio";
let estudiante = true;
console.log(edad);
console.log(nombre);
console.log(estudiante);
const dni = 42265605;
console.log(dni);
nombre = "Flor";
console.log(nombre);

let suma1 = 20 ;
let suma2 = 30 ;
console.log(suma1+suma2);

edad = parseInt (prompt("Que edad tenes?"));
console.log(edad);

let mayor = confirm ("Sos mayor de edad?");
console.log(mayor);

let mate = prompt ("Tomas mate?");
console.log(mate);

alert ("Biemvenido a mi sitio")

if (edad>25 && edad<50) {
    console.log("Condicion Cumplida");}
  else{
        console.log("Condicion NO Cumplida")
};

// Actividad Practica

let numero = parseInt(prompt("Ingrese un número"));
let suma = 0;

for (let i = 1; i <= 5; i++) {
    suma = numero + i;
    console.log("Resultado de la suma: " + suma);
}

// let contador = 1;

while (contador <= 5) {
    console.log("Repetición número " + contador);
    contador++;
}

let cantidad = parseInt(prompt("Ingrese un número"));
let contador = 1;

while (contador <= cantidad) {
    alert("Hola");
    contador++;
}