//Condicionales 
//hablamos de una estructura sintactica que sirve para tomar una decision apartir de una condicion

//si (condicion) entonces (operacion)

//Todas las instrucciones se ejecutan en linea recta, una sentencia despues otra
//El control de flujo indica que en ciertos puntos nuestro codigo va a tomar distintos caminos

//Para generar estos controles tenemos que tener en cuenta los valores booleanos.True,False
//Para que nuestro programa tome un camino le vamos a decir que resuelva alguna evaluacion/comparacion
//Si es true toma un camino, si es false toma otro camino.

//Estructura IF

if(true){
    console.log("ves este mensaje");
}

/* La estructura if se forma por una condicion ("aca va a estar nuestra condicion")
si esa condicion es true se ejecuta todas las instrucciones dentro del {}.
Si es false, no estra dentro del {} y nuestro programa sigue tranquilamente */

let llueve = true;

if(llueve){
    console.log("Lleva paragua");
}

//2 Ejemplo
//Suponemos que ahora tenemos una variable clima y de acuerdo a ese valor quiero hacer algo

let clima = "Soleado";

if(clima === "Soleado"){
    //como el dato de la variable es "Soleado" la condicion es true y entra al console.log
    console.log("Lleva lentes de sol que quedan facha");
} 

if(clima === "Llovizna"){
    //como el dato de la variable es "Soleado" la condicion es false y no entra console.log
    console.log("lleva paragua");
}
//Utilizamos un operador de comparacion ==. Donde lee toda la sentencia y valida si es TRUE o FALSE el resultado
//En el caso anterior valida si la condicion es true o false
//En otras palabras esta comparando el valor de la variable

//Generalmente las condiciones que tenemos que realizar no son del tipo:
//<<Si se cumple la condicion, hazlo; si no se cumple no hagas nada
//Normalmente son: <<Si se cumple la conidicon, hazlo; si no se cumple, haz esto otro

if(clima === "Soleado"){
    console.log("Podrias llevar malla");
}else {
    console.log("No te recomiendo llevar malla");
}
//Agregamos la palabra reservada else junto con {}
//Condiciones anidadas.
if(clima === "Soleado"){
    console.log("Lleva musculosa");
}else if(clima === "Llueve"){
    console.log("Lleva paragua");
}else if(clima === "Humedo"){
    console.log("Cuidado con el pelo");
}else{
    console.log("No tengo informacion para darte");
}

//Operadores Logicos que ayudan a generar mejores condiciones
// ==.Es igual.a == b
// ===.Es estrictamente igual. a === b
// !=.Es distinto. a != b
// !==.Es estrictamente distinto. a !== b
// < , <=, >, >=. Menor, Menor o igual, Mayor , Mayor o igual
// &&. Operador and (y). a && b
// ||. Operador or (o). a || b
// !. Operador not (no). !a

let esMayor = 18;
let dni = "si";

if(esMayor >= 18 && dni === "si"){
    console.log("Podes pasar");
}else {
    console.log("Necesito esos datos para corrobar")
}

if(esMayor >= 18 || dni === "no"){
    console.log("Podes entrar pero no comprar alcohol");
}else {
    console.log("Necesito esos datos para corrobar");
}




