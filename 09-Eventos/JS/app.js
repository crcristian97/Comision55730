//Evento son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
//JS permite asignar una funcion a cada uno de los eventos.Recibe el nombre de event handlers
//Cuando escuchamos el evento, se ejecuta la funcion que la denominamos event listener



///////////Como definimos  eventos
// Opcion 1 
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
 console.log("Respuesta evento");
}
//Al evento le pasamos una funcion y luego llamamos a esa funcion

// Opcion 2 
boton.onclick = () =>{console.log("Respuesta 2")} //En forma de arrow function



//Eventos mas comunes
//Evento con el mouse
let botonC = document.getElementById("btnMain")
botonC.onclick = () => {console.log("Click")}
botonC.onmousemove = () => {console.log("Move")}

//Eventos con el teclado
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => {console.log("keyUp")}
input2.onkeydown = () => {console.log("keyDown")}

//keydown: Cuando se presiona.
//keyup: Cuando se suelta una tecla.

//Eventos onchange se activa cuando se detecta un cambio en el valor del elemento
//Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

//Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input
input1.addEventListener("input", () => {
    console.log(input1.value)
})


// Obtener el formulario y el campo de entrada
const formulario = document.getElementById('miFormulario');
const campoTexto = document.getElementById('texto');

// Agregar un evento para manejar la presentación del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el valor del campo de entrada
    const textoIngresado = campoTexto.value;

    // Mostrar el valor en la consola
    console.log('Texto ingresado: ' + textoIngresado);
});