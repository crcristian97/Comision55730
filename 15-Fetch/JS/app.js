//Arracamos con nuestro fetch

// function cardData(data){
//   //Armamos la logica para crear la card
//   // appendChild, innerHTML, conectar el id con el archivo.html, temple string, 
// }

// const pokemonID = 1

// const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}` //La da la persona del back

// fetch(apiURL)
//   .then((response) => {
//     debugger
//     if(!response.ok){
//      throw new Error(`Error en la solicitud : ${response.status}`)
//      //pueden crear un modal con el error
//     }
//     return response.json();
//   })
//   .then((data) => {
//     debugger
//     console.log(data.results);
//     cardData(data.results)
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Async / await.SI O SI TIENE QUE ESTAR LAS 2 PALABRAS
// try y catch. SI O SI CUANDO USAMOS TRY USAMOS CATCH
const fetchData = async () => {
  try {
      const res =  await fetch('http://localhost:5500/15-Fetch/JSON/productos.json')
      debugger
      const data =  await res.json()
      debugger
      // console.log(data)
      agregarCards(data)
  } catch (error) {
      console.error (error)
  }
}

fetchData()

const fetchDatas = async () => {
  try {
      const res = await fetch('../Json/productos.json')
      const data = await res.json()
      // console.log(data)
      agregarCards(data)
  } catch (error) {
      console.log (error)
  }
}