import {Linea} from "../Models/Linea.js"
import {env} from "../Config/env.js"

const endpoint_linea = env.URL_API+"/linea";


console.log("ingreso_linea")

async function get_linea_by_estacion(nombre_estacion){
  let request = await fetch(endpoint_linea+"/where-estacion-"+nombre_estacion);
  return request.json()
}

function add_linea(nombre_linea,estaciones_list,horarios_list){
  let linea = new Linea(nombre_linea,estaciones_list,horarios_list)
  console.log(JSON.stringify(linea))
  fetch(endpoint_linea+"/post", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(linea),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function update_linea(nombre_linea,estaciones_list,horarios_list){
  let linea = new Linea(nombre_linea,estaciones_list,horarios_list)
  console.log(JSON.stringify(linea))
  fetch(endpoint_linea+"/put-"+nombre_linea, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(linea),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function delete_linea(nombre_linea){
  fetch(endpoint_linea+"/delete-"+nombre_linea, {
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

export {get_linea_by_estacion, add_linea, update_linea, delete_linea};