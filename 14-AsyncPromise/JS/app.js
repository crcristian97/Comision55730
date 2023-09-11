//Programacion sincronica y asincronica
//Sincronica: funciona de manera linea ---> lee linea x linea
//Asincronica: funciona de manera que puedas hacer multiples tareas
//IMPORTANTE: NOSOTROS LE DECIMOS A JS QUE MODELO QUIERO

//setTimeout:
//Recibe 2 parametros ---> SI O SI es una funcion y el tiempo

//setTimeout(fn,timer); fn--> funcion, timer ---> tiempo

setTimeout(() => {
  console.log("Proceso asincronico");
  //Aca aplican toda la logica
}, 3000);

//Ejemplo
//Si quiero renderizar 2 componente al mismo tiempo uso el setTimeout

//En que orden se muestra estos console.log
console.log("Inicia proceso");

setTimeout(()=> {
    console.log("Mitad de proceso");
     //Aca aplican toda la logica
}, 2000);


console.log("Fin proceso");

//Al funcionar de manera asincronica, hace que la tarea corra sin importar el orden.
//En JS se puede tener modelos sincronicos y asincronicos al mismo tiempo.

//FORMA SINCRONICA SETTIMEOUT

//forma sincronica
for (let letra of "hola") {
  console.log(letra)
}

for (let letra of "mundo") {
  console.log(letra)
}

//forma sincronica con asincronismo (settimeout)
for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
}

//setInterval.Que diferencia hay con el settimeout? 
//sintaxys ====
// 2 parametros ---> function y timer

setTimeout(()=> {
  console.log("Mitad de proceso");
   //Aca aplican toda la logica
}, 2000);

setInterval(() => {
  console.log("Tic")
  //Esto se ejecuta cada x tiempo
}, 1000);

//Como detengo los intervalos?
//con clearInterval y haciendo referencia a la variable que va a estar en setInterval
//IMPORTANTE: Cerrar el ciclo de vida de los intervalos
//si quieren usar el clearInterval SI O SI el setInterval en una variable;
let counter = 0;

const interval = setInterval(() => {
    counter++ // sugar sintax
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval) //Buena practica usar el clearInterval
        console.log("Se removió el intervalo");
    }
}, 1000);

//Lo mismo con el setTimeout
//DECLARAMOS UNA CONST. porque declaramos la const?
//porque hay que hacer referencia al metodo clearTimeout

console.log("Inicio");

 const fin = setTimeout(()=> {
  console.log("Segundo proceso");
}, 3000);

clearTimeout(fin); //--> Le pasamos la variable
console.log("Tercer proceso");

//PROMESAS ///
//Las promesas son objectos ---> APIS, servicios creados por el back-end
//acciones asincronica, produce valores (objectos) y nos notifica el estado
//Que estados vamos a buscar ? fulfilled ---> completo / aceptado
//Cuerpo de la promesa

new Promise( (resolve, reject) => {
  //cuerpo de la promesa
})

//En un principio el estado SIEMPRE va a ser pending
//Adentro return 
// La promese se guarda en una CONST

const eventoFuturo = (res) => {
  //si o si nos retorna la promesa
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if(res === true){
      //Queremos que cuando sea true la promesa sea resuelta
      resolve("Promesa ready");
    }else {
      //Queremos que cuando sea false la promesa sea rechazada
      reject("Promesa not ready");
      //Pueden crear funciones, ciclos, switch 
      //de acuerdo a lo que USTEDES o el SISTEMA precisa
      //popUpRechazo();
    }
  });
}
function popUpRechazo() {
  //creo un modal que diga "No podes ingresar al curso";
}
//IMPORTANTE:
//Nosotros manejas el rechazo o el resolve con los metodos de : reject (rechazo) y resolve(resuelta)
//console.log(eventoFuturo(false));
//console.log(eventoFuturo(true));

//then y catch
//Sirve para menejar las respuestas del lado del promagrador
// catch te permite una mejor experiencia de usuario a la hora de una promesa rechaza
// porque se puede romper las promesas?
// Problema del servicio, problema del servidor, problema con datos del back

eventoFuturo(true)
  .then( (response ) =>{
    console.log(response); // Promesa resuelta
    //aca puedne crear las card del carrito de compra
     cardCarritoCompra(response)
  })
  .catch( (error) =>{
    console.error(error);
  })
  .finally( () =>{
    //finally se corre si o si
    console.log("Proceso terminado")
  }) 
eventoFuturo(false)
  .then( (response ) =>{
    console.log(response);
  })
  .catch( (error) =>{
    console.error(error); //Promesa not ready
  })
  .finally( () =>{
  //finally se corre si o si
  })  

function cardCarritoCompra(product) {
  //aca crean sus productos
}
//utilizacion de then y catch .SI O SI
//En base a la promesa nosotros vamos a crear funciones



