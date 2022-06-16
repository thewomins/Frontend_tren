import {Estacion} from "../Models/Estacion.js"


const endpoint_estacion = "http://127.0.0.1:8000/estaciones";

/*
fetch("/post/data/here", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  }).then(res => {
    console.log("Request complete! response:", res);
  });
*/
console.log("ingreso")

const request = await fetch(endpoint_estacion);
console.log(request.json())

function add_estacion(nombre_estacion,nombre_ciudad){
  let estacion = new Estacion(nombre_estacion,nombre_ciudad)
  fetch(endpoint_estacion+"/post", {
    method: 'POST', // or 'PUT'
    headers: {
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

export {add_estacion};

