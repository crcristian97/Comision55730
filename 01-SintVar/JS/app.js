//Esta es la 2da forma y la mas recomendada
//ya que tenemos que ser ordenados y en proyectos grandes
//tener nuestros archivos separados nos hacen ser mejor programador y mas ordeneados
//PROGRAMAMOS PARA OTROS PROGRAMADORES

//Cuando creamos script tenemos que CREAR una carpeta JS para nuestro archivos JS 
//(importante ser ordenados)


//Comentar codigo: 2 formas

//let profesor = 'Cristian'; --> Poniendo adelante // de lo que queremos comentar

/* let profesor = 'Cristian';
let comision = 55730; 
Al inicio de lo que queremos comentar y al final.Cuando queremos comentar muchas cosas */

//PALABRAS RESERVADAS

//Las palabras reservadas en JavaScript son palabras clave que tienen un significado especial 
//y un uso específico en el lenguaje.
//Estas palabras están reservadas para realizar tareas específicas
//y no pueden ser utilizadas como identificadores (nombres de variables, funciones, clases, etc.)
/* 
break: Utilizada para salir de bucles (for, while, switch, etc.).
case: Parte de una declaración switch que se ejecuta cuando se cumple una condición específica.
catch: Utilizada en bloques try...catch para manejar excepciones.
class: Utilizada para definir una clase en ECMAScript 6 y posteriores para crear objetos.
const: Utilizada para declarar constantes cuyos valores no deben reasignarse después de la inicialización.
continue: Utilizada para saltar a la siguiente iteración de un bucle.
debugger: Utilizada para detener la ejecución del código y depurar. 
*/

//¿Que es una variable?
//Es un espacio reservado en la memoria y puede cambiar a lo largo de la ejecucion del programa
//Almacenamos distintos tipos de datos en las variables

var nombre = 'Cristian'; //--> ES5.
let apellido = 'Cabrera' // --> ES6. 
const CURSO = 'Javacript' // --> ES6.

//En proyectos "viejos" se ven las variables var, pero hoy en dia NO SE USA NUNCA MAS
/* ¿Que significa declarar variable?
Significa crearla.Para esto usamos las palabras reservada VAR, LET, CONST */

//¿Que tipo de valores tiene la variables?
let edad = 26; //--> Number
console.log(typeof edad); //Number

let bar = 'Tegua'; //--> String, se declaran con comillas simples o dobles.
let bar2 = "Patagonia";//--> Depende del proyecto y del programador pero es lo mismo las comillas
console.log(typeof bar); //String

let esMayorEdad = true; //--> Booleano.Son valores TRUE o FALSE
console.log(typeof esMayorEdad); //boolean

let colores = ["rojo", "verde", "azul"]; //-->Puedes almacenar múltiples valores en una variable en forma de un arreglo
console.log(typeof colores); // "object".Dado que los arreglos son objetos en sí mismos, el operador typeof informa que son del tipo "object".

let miFuncion = function() {
    console.log("Esta es una función almacenada en una variable.");
};

let resultado = null; //--> Valores nullos.Representa la ausencia intencionada de cualquier valor o objeto. 
console.log(typeof resultado); //--> "object"

let x; //--> Valores undefined. Indica que una variable ha sido declarada pero no se le ha asignado ningún valor

//Valores especiales: JavaScript también tiene valores especiales como NaN (Not-a-Number) para representar resultados no numéricos, Infinity y -Infinity para representar valores infinitos, y -0 para representar el cero negativo.

//Declaramos.
let cafe;
let jugoNaranja;
//Asignamos.Podemos asignar mediante =
cafe = 'Lagrima';
jugoNaranja = true;
//Variables inicializadas
let medialunas = true;

//IMPORTANTE LET Y CONST
//Tienen controles adicionales para las variables.
//Impiden que se puedan crear 2 variables con el mismo nombre.
//let puede recibir multiples asignacion en el transcurso de la app
//const recibe una unica asignacion al momento de su declaracion impidiendo que se modifique
let edadHijo = 17;
edadHijo = 18;

const iva = 0.21;
//no es posible cambiarlo
iva = 0.23;


//OPERACIONES BASICAS con valores Number
let numeroA = 7;
let numeroB = 9;
const numero3 = 3;

//Suma de 2 numeros
let resultadoSuma = numeroA + numeroB;
console.log("resultadoSuma:", resultadoSuma);
//Creamos una nueva variable para el resultado ya que la podemos usar en otro momento
let resultadoResta = numeroB - numeroA;
console.log(" resultadoResta:", resultadoResta);
let resultadoProducto = numeroB * numero3;
console.log("resultadoProducto:", resultadoProducto);

//OPERACIONES BASICAS con valores string
let nombreUsuario = "Cristian";
let apellidoUsuario = "Cabrera";
const espacioBlanco = " ";
//Concatenar significa UNIR
let perfilUsuario = nombreUsuario + apellidoUsuario //"CristianCabrera"
let perfilUsuario2 = nombreUsuario + espacioBlanco + apellidoUsuario //"Cristian Cabrera"

//PROMPT
//Esta sentencia muestra un cuadro de dialogo para que el usuario ingrese un dato
//Se puede poner un texto que se coloca sobre el campo de texto
let nombreIngresado = prompt('Me podrias decir tu nombre');

//CONSOLE.LOG
//Muestra el valor de la variable, esto es SOLO para el desarrollador
//Sirve para tener mas control sobre nuestro codigo
console.log(nombreIngresado);

//ALERT
//Nos muestra un cuadro de dialogo que estemo accediendo mostrando un mensaje
alert('Sos mayor?');
alert('Bienvenido', nombreIngresado);