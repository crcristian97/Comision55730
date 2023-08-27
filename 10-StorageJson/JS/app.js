//El objeto Storage (API de almacenamiento web) permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexión con el servidor.
//De esta manera, cada cliente puede preservar información de la aplicación.

//El ciclo de vida del localStorage tiene 3 funciones
//setItem, getItem y clear or remove
//Se pueden almacenar los distintos tipos de valores el localStorage

//Si quiero enviar datos al localStorage
//Metodo --> localStorage.setItem
//key --> nombre para identificar elemento
//value --> valor/contenido del elemento
localStorage.setItem('bienvenido', 'Hola Coder');
localStorage.setItem('esValido', true);
localStorage.setItem('edad', 18);

//Para obtener los datos utilizamos el getItem, con la key y lo guardmaos en una variable
let mensaje = localStorage.getItem('bienvenido');//--> Hola coder
let esMayor = localStorage.getItem('esValido');//--> true
let edad = localStorage.getItem('edadUser');//--> 18

//Con el session Storage es igual
sessionStorage.setItem('Usuario', 'Cristian');
sessionStorage.setItem('alumno', false);
sessionStorage.setItem('edadUser', 26);

let usuario = sessionStorage.getItem('Usuario');//--> Cristian
let alumno = sessionStorage.getItem('alumno'); //-->false
let edadUsuario = sessionStorage.getItem('edadUser');//--> 26

//Recorrer storage
//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

//Para eliminar los datos
localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información


////////JSON /////////
//Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se almacenan en strings. 
//Ante cualquier otro tipo a guardar, como un número o un objeto, se convierte a cadena de texto automáticamente

// Almacenar objectos sin una transformacion previa
const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]

//JSONes un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript.

//Solucionar el problema de [object Object]
//Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a un JSON

//stringify ->acepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente.
//parse ->recibe un texto JSON como parámetro, y devuelve el objeto JavaScript correspondiente.

//Stringify se utiliza cuando nosotros enviamos un objecto al servidor
const productoJson = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(productoJson);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof productoJson); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ejemploville"
  };
  
  // Convertir el objeto en una cadena JSON
  const personaJSON = JSON.stringify(persona);
  
  console.log("Objeto JavaScript:");
  console.log(persona);
  
  console.log("\nCadena JSON:");
  console.log(personaJSON);
  
// Se guarda {"id":2,"producto":"Arroz"}

//Parse se utiliza cuando recibimos un object Object
// Ahora, vamos a convertir la cadena JSON nuevamente en un objeto JavaScript
const personaParseada = JSON.parse(personaJSON);

console.log("\nObjeto JavaScript después de JSON.parse():");
console.log(personaParseada);

//EJEMPLO APLICADO ALMACENAR UN ARRAY DE OBJECTOS
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));


/////Recuperar datos

//Muchas veces usamos el Storage para recuperar datos relacionados a la última navegación del usuario. 
//Por ejemplo, su última sesión de login o el último estado de su carrito de compras.
//Para esto, pensamos en inicializar las variables de la app consultando el Storage en el momento de inicio.

let usuarioLog;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
    usuarioLog = usuarioEnLS
} else {
    usuarioLog = prompt("Ingrese su nombre de usuario")
}







