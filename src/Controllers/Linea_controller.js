import {Linea} from "../Models/Linea.js"
import {env} from "../Config/env.js"

const endpoint_linea = env.URL_API+"/linea";
let TOKEN=sessionStorage.getItem("token")
console.log(TOKEN)

console.log("ingreso_linea")

async function get_linea_by_estacion(nombre_estacion){
  let request = await fetch(endpoint_linea+"/where-estacion-"+nombre_estacion);
  return request.json()
}

async function add_linea(nombre_linea,estaciones_list,horarios_list){
  let linea = new Linea(nombre_linea,estaciones_list,horarios_list)
  console.log(JSON.stringify(linea))
  let request = await fetch(endpoint_linea+"/post", {
    method: 'POST', 
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(linea),
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return request
}

async function update_linea(nombre_linea,estaciones_list,horarios_list){
  let linea = new Linea(nombre_linea,estaciones_list,horarios_list)
  console.log(JSON.stringify(linea))
  let request = await fetch(endpoint_linea+"/put-"+nombre_linea, {
    method: 'PUT', 
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(linea),
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return request
}

async function delete_linea(nombre_linea){
  let request = await fetch(endpoint_linea+"/delete-"+nombre_linea, {
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

export {get_linea_by_estacion, add_linea, update_linea, delete_linea};