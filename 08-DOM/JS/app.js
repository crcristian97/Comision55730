//El Modelo de Objetos del Documento (DOM) es una estructura de objetos generada por el navegador, 
//la cual representa la página HTML actual. 

//Con JavaScript la empleamos para acceder y modificar de forma dinámica elementos de la interfaz.

//Es decir que, por ejemplo, desde JavaScript podemos modificar el texto contenido de una etiqueta <h1>.

//La estructura de un documento HTML son las etiquetas.

//En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, al que podemos llamar nodo. 

//Existe el objecto global que se llama con el metodo document
document.body //--> con esta simple linea de codigo obtenemos todas las etiquetas del body
document.body.title //---> Asi podriamos obtener el titulo de nuestra pagian web

//Como accedemos a elementos de html a traves de JS
//getElementByID().Necesitamos que el html tenga un atributo que se llame id y le pasamos ese nombre

let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

//el método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML,
// utilizando su atributo class como identificación. 
//Se retornará un Array de elementos con todas las coincidencias:
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

//El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

/////Modificaciones de nodos
//La propiedad innerText de un nodo nos permite modificar su nodo de texto. 
//Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.

let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"
console.log( titulo.innerText ) // “Hola Coder!”

//La propiedad innerHtml nos permite acceder al contendio HTML y modificarlo
//Como tambien agregar contenido html creado desde JS
//El id miDiv esta creado en el html
const divJS = document.getElementById("miDiv");

// Modificar el contenido HTML del div
divJS.innerHTML = "<p>Este es un nuevo párrafo.</p>";

//Exite la propiedad className nos permite modificar o agregar codigo css
divJS.className = "container" //--> container puede ser un estilo creado en nuestro archivo css

////////////////CREAR ELEMENTOS/////////////////
//Muchas veces queremos crear elemntos desde JS para optimizar nuestro codigo.
//Para crear elementos utilizamos document.createElement() junto con la etiqueta que creamos
//Luego lo debemos agregar como nodo con el metodo append()

// Crear nodo de tipo Elemento, etiqueta p
let parrafoJS = document.createElement("p");
// Insertar HTML interno
parrafoJS.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafoJS);

/////////ELIMINAR ELEMENTOS////////
//Vamos a eliminar el div que esta creado en el html con el id miDiv
let paisesHTML = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paisesHTML[0].remove();

/////Obtener datos de los inputs
//Muchas veces vamos a querer obtener los que el usuario escriba en un input,textarea,form,etc
//Para eso llamamos al id del input en este caso que el usuario escribe y utilizamos .value

let nombreInput = document.getElementById("nombre").value
let numeroInput = document.getElementById("number").value
//Obtenemos el dato del input y lo guardamos en una variable para usarla mas adelante

///////CREANDO OPCIONES DESDE UN ARRAY
//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}


/////EJEMPLO APLICADO PARA CREAR UN CARRITO DE COMPRA
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3 class="btn btn danger"> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
