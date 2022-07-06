import {Estacion} from "../Models/Estacion.js"
import {env} from "../Config/env.js"

const endpoint_estacion = env.URL_API+"/estaciones";
console.log("ingreso_controller")
let TOKEN=sessionStorage.getItem("token")
console.log(TOKEN)

async function get_estacion_by_city(nombre_ciudad){
  let request = await fetch(endpoint_estacion+"-by-city-"+nombre_ciudad);
  return request.json()
}

function add_estacion(nombre_estacion,nombre_ciudad){
  let estacion = new Estacion(nombre_estacion,nombre_ciudad)
  console.log(TOKEN)
  fetch(endpoint_estacion+"/post", {
    method: 'POST', // or 'PUT'
    headers: {
      'Authorization':TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(estacion),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function update_estacion(nombre_estacion,nombre_ciudad){
  let estacion = new Estacion(nombre_estacion,nombre_ciudad)
  fetch(endpoint_estacion+"/put-"+nombre_estacion, {
    method: 'PUT', 
    headers: {
      'Authorization':env.TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(estacion),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function del_estacion(nombre_estacion){
  fetch(endpoint_estacion+"/delete-"+nombre_estacion, {
    method: 'DELETE', 
    headers: {
      'Authorization':env.TOKEN,
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

export {get_estacion_by_city, add_estacion, update_estacion, del_estacion};

