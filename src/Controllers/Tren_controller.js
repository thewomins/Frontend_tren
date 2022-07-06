import {Tren} from "../Models/Tren.js"
import {env} from "../Config/env.js"

const endpoint_tren = env.URL_API+"/tren";
console.log("ingreso_tren")
let TOKEN=sessionStorage.getItem("token")
console.log(TOKEN)

/*
const request = await fetch(endpoint_estacion);
console.log(request.json())*/

async function get_tren(id_tren){
  const request = await fetch(endpoint_tren+"-"+id_tren);
  return request.json()
}

async function add_tren(numero_serie,velocidad,asientos){
  let tren = new Tren(numero_serie,velocidad)
  tren.asignar_asientos(asientos)
  let request = await fetch(endpoint_tren+"/post", {
    method: 'POST',
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tren),
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return request
}


async function update_tren(numero_serie,velocidad,asientos){
  let tren = new Tren(numero_serie,velocidad)
  tren.asignar_asientos(asientos)
  let request = await fetch(endpoint_tren+"/put-"+numero_serie, {
    method: 'PUT',
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tren),
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return request
}

async function del_tren(numero_serie){
  let request = await fetch(endpoint_tren+"/delete-"+numero_serie, {
    method: 'DELETE',
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return request
}

export {get_tren, add_tren, update_tren, del_tren};