import {Tren} from "../Models/Tren.js"

const endpoint_tren = "http://127.0.0.1:8000/tren";

console.log("ingreso_tren")
/*
const request = await fetch(endpoint_estacion);
console.log(request.json())*/

function add_tren(numero_serie,velocidad,asientos){
  let tren = new Tren(numero_serie,velocidad)
  tren.asignar_asientos(asientos)
  fetch(endpoint_tren+"/post", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tren),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export {add_tren};