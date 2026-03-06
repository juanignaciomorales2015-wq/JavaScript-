const productosIniciales = [
    { id: 1, nombre: "Remera", precio: 25000, imagen: "./img/remera.jpg", stock: 10 },
    { id: 2, nombre: "Campera", precio: 65000, imagen: "./img/campera.jpg", stock: 10 },
    { id: 3, nombre: "Jean", precio: 40000, imagen: "./img/jeans.jpg", stock: 10 },
    { id: 4, nombre: "Gorra", precio: 15000, imagen: "./img/gorra.jpg", stock: 10 },
];

let productos = JSON.parse(localStorage.getItem("productos")) || productosIniciales;

let carritoRaw = JSON.parse(localStorage.getItem("carrito")) || [];
let carrito = [];
if (carritoRaw.length > 0 && carritoRaw[0].cantidad !== undefined) {
    carrito = carritoRaw;
} else {
    carritoRaw.forEach(p => {
        const existente = carrito.find(item => item.id === p.id);
        if (existente) existente.cantidad++;
        else carrito.push({ id: p.id, cantidad: 1 });
    });
    if (carrito.length === 0) carrito = [];
}

const contenedorProds = document.getElementById("contenedor-productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total-precio");
const btnFinalizar = document.getElementById("btn-finalizar");
const btnRestablecerStock = document.getElementById("btn-restablecer-stock");


const mostrarProductos = () => {
    productos.forEach(prod => {
        let div = document.createElement("div");
        div.className = "producto-card";
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-img">
            <span>${prod.nombre} - $${prod.precio}</span>
            <span class="producto-stock">Stock: ${prod.stock}</span>
            <button class="btn-agregar" id="btn${prod.id}" ${prod.stock === 0 ? "disabled" : ""}>Agregar</button>
        `;
        contenedorProds.appendChild(div);

        document.getElementById(`btn${prod.id}`).addEventListener("click", () => {
            agregarAlCarrito(prod.id);
        });
    });
};

const agregarAlCarrito = (id) => {
    const prod = productos.find(p => p.id === id);
    if (!prod || prod.stock < 1) {
        Swal.fire({
            title: "Sin stock",
            text: "No hay unidades disponibles.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });
        return;
    }
    const itemCarrito = carrito.find(item => item.id === id);
    if (itemCarrito) {
        itemCarrito.cantidad++;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }
    prod.stock--;
    localStorage.setItem("productos", JSON.stringify(productos));
    actualizarInterfaz();
    const cantidadEnCarrito = carrito.find(item => item.id === id).cantidad;
    Swal.fire({
        title: "Agregado al carrito",
        text: `${prod.nombre} x${cantidadEnCarrito}`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};

const restablecerStock = () => {
    productos.forEach(p => { p.stock = 10; });
    localStorage.setItem("productos", JSON.stringify(productos));
    actualizarInterfaz();
    Swal.fire({
        title: "Stock restablecido",
        text: "Todos los productos tienen 10 unidades.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
    });
};

btnRestablecerStock.addEventListener("click", restablecerStock);

const actualizarInterfaz = () => {
    listaCarrito.innerHTML = "";

    carrito.forEach(item => {
        const prod = productos.find(p => p.id === item.id);
        if (!prod) return;
        let li = document.createElement("li");
        const subtotal = prod.precio * item.cantidad;
        li.innerHTML = `${prod.nombre} x${item.cantidad} - $${subtotal}`;
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, item) => {
        const prod = productos.find(p => p.id === item.id);
        return acc + (prod ? prod.precio * item.cantidad : 0);
    }, 0);
    totalTexto.innerText = total;

    document.querySelectorAll(".producto-card").forEach((card, i) => {
        const p = productos[i];
        if (!p) return;
        const stockEl = card.querySelector(".producto-stock");
        const btn = card.querySelector(".btn-agregar");
        if (stockEl) stockEl.textContent = "Stock: " + p.stock;
        if (btn) btn.disabled = p.stock === 0;
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
};


const simularProcesamiento = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1200);
    });
};

btnFinalizar.addEventListener("click", async () => {
    if (carrito.length > 0) {
        Swal.fire({
            title: "Procesando compra...",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });
        await simularProcesamiento();
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarInterfaz();
        Swal.fire({
            title: "¡Gracias por tu compra!",
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    } else {
        Swal.fire({
            title: "Carrito vacío",
            text: "Agregá productos antes de finalizar.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });
    }
});


mostrarProductos();
actualizarInterfaz(); 



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

/* let h1 = document.querySelectorAll ("h1")
console.log(h1);

let paises = document.querySelectorAll (".paises")
console.log(paises); */

/* let div = document.getElementById ("div");
div.innerHTML = "<h2>Que onda wey</h2> <p>Hola</p>" */

/* let titulo = document.getElementById ("h1");
titulo.innerText = "Nuevo Titulo"; */

/* let enlace = document.querySelector ("#a");
enlace.setAttribute ("href", "https://www.google.com") */

/* let nuevoDiv = document.createElement ("div");
nuevoDiv.innerHTML = "<p>Este es el nuevo</p>"
document.body.appendChild (nuevoDiv); */

/* const nombre = "Nacho"
const edad = 26

const contenedor = document.getElementById ("info");
contenedor.innerHTML = `
<h2>Informacion del Usuario</h2>
<p>Nombre: ${nombre}</p>
<p>Edad: ${edad}</p>
`; */

/* const productos = [
    {nombre:"Arroz", precio:125},
    {nombre:"Fideos", precio:70},
    {nombre:"Pan", precio:50},
];

const contenedor = document.getElementById ("productos");
contenedor.innerHTML = `
    <><h2>Lista de Productos</h2><ul>
        ${productos.map(productos => ` <li>$(productos.nombre} - $${productos.precio}</li>`).join()}
    </ul></>
` */

/* const boton = document.getElementById ("miBoton");
boton.addEventListener ("click" , function(){
    alert ("Hiciste click usando addEventListener");
});
console.log("Evento Disparado"); */

/* let boton = document.getElementById ("miBoton");
boton.onclick =() => {console.log("Click");
boton.onmousemove = () => {console.log("Move");
}
} */

/* let input1 = document.getElementById ("nombre");
let input2 = document.getElementById ("edad");
input1.onchange = () => {console.log("Valor 1")};
input2.onchange = () => {console.log("Valor 2");} */

/* let miFormulario = document.getElementById ("formulario");
miFormulario.addEventListener ("submit" , validarFormulario);
function validarFormulario (e){
    e.preventDefault ();
    console.log("Formulario Enviado");}
 */

/* let carrito = [];

let productos = [
    {id:1, nombre:"Remera", precio:25000},
    {id:2, nombre:"Campera", precio:65000},
    {id:3, nombre:"Jean", precio:40000},
    {id:4, nombre:"Gorra", precio:15000},
];

const agregarAlCarrito = (i) =>{
    carrito.push(productos[parseInt(i) -1]);
    alert(`${productos[parseInt(i) - 1].nombre} agregado al carrito.`);
}

const obtenerTotal = (arrayCarrito) => {
    return arrayCarrito.reduce((total, item) => total + item.precio, 0);
}

let opcion;

do{
    opcion = prompt (
    "Bienvenido/a a nuestra Tienda: Elejir Productos: \n 1) Remera \n 2) Campera \n 3)Jean \n 4) Gorra \n 5) Ver Carrito y Total \n 6) Salir")

switch (opcion) {
    case "1":
    agregarAlCarrito (opcion);
        break;
        case "2":
    agregarAlCarrito (opcion);
        break;
        case "3":
    agregarAlCarrito (opcion);
        break;
        case "4":
    agregarAlCarrito (opcion);
        break;
        case "5":
  if (carrito.length === 0) {
        alert("El carrito está vacío.");} 
    else {
let totalCompra = obtenerTotal(carrito);  
     console.table(carrito); 
    alert("Revisa la consola para ver el detalle.\nEl total actual es: $" + totalCompra);}
    break;
      case "6":
            let totalFinal = obtenerTotal(carrito);
            console.log ("Gracias por visitarnos. Total a pagar: $" + totalFinal);
            break;
        default:
            alert("Opción Incorrecta");}
    } while (opcion !=6);

    const frutas = [
        {id: 1, nombre: "Durazno", precio: 1300},
        {id: 2, nombre: "Manzana", precio: 3000},
        {id: 3, nombre: "Kiwi", precio: 4500},
        {id: 4, nombre: "Banana", precio: 2500},
        {id: 5, nombre: "Anana", precio: 3000},
        {id: 6, nombre: "Mandarina", precio: 1500},
    ];

    const cargarDOM = () => {
        let contenedor = document.getElementById ("contenedor");

        frutas.forEach ((fruta) =>{
            let div = document.createElement ("div");
            div.className = "border";
            div.innerHTML = `
            <h3>Id: ${fruta.id}</h3>
            <h2>Nombre: ${fruta.nombre}</h2>
            <span>Precio: $${fruta.precio}</span>
      `;
      contenedor.appendChild (div);
    });
}; */

/* console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta despues de 2 segundos");
}, 2000);

console.log("Fin"); */







    









