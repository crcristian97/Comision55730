const button = document.getElementById('btnPrimary');


//sweet alert
// button.addEventListener('click', function (e){
//   e.preventDefault();
//   Swal.fire({
//     title: 'Estas seguro de agregar este producto?',
//     text: "No hay vuelta atras!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Producto agregado!',
//       )
//     }
//   })
// });
debugger
//Toastify
button.addEventListener('click', function (e){
  let zapatilla = 'remera';
  let producto = `Agregaste ${zapatilla}`;
  e.preventDefault();
    Toastify({
      text: producto,
      duration: 3000,
      gravity: "top",
      position : "center",
      className: "btnDanger", //Deberia crear en un archivo css la propiedad btnDanger
      destination: 'https://www.coderhouse.com' // Redireccionamiento a la url especifica
  }).showToast();
});

//Esta es la forma para llamar a las fechas en Javascript Nativo
const dateTimeNative = new Date();
console.log(dateTimeNative);


//Esta es la forma para llamar a las fechas en luxon
// const dateTimeLuxon = luxon.DateTime;
// const dt = dateTimeLuxon.local(2022, 1, 25, 12, 10);
// console.log(dt);

//Crear una funcion global de las fechas y la utilizan en todo su codigo cuando vean fechas
// (Fechas en objectos, Fechas en arrays);

function formatDate (date){
//Crear la logica de la fecha para que les devuelva 
// formato: "01/09/2023"
// formato: "09-01-2023"
//puede usar el .join(" "), concat(), split(), ordenar los arrays en variables
//el return tiene que ser la variable con al forma del formato previo (linea 55 o 56);
}