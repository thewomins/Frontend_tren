import {get_qr_ticket, get_ticket_by_id_recorrtido_y_asiento } from "../../../src/Controllers/Ticket_controller.js";

var datos = JSON.parse(sessionStorage.getItem("pasaje") || "[]");

document.getElementById("precio").textContent="Precio: $"+datos.precio

document.getElementById("boton_form").addEventListener("click",e=>print())

let ticket=await get_ticket_by_id_recorrtido_y_asiento(datos.id_recorrido,datos.asiento)
console.log(await ticket)
let img =await get_qr_ticket(await ticket.id)
document.getElementById("id_ticket").textContent="Id ticket: "+ticket.id
console.log(img)
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("height","100%")
svg.setAttribute("display","flex")
svg.setAttribute("justify-content","center")
svg.innerHTML=await img
let svg_child=svg.lastChild
console.log(svg_child)
svg_child.setAttribute("width","240")
svg_child.setAttribute("height","240")
document.getElementById("img").appendChild(svg)
