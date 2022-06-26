import {Ticket} from "../Models/Ticket.js"
import {env} from "../Config/env.js"

const endpoint_ticket = env.URL_API+"/ticket";

console.log("ingreso_ticket")
/*
const request = await fetch(endpoint_estacion);
console.log(request.json())*/

async function get_ticket(id_ticket){
  const request = await fetch(endpoint_tren+"-"+id_ticket);
  return request.json()
}

async function get_ticket_by_id_recorrtido_y_asiento(id_recorrido,n_asiento){
    let request = await fetch(endpoint_ticket+"-id_recorrido:"+id_recorrido+"-n_asiento:"+n_asiento);
    return request.json()
}

async function get_qr_ticket(id_ticket){
    let request = await fetch(endpoint_ticket+"-"+id_ticket+"-qr").then(r => r.text());
    console.log("entro")
    return request
}

function add_ticket(id_recorrido,estacion_inicio,estacion_destino,numero_asiento,valor){
  let ticket = new Ticket("cambiar",id_recorrido,estacion_inicio,estacion_destino,numero_asiento,valor)
  console.log(ticket)
  fetch(endpoint_ticket+"/post", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export {get_ticket, get_qr_ticket, get_ticket_by_id_recorrtido_y_asiento, add_ticket}