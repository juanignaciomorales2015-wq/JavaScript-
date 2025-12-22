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

// Actividad Practica Unidad 3

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

// 1️⃣ Función de ENTRADA de datos
function solicitarDatos() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    return {
        n1: numero1,
        n2: numero2
    };
}

// 2️⃣ Función de PROCESAMIENTO
function procesarDatos(datos) {
    let suma = datos.n1 + datos.n2;
    let promedio = suma / 2;

    return {
        suma: suma,
        promedio: promedio
    };
}

// 3️⃣ Función de SALIDA
function mostrarResultado(resultado) {
    alert(
        "La suma es: " + resultado.suma +
        "\nEl promedio es: " + resultado.promedio
    );

    console.log("Resultado:", resultado);
}

// 🔁 Algoritmo principal (llamadas en orden)
let datosIngresados = solicitarDatos();
let datosProcesados = procesarDatos(datosIngresados);
mostrarResultado(datosProcesados);
