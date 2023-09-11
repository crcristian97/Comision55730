//Flujo completo de las promesas
//Ejemplo aplicado en la vida real

//Una solicitud a una API o a un servicio (persona del back-end, el path del servicio);

function obtenerInformacionUsuario(){
  //Se va a dedicar a consumir la API o el servicio
  const apiURL = 'http://localhost:5500/After3/JSON/productos.json' //Esto lo da la persona del back-end, el path del servicio
  //const apiURL = 'http://localhost:5500/JSON/productos.json' //No andaba porque le estaba pasando mal la URL de la carpeta
  
  console.log(apiURL);
  debugger
  //Creamos la promesa
  return new Promise((resolve,reject) => {
    //Simular la solicitud a la API o al back utilizando FETCH
    fetch(apiURL)//Palabra clave para el llamado
      .then(response => {
        debugger
        //Creamos nuestra logica
        if(response.status === 200) {
          //Si es exitosa la respuesta, resolvemos con un json
          response.json().then(data =>{
            resolve(data);
          });
        }else {
          reject("No se pudo obtener la infomacion del usuario");
        }
      })
      .catch(err => {
        //Si ocurre algun error en la solicitud
        console.error(err); 
        reject("Error en la solicitud: " + err);
      })
  });
}

obtenerInformacionUsuario()
  .then(data => {
    console.log(data);
    //function en donde se arma las cards
  })
  .catch(err => {
    console.error(err);
    //function para crear un modal que muestre una alerta
    //sweet aler
  });
