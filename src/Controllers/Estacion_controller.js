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

const request = await fetch(endpoint_estacion);
console.log(request.json())
