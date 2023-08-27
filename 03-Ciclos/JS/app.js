/* Los ciclos e iteraciones en JavaScript son estructuras de control que se utilizan para repetir un bloque de código varias veces. 
Estas construcciones son fundamentales en la programación, 
ya que permiten automatizar tareas repetitivas y procesar conjuntos de datos de manera eficiente. 
Los ciclos e iteraciones son esenciales para trabajar con arrays, listas, objetos y realizar muchas otras operaciones en la programación. */

/* 1-Ciclo for: El ciclo for se utiliza para ejecutar un bloque de código un número específico de veces. 
Puedes definir el número de iteraciones y la lógica de incremento o decremento en la declaración del ciclo. */

//Lo importante de los ciclos: dentro de () por definicion se dividen en 3 partes
// let i = 0; Inicializacion del ciclo en forma de variable
// i < 5.Condicion que se repite hasta que se completa
// i++. Operador que en este caso hace que se vaya sumando la variable i

for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
  }

//for (desde; hasta; actualizacion);

//2- Ciclo while: El ciclo while ejecuta un bloque de código mientras una condición sea verdadera.
//Se crea una variable fuera del ciclo
//Dentro de () es la condicion que hace que el siglo funcione y se termine
let contador = 0;
while (contador < 5) {
  console.log("Iteración número " + contador);
  contador++;
}

//3- Ciclo do...while: El ciclo do...while es similar al ciclo while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición.
//En este caso la parte del do se hace si o si 
//El bloque del While es la condicion que hace que el ciclo se termine.
//Despues del while podriamos hacer algun algortimo
let numero = 0;
do {
  console.log("Iteración número " + numero);
  numero++;
} while (numero < 5){
    console.log("Van a entrar hasta 5 personas al juego")
}

//4-SWITCH: Esta diseñada para manejar de forma sencilla multiples condiciones
//Se utiliza mucho para reemplazar por el if

const numeroFila = 3;

if (numeroFila === 1) {
  console.log("El número es uno.");
} else if (numeroFila === 2) {
  console.log("El número es dos.");
} else if (numeroFila === 3) {
  console.log("El número es tres.");
} else {
  console.log("El número no es uno, dos ni tres.");
}

//El anterior ejemplo es de un if , ahora si lo queremos reemplazar a switch sera:
switch (numeroFila) {
    case 1:
      console.log("El número es uno.");
      break;
    case 2:
      console.log("El número es dos.");
      break;
    case 3:
      console.log("El número es tres.");
      break;
    default:
      console.log("El número no es uno, dos ni tres.");
      break;
  }
//La palabra reservada case, son los casos que pueden llegar a ocurrir en la condicion
//Utilzamos la palabra break para darle un fin al switch
//El default funciona como el else en el ciclo If.
//Importante en la estructura switch: case, break, default
