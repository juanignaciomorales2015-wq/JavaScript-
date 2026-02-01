/* for (let i=0;i<5;i++){
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log("Numero:" + i);
    i++;
} */

/* let calificacion = prompt ("Cuanto te sacaste?")

if (calificacion >=90){
    console.log("Excelente");}
else if (calificacion >= 70){
    console.log ("Bueno");}
    else {
        console.log("Necesitas estudiar mas"); 
    } */

/* function saludar (){
    console.log("Hola mi amor, Te amo. Nacho");
}
saludar (); */

/* function sumar (a,b){
    return a+b;
}
let resultado = sumar (5,3);
console.log(resultado); */

/* let base = 10;
let altura = 5;

function calcularAreaTriangulo (base,altura){
    return (base*altura) /2;
}
console.log(`El area del triangulo es ${calcularAreaTriangulo (10,5)}`); */

/* const suma = (a,b) => a+b;
console.log(suma (5,3));
 */

/* const arrayVacio = [];

const numeros = [1,2,3,4];

console.log(numeros [1]); */
/* 
const colores = ["rojo","verde","azul"];
console.log(colores[0]); */

/* const frutas = ["Banana","Naranja","Melon"];
console.log(frutas [0]);
 */

/* const numeros = [10,20,30,40,50];
for (let i=0; i < numeros.length; i++)
    console.log(numeros [i]);
    
 */

/* let frutas = ["Banana","Naranja","Melon","Manzana","Uva"];
frutas.push ("Mandarina")
console.log(frutas); */

/* let frutas = ["Banana","Naranja","Melon","Manzana","Uva"];
let frutaEliminada = frutas.pop();
console.log(frutas);
console.log(frutaEliminada); */

/* let frutas = ["Banana","Naranja","Melon","Manzana","Uva"];
let frutaEliminada = frutas.shift();
console.log(frutas);
console.log(frutaEliminada);
 */

/* let frutas = ["Banana","Naranja","Melon","Manzana","Uva"];
frutas.unshift("Flor");
console.log(frutas); */

/* let frutas = ["Banana","Naranja","Melon","Manzana","Uva"];
let frutasTexto = frutas.join();
console.log(frutasTexto); */

/* const usuarios =[];
usuarios.push ({Nombre:"Flor", Edad:27});
usuarios.push ({Nombre:"Nacho", Edad:"26"});

usuarios.sort ((a,b) => a.Edad - b.Edad);
console.log(usuarios);

const mayoresDe26 = usuarios.filter (usuario => usuario.Edad > 26);
console.log(mayoresDe26);

const Nacho = usuarios.find (usuario => usuario.Nombre === "Nacho");
console.log(Nacho); */

/* function Persona (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}
const p1 = new Persona ("Ignacio", 26);
console.log(p1);
 */


/* sessionStorage.setItem ("usuario", "Nacho");
let usuario = sessionStorage.getItem ("usuario")
console.log(usuario);
sessionStorage.removeItem ("usuario");
 */

/* let usuario = {
    nombre: "Nacho",
    edad: "26"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

let usuarioRecuperado = JSON.parse(localStorage.getItem ("usuario"));
console.log(usuarioRecuperado); */

/* localStorage.remove; */

/* const numeros = [1,2,3,4,5,6];

/* /* for each */
/* numeros.forEach(n=>{
    console.log(n);
}); */

/* /* map */
/* const doble = numeros.map(n=>n*2);
console.log(doble); */ 

/* const mayoresA3 = numeros.filter(n=> n>3);
console.log(mayoresA3); */

/* const numerosPares = numeros.filter (function(numero){
    return numero % 2 === 0;
})

console.log(numerosPares); */

/* const cursos = [
    { nombre: 'JavaScript', duracion: 8 },
    { nombre: 'React', duracion: 6 },
    { nombre: 'Angular', duracion: 10 }
];

const cursosLargos = cursos.filter (function(cursos) {
    return cursos.duracion > 7
});
console.log(cursosLargos); */

/* const numeros = [1,2,3,4,5,6];

const suma = numeros.reduce ((acumulador,numero)=> {
    return acumulador + numero;
},0);
console.log(suma);
 */

/* const precios = [100,250,50];
const total = precios.reduce ((acc,precio) => acc + precio,0);
console.log(total); */

/* const numeros = [1,2,3,4,5]; */

/* const numeroEncontrado = numeros.find (n=> n>3);
console.log(numeroEncontrado); */

/* const hayMayorA4 = numeros.some (n => n>4);
console.log(hayMayorA4);
 */

/* let div = document.getElementById ("div");
let parrafo = document.getElementById ("p");

console.log(div.innerHTML);
console.log(p.innerHTML);

let paises = document.getElementsByClassName ("paises")
console.log(paises [0].innerHTML);
console.log(paises [1].innerHTML);
console.log(paises [2].innerHTML);

let contenedores = document.getElementsByTagName ("div");
console.log(contenedores [0].innerHTML);
console.log(contenedores [1].innerHTML); */

let h1 = document.querySelectorAll ("h1")
console.log(h1);

let paises = document.querySelectorAll (".paises")
console.log(paises);

















