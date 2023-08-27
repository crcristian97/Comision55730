//Conjunto de instrucciones que se agrupan para realizar una tarea concreta
//Lo bueno de las funciones es que se pueden reutilizar en nuestro codigo
/* Ventajas:
-Evita instrucciones duplicadas.PRINCIPIO DRY
-Soluciona un problema complejo usando tareas sencillas.PRINCIPIO KISS
-Focaliza tareas prioritarias para el programa.PRINCIPIO YAGNI
-Aporta ordenamiento y entendimiento
-Aporta facilidad y rapidez para hacer modificaciones */


//Las funciones hay que declarar y SI O SI hay que llamarlas
//Si las declaramos y no las llamamos la funcion no se utiliza

//Declaracion
//Se declara con la palabra reservada function.Empieza minuscula y sin espacios, luego parentesis
//El contendio de la funcion se escribe entre llaves

function saludar(){
    console.log("Hola estudiantes");
}

function Saludar(){
    console.log("Hola a todos");
} //Esta forma esta mal, no hay que llamar al nombre de la funcion con Mayuscula

//Luego de declararla, para empezar a usarla hay que llamarla con su nombre y parentesis
saludar();

//Las funciones la podemos usar en ciclos, if , switch y en cualquier parte del codigo simplemente llamandola

//Ejemplo practico
//Solicitar un nombre de usuario para mostrarlo en un alert

///////////ANTES/////////////////
let nombreIngresado = prompt("Decime tu nombre");
alert("Buen dia", nombreIngresado);

//Si queremos hacerlo 2 veces haciamos esto:
nombreIngresado = prompt("Decime tu nombre");
alert("Buen dia", nombreIngresado);
nombreIngresado = prompt("Decime tu nombre");
alert("Buen dia", nombreIngresado);

//////////AHORA CON FUNCIONES//////////////
function saludarUsuario(){
    let usuario = prompt("Decime tu nombre");
    alert("Hola", usuario);
}

saludarUsuario();
saludarUsuario();//Si lo queremos hacer 2 veces solo hay que llamar a la funcion


//Parametros:
//En funciones simples a veces no necesitamos datos de afuera
//Pero a medida que el proyecto crece, necesitamos pasarle informacion a nuestra funcion
//Cuando enviamos a la función uno o más valores para ser empleados en sus operaciones, estamos hablando de los parámetros de la función.
//Los parámetros se envían a la función mediante variables y se colocan entre los paréntesis posteriores al nombre de la función.

//Los parametros son variables que se declaran dentro de la funcion
//Pueden recibir cualquier nombre.Pero tiene que ser acorde a la sintaxys de la funcion
//Puede haber muchos parametros o 1 solo
//Los parametros reciben las variables en orden que se le envian
function conParametros(parametro1,parametro2){
    console.log(parametro1, "" , parametro2)
}

//El valor que recibe la funcion se declaran en el llamado
conParametros("Hola", "Coder");

//Ejemplo para sumar con una funcion:
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);

//Calculadora, combinando otros metodos
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

//Scope
//El scope es el alcance que tiene la variable una vez que la declaramos
//Exiten 2 scope. Glocal y local
//Si una variable se declara fuera de cualquier función o bloque, 
//automáticamente se transforma en variable global.


//////SCOPE GLOBAL////////
let resultadoSuma = 0 //--> Scope global
function sumar(primerNumero, segundoNumero) {
    resultadoSuma = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
//la variable resultadoSuma se puede usar en cualquier parte de nuestro codigo
console.log(resultadoSuma);


//////SCOPE LOCAL////////
//Cuando definimos una variable dentro de una función o bloque es una variable local,
//y será accesible sólo dentro de ese espacio. 
//Si queremos utilizarla por fuera, la variable no existirá para JS.

function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado); //--> Retorna resultado is not defined.Ya que esta definido dentro de un scope local

/////EJEMPLO////
let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”


//Funciones anonimas --> ES6
//Una función anónima es una función que se define sin nombre y se utiliza para ser pasada como parámetro o asignada a una variable.
// En el caso de asignarla a una variable, pueden llamar usando el identificador de la variable declarada.
//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )

//Funciones Flecha --> ES6
//Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada. 
//Están disponibles desde la versión ES6 de JavaScript, no usan la palabra function pero usa => (flecha) entre los parámetros y el bloque.

const sumaFlecha  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const restaFlecha = (a, b) =>  a - b ;
console.log( sumaFlecha(15,20) );
console.log( restaFlecha(20,5) );















