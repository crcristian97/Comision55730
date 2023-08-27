//Objectos:os objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
//Podemos decir que un objeto es una colección de datos relacionados como una entidad. 
//Se componen de un listado de pares clave-valor, es decir, contienen propiedades y valores agrupados.

/////ANTES/////
let nombre = "Homero";
let apellido = "Simpson"
let edad = 39

///AHORA///
//Los objetos se crean para optimizar codigo y resumir datos en una solo cadena de memoria
const person1 = {nombre: "Homero" , edad: 39, apellido: "Simpson"};

//Se inicializan como una variable y tiene propiedades 
//El dato de la variable se abre con { }
//Se separan con , y luego la propiedad con su valor
//Puede tomar multiples tipos de datos 

const person2 = {nombre: "Cristian", profesor: true, curso: 57730};

//Para obtener los valores de la propiedad se hace llamando a la variable con el .
console.log(person2.curso); //--> 57730
console.log(person2.nombre); //--> Cristian
console.log(person2.profesor);//--> true

//Otra forma de obtener el valor de una propiedad en un objeto utilizamos la notación corchetes ([]): El nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad:

console.log(person1["nombre"]);//-->Homero
console.log(person1["edad"]);//-->39
console.log(person1["apellido"]);//-->Simpson

//Obtener los valores de las propiedades y reasignarlas
person1["nombre"] = "Marge";
person1["edad"] = 27;


//Constructores
//el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.
//Con esta “función constructora” podemos inicializar las propiedades del objeto al momento de ser instanciado con new.
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//Creamos nuestro constructor que se llama Persona, nos da el formato del objecto 
//Para crear el objecto, se usa una const para asignarla y la palabra reservada new (nombre del constructor)
//Luego se le pasa parametros para que de por finalizado la creacion del objecto
//La palabra this hace referencia al elemento actual en el que se esta escribiendo el codigo
//This es muy útil para asegurar que se emplean las propiedades del objeto actual.

//METODOS EN OBJETOS
let cadena = "Hola Coders";
//Propiedad del objecto String: Largo de la cadena.
console.log("cadena.length:", cadena.length) //--> 11
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());//--> hola coders
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());//--> HOLA CODERS


function PersonaObj(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const personaObj = new PersonaObj("Homero", 39, "Av. Siempreviva 742");
const personaObj2 = new PersonaObj("Marge", 36, "Av. Siempreviva 742");
personaObj.hablar();
personaObj2.hablar();

//En este caso llamo a la funcion que hay dentro del objecto para que haga el saludo
//Si tenemos un objecto que crea productos.Podriamos meter una funcion para sumar el iva del producto


//OPERADOR IN y FOR..IN
//El operador in devuelve true si la propiedad especificada existe en el objeto. 
//Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in personaObj);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in personaObj);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in personaObj) {
    console.log(personaObj[propiedad]);
}

//Clases
//Las clases de JavaScript, introducidas en ES6, proveen una sintaxis mucho más clara y simple para crear objetos personalizados.
//Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. 
/* ANTES
function PersonaObj(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
} */

//AHORA
class PersonaObj{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}


//Esto nos va a permitir empezar armar nuestra estructura del carrito de compra