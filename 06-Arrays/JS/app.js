//Un Array es un tipo de dato que sirve para almacenar valores en forma de lista. 
//Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas. 

//Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.

//Los elementos del array tienen un índice, que va desde el 0 (el primer elemento del array) hasta el último elemento.

//Para declarar una variable y asignar un array empleamos los corchetes ([ ]) y dentro de ellos definimos todos los valores separados por coma.
//Los arrays en Javascript empiezan siempre en la posición 0. Un array que tenga, por ejemplo, 10 elementos, tendrá posiciones de 0 a  9.

// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const profesores = ["Cristian","Alejandro","Lautaro"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];

//Para acceder a los elementos del array lo hacemos atraves de su posicion
console.log("profesores:", profesores[0]); //--> Cristian.
console.log("profesores:", profesores[1]); //--> Alejandro.
console.log("profesores:", profesores[2]); //--> Lautaro.

//Para recorrer un array utilizamos bucles
const alumnos = ["Constanza", "Martin", "Agustin", "Lujan", "Matias", "Joaquin", "Valentina"];
for (let index = 0; index < 5; index++) {
    //Si quiero que me muestre los primeros 5
    alert(numeros[index]);
    //Ahora si quiero que me muestre todos los alumnos
    //En la parte de index < 5, cambiarla por index.length
}

//Si quiero agregar un elemento al array utilizo el metodo PUSH
let nuevoAlumno = "Adriana"
alumnos.push(nuevoAlumno); //lo agrega al final del elemento
console.log("alumnos metodo push:", alumnos);
let nuevolAlumno2 = "Agustin"
alumnos.unshift(nuevolAlumno2);
console.log("nuevolAlumno2 unsfhit:", nuevolAlumno2)

//para quitar elementos 

const profesoresJS = ["Cristian","Alejandro","Lautaro"];
profesoresJS.shift();//-->elimina el primer elemento
const profesoresComision = ["Cristian","Alejandro","Lautaro"];
profesoresComision.pop();//-->elimina el ultimo elemento

//Splice
//El método splice() permite eliminar uno o varios elementos de un array en cualquier posición.
//Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2);

console.log(nombres);

//Mediante el método join podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro:

const nombresAfter = ["Luis", "Ana", "Julia", "Juan"]

console.log( nombresAfter.join(","));
// Luis, Ana, Julia

console.log( nombresAfter.join("*")); 
// Luis*Ana*Julia

//Concat nos permite agrupar 2 arrays en uno solo
const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas);
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

//El slice te permite obtener elementos especificos dentro de un array
//empezando por el inicio hasta fin (fin no incluído)
const nombresAlum    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombresAlum.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']


//INDEXOF
// Array de alumnos
const alumnosCoder = ["Juan", "María", "Pedro", "Ana", "Sofía"];

// Profesor a buscar
const profesor = "Pedro";

// Usar indexOf para verificar si el profesor está en la lista de alumnos
if (alumnosCoder.indexOf(profesor) !== -1) {
  console.log(`${profesor} es un profesor.`);
} else {
  console.log(`${profesor} no es un profesor.`);
}

//El -1 nos indica que no se encuentra el elemento

//Includes
// Array de ciudades
const ciudades = ["Nueva York", "Los Ángeles", "Chicago", "Miami", "San Francisco"];

// Ciudad a buscar
const ciudadABuscar = "Miami";

// Usar includes para verificar si la ciudad está en la lista
if (ciudades.includes(ciudadABuscar)) {
  console.log(`${ciudadABuscar} está en la lista de ciudades.`);
} else {
  console.log(`${ciudadABuscar} no está en la lista de ciudades.`);
}

/////////EJEMPLO APLICADO PARA CARGAR ALUMNOS //////
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join

//////ARRAY DE OBJECTOS
const productos = [
    {
      id: 1,
      nombre: "Camiseta",
      precio: 19.99,
      categoria: "Ropa",
    },
    {
      id: 2,
      nombre: "Zapatos deportivos",
      precio: 49.99,
      categoria: "Calzado",
    },
    {
      id: 3,
      nombre: "Teléfono móvil",
      precio: 299.99,
      categoria: "Electrónica",
    },
    {
      id: 4,
      nombre: "Libro",
      precio: 12.99,
      categoria: "Libros",
    },
    {
      id: 5,
      nombre: "Bicicleta",
      precio: 299.99,
      categoria: "Deportes",
    },
  ];
