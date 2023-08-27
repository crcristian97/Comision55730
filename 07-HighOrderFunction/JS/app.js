/* Abstraccion
se refiere a la idea de representar elementos o conceptos complejos de una manera simplificada, 
enfocándose solo en los detalles esenciales necesarios para cumplir un objetivo particular.
 La abstracción ayuda a manejar la complejidad al ocultar detalles innecesarios y permite a los programadores trabajar con conceptos de alto nivel. */

// Función de suma que abstrae los detalles de la operación
function suma(a, b) {
    return a + b;
}
  
// Función de resta que abstrae los detalles de la operación
function resta(a, b) {
    return a - b;
}
  
// Usando las funciones de suma y resta de manera abstracta
const resultadoSuma = suma(5, 3); // La abstracción nos permite pensar en términos de suma
const resultadoResta = resta(10, 4); // La abstracción nos permite pensar en términos de resta

//Funciones de orden superior:
//Son aquellas que retornan una funcion, o recibe una funcion como parametro
//Se pueden aplicar a vario metodos de JS, pero en donde mas se aplican son en los arrays
//map: La función map toma una función como argumento y aplica esa función a cada elemento de un array, devolviendo un nuevo array con los resultados.

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25]
//filter: La función filter toma una función que define un criterio de filtro y devuelve un nuevo array con los elementos que cumplen ese criterio.

const numerosFiltrar = [1, 2, 3, 4, 5];
const pares = numerosFiltrar.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Resultado: [2, 4]
//reduce: La función reduce toma una función que combina elementos de un array en un solo valor acumulado.

const numerosReduce = [1, 2, 3, 4, 5];
const suma = numerosReduce.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // Resultado: 15

//forEach: Aunque no devuelve un valor, forEach toma una función y la aplica a cada elemento de un array.

const frutas = ["manzana", "banana", "naranja"];
frutas.forEach(function(fruta) {
  console.log(fruta);
});
// Resultado:
// manzana
// banana
// naranja

//El método find() recibe una función de comparación por parámetro.
//Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. 
//El método retorna el primer elemento que cumpla con esa condición:

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Desarrollo web', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

//Some metodo muy parecido al find pero retorna true o false
console.log( cursos.some((el) => el.nombre == "Desarrollo Web"))//true
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) //False


//////////////////////EJEMPLO

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]


//Objectos nativos
//Math
//Javascript provee el objeto Math que funciona como un contenedor de herramientas y métodos para realizar operaciones matemáticas.

const numerosDeArray = [10, 5, 8, 2, 20];
const minimo = Math.min(...numerosDeArray);

console.log("El valor mínimo es:", minimo); // Resultado: 2

const maximo = Math.max(...numerosDeArray);
console.log("El valor  maximo:", maximo); // Resultado: 20

/////EJEMPLO EN VIDA REAL//////
//Imaginate si un gerente quiere encontrar un candidato para un puesto laboral
//Puntajes de los candidatos en la prueba escrita
const puntajesEscritos = [85, 92, 78, 88, 95];

// Puntajes de los candidatos en la entrevista
const puntajesEntrevista = [70, 88, 95, 82, 75];

// Encontrar al candidato con el puntaje más alto en la prueba escrita
const maximoEscrito = Math.max(...puntajesEscritos);

// Encontrar al candidato con el puntaje más alto en la entrevista
const maximoEntrevista = Math.max(...puntajesEntrevista);

// Encontrar al candidato con el puntaje más bajo en la prueba escrita
const minimoEscrito = Math.min(...puntajesEscritos);

// Encontrar al candidato con el puntaje más bajo en la entrevista
const minimoEntrevista = Math.min(...puntajesEntrevista);


//Math floor,round y ceil
//Supongamos que estás planificando un evento en una sala de conferencias
//necesitas calcular cuántas sillas puedes acomodar en función del espacio disponible 
//la capacidad máxima permitida por regulaciones de seguridad. 
//Tu sala de conferencias tiene una longitud de 12.5 metros y cada silla ocupa 0.75 metros
const longitudSala = 12.5; // Longitud de la sala en metros
const anchoSilla = 0.75;   // Ancho de una silla en metros

// Calcula la cantidad máxima de sillas que puedes acomodar usando Math.floor()
const cantidadSillas = Math.floor(longitudSala / anchoSilla);
//se usa para calcular la cantidad máxima de sillas que puedes acomodar sin exceder la longitud de la sala. 
//Esto redondea hacia abajo, asegurando que no excedas la capacidad máxima de la sala.

console.log("Cantidad máxima de sillas (usando Math.floor()):", cantidadSillas);

// Redondea la cantidad máxima de sillas usando Math.round()
const cantidadSillasRedondeada = Math.round(longitudSala / anchoSilla);
console.log("Cantidad máxima de sillas (usando Math.round()):", cantidadSillasRedondeada);
//e utiliza para redondear la cantidad máxima de sillas de manera más precisa. Esto se hace para que aproveches al máximo el espacio disponible,
//incluso si eso significa acomodar un número fraccional de sillas.


// Calcula la cantidad mínima de sillas que puedes acomodar usando Math.ceil()
const cantidadSillasMinima = Math.ceil(longitudSala / anchoSilla);
//se utiliza para calcular la cantidad mínima de sillas que necesitas para cumplir

console.log("Cantidad mínima de sillas (usando Math.ceil()):", cantidadSillasMinima);

//Math.random
//Desarollamos un juego de mesa y necesitamos generar un numero aleatorio entre 1 y 6
// Simula el lanzamiento de un dado de seis caras
function lanzarDado() {
  // Genera un número aleatorio entre 0 (incluido) y 1 (excluido)
  const numeroAleatorio = Math.random();

  // Escala el número aleatorio al rango de 1 a 6
  const resultadoLanzamiento = Math.floor(numeroAleatorio * 6) + 1;

  return resultadoLanzamiento;
}

// Realiza un lanzamiento de dado y muestra el resultado
const resultadoFinal = lanzarDado();
console.log("Resultado del lanzamiento de dado:", resultadoFinal);

/////Metodo DATE
//Instanciar un objeto Date nos genera la fecha y tiempo actual.
console.log( new Date() ) //Tendriamos la fecha y hora exacta(Se va actualizando dia a dia)

//Calcula la fecha de una persona
// Fecha de nacimiento del usuario (año, mes, día)
const fechaNacimiento = new Date(1997, 5, 15); // 15 de junio de 1997

// Fecha actual
const fechaActual = new Date();

// Calcula la edad
const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

// Verifica si aún no se ha celebrado el cumpleaños de este año
if (
  fechaActual.getMonth() < fechaNacimiento.getMonth() ||
  (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
    fechaActual.getDate() < fechaNacimiento.getDate())
) {
  edad--;
}

console.log("Edad del usuario:", edad);

//Creamos un objeto Date llamado fechaNacimiento que representa la fecha de nacimiento del usuario (15 de junio de 1990, en este caso).

//Luego, creamos otro objeto Date llamado fechaActual que representa la fecha actual.

//Calculamos la edad restando el año de nacimiento del año actual usando getFullYear().

//Comprobamos si aún no se ha celebrado el cumpleaños de este año verificando si el mes actual es menor al mes de nacimiento o si es el mismo mes pero el día actual es menor al día de nacimiento. Si es así, restamos 1 a la edad, ya que aún no ha cumplido años este año.

/////EJEMPLO PARA MODIFICAR LAS FECHAS DE UN FORMATO X A OTRO FORMATO

const fechaOriginal = "12/25/2022"; // Formato: MM/DD/YYYY

// Dividir la fecha en partes (mes, día y año)
const partesFecha = fechaOriginal.split("/");
const mes = parseInt(partesFecha[0]); // Convertir a número
const dia = parseInt(partesFecha[1]); // Convertir a número
const anio = parseInt(partesFecha[2]); // Convertir a número

// Crear un objeto Date con día, mes y año
const fechaNueva = new Date(anio, mes - 1, dia);

// Obtener la nueva fecha en el formato deseado (DD/MM/YYYY)
const diaNuevo = fechaNueva.getDate();
const mesNuevo = fechaNueva.getMonth() + 1; // Sumar 1 porque los meses en Date son 0-indexados
const anioNuevo = fechaNueva.getFullYear();

// Formatear la nueva fecha como DD/MM/YYYY
const fechaFormateada = `${diaNuevo}/${mesNuevo}/${anioNuevo}`;

console.log("Fecha original:", fechaOriginal);
console.log("Fecha modificada:", fechaFormateada);

