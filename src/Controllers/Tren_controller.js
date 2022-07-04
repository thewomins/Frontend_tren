import {Tren} from "../Models/Tren.js"
import {env} from "../Config/env.js"

const endpoint_tren = env.URL_API+"/tren";

console.log("ingreso_tren")
/*
const request = await fetch(endpoint_estacion);
console.log(request.json())*/

async function get_tren(id_tren){
  const request = await fetch(endpoint_tren+"-"+id_tren);
  return request.json()
}

function add_tren(numero_serie,velocidad,asientos){
  let tren = new Tren(numero_serie,velocidad)
  tren.asignar_asientos(asientos)
  fetch(endpoint_tren+"/post", {
    method: 'POST',
    headers: {
      'Authorization':env.TOKEN,
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


function update_tren(numero_serie,velocidad,asientos){
  let tren = new Tren(numero_serie,velocidad)
  tren.asignar_asientos(asientos)
  fetch(endpoint_tren+"/put-"+numero_serie, {
    method: 'PUT',
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

function del_tren(numero_serie){
  fetch(endpoint_tren+"/delete-"+numero_serie, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export {get_tren, add_tren, update_tren, del_tren};