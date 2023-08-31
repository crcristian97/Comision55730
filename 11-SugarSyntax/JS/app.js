//Sugar syntax = refactorizar nuestro codigo con mejores metodos.

//1- el operador ++
//2- El operador TERNARIO.Este viene como alternativa al if..else

//let temperatura = 28

// if (temperatura > 30) {
//   alert("Día caluroso!");
// } else {
//   alert("Día agradable");
// }

//La sintaxis del operador ternario.
// condicion ? caso1 : caso2
// El operador ternario solo tiene 2 condiciones.
let temperatura = 45

temperatura > 30 ? console.log("Dia caloruso!") : console.log("Dia agradable");

//Ejemplo real

const usuario = {
  nombre : "Cristian",
  edad : 22
}

let permiso;

if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}
if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}

//Con el operador ternario quedaria:
const permisoTernario = (usuario.edad >= 18) ? true : false;
//permisoTernario es true porque en el objecto la edad es 22
permisoTernario ? console.log("Compra cerveza") : console.log("No puedes comprar");

// Operador logico and
//Es solo para un if 
//Se cumple si la condicion es verdadera
const carrito = []; //array vacio

if(carrito.length === 0){
  console.log("No hay nada en el carrito");
}

let productoVerdura = "Banana";
//con el operador AND
carrito.length === 0 && carrito.push(productoVerdura);//El operador && se utiliza solo para cuando la condicion es verdadera

//Operador logico or
// operacion1 || operacion2
//Si no es falsy (si es distinto a 0, null, undefined, false, string vacio) el operador || retorna operador1

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

let carritoCompra

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carritoCompra = carritoLocalStorage
} else {
  carritoCompra = []
}

//Usando la simplificacion de codigo, donde  carritoCompra2 es carritoCompra
const carritoCompra2 = JSON.parse(localStorage.getItem('carrito')) || []

//Operador Nullish Coalescing
//Funciona igual que el logico OR pero admite mas valores como verdades.Acepta null y undefined
console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false

// Operador ? funciona para manejar mejor los errores de null o undefined
//Muy parecido al try y catch
const usuarioPlataforma = null

//console.log( usuarioPlataforma.nombre || "El usuario no existe" );
// Error: "No se pueden leer propiedades de NULL "

//console.log( usuarioPlataforma?.nombre || "El usuario no existe");
// "El usuario no existe"


const usuario2 = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado"
  }
}
console.log( usuario2?.cursos?.javascript || "La propiedad no existe")
// "aprobado"

const usuario3 = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    reactJs: "aprobado"
  }
}
console.log( usuario3?.trabajos?.coderhouse || "La propiedad no existe")
//ES PARA MANEJAR MEJOR LOS ERRORES.
//ESTO HACE QUE SI LA PROPIEDAD NO EXISTA EL USUARIO NO LEA "CANNOT READ PROPERTI UNDEFINED".
//SINO QUE LEA La propiedad no existe CON UN MENSAJE MAS AMIGABLE.

//Desestructuracion:
//let nombre = usuario3.nombre; //JON
//let curso = usuario3.cursos; //javascript: "aprobado"
//let edad = usuario3.edad; // 22

//Creamos variables y le asignamos a cada variable la propiedad para no modificar el objecto original es decir su inmutabilidad

//Estructura para desestructurar
//let { prop1, prop2 } = objecto;
//Las prop1 y prop2 tiene que ser EXACTAMENTE IGUAL a las propiedades del objecto
//Como uso esas variables en mi codigo?
//Llamandolas simplemente por su nombre como esta dentro de { }

const usuario4 = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    reactJs: "aprobado"
  },
  password: 123456
}
//Tomamos el dato del input
let newPassword = 7894565

let { nombre, cursos: {reactJs} , edad } = usuario4; // GOOD
let { nombreUsuario, edadObjecto, cursosCoder , password } = usuario4; //BAD
console.log(password);

password = newPassword;

nombre ? console.log("Tu nombr existe") : console.log("Tu nombre no existe");
//Para llamar a la variable de javascript no se usa la propiedad de cursos sino se usa reactJs

//Lo que va dentro de las llaves es el nombre de la PROPIEDAD
//Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined

// ALIAS PARA LA DESESTRUCTURACION
//Sirve para mejorar la sintaxis del codigo y tenerlo legible para futuros programadores

const item = {
  item_id : 439,
  product_name: "Camisa",
  price_per_unit: 600
}

//Es asignar a nuestras variables que son las propiedades del objecto
//Un nuevo nombre
const { item_id: id , product_name: nombreProducto , price_per_unit: precio } = item;

console.log(id);
console.log(nombreProducto);
console.log(precio);

const productoCoder = {
  id: 10,
  nombre: 'Curso Javascript',
  precio: 260000
}
//1 FORMA
const desestructuracion = (item) => {
  //Desestructura dentro del bloque
  //Para que sirve?
  //Muchas veces no vamos a querer desestructurar todo nuestro objecto
  //Le podemos asignar un alias que solo va a permanecer dentro del scope
  //En conclusion: mayor manipulacion de los datos.
  const {id, nombre } = item;
  console.log(id, nombre);
}

desestructuracion(productoCoder);

// 2FORMA para mejora la sintaxis.NO SIEMPRE PERO ES VALIDO.
const camisa = {
  id: 1,
  nombre: 'Outsider',
  precio: 26000,
  talle: 'L'
}

const desestructurar = ( {id, nombre} ) => {

}
desestructurar(camisa);

window.addEventListener('click', ( {x, y, z} ) => {
  console.log(x, y, z);
})


//SPREAD DE ARRAYS
// Para copiar objectos u arrays manteniendo la INMUTABILIDAD
// Que es la inmutabilidad?
// es mantener el valor original sin modificarlo (arrays u objectos);

const nombresAlumnos = ["Carina", "Constanza", "Jonyy", "Santiago"];

//spread array se aplica con los ...
console.log(...nombresAlumnos);

//Beneficios:
//1)Inmutabilidad: Facilita la creacion de datos inmutables.
//2)Sintaxis correcta: Simplifica la forma de codear.
//3)Mayor eficiencia en el codigo.

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombres = [...nombres1, ...nombres2]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// spread del array en un objeto
//Para hacer el spread si o si necesitamos guardarlo en otro objecto
const nombresObj = {
    ...nombres
}

console.log(nombresObj);

const usuario10 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario11 = {
  ...usuario10
}

//console.log(usuario11)

const usuario12 = {
  ...usuario11,
  curso: "ReactJS",
  email: "juan@doe.com"
}
//Sirve tambien para agregar propiedades nuevas a un nuevo objecto
//Si agrego una propiedad que existe en el objecto, se queda el ultimo valor

console.log(usuario12);

//REST PARAMETERS
function suma (a,b){
  return a + b;
}
function sumar (a,b,c){
  return a + b + c;
}
suma(2,6);
sumar(2,6,7);
//Principio DRY,KISS y Patron de disenio
function sumarGeneric (...numeros){
  debugger
  const suma = numeros.reduce((acumular, numero) => {
    return acumular + numero;
  })
  console.log(`La suma es de ${suma}`);
}
sumarGeneric(4,2,3,6,8);

