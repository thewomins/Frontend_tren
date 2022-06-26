import {Recorrido} from "../Models/Recorrido.js"
import {get_tren} from "../Controllers/Tren_controller.js"
import {env} from "../Config/env.js"

const endpoint_recorrido = env.URL_API+"/recorridos";

console.log("ingreso_recorrido")

async function get_recorrido(id){
    const request = await fetch(endpoint_recorrido+"-"+id)
    .then(response =>{
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response;})
    .then(function(response) {
        return response.json()
    })
    .catch((error) => {
        console.error(error)
        return ""
    });
    return request
}

async function add_recorrido(id,fecha,id_linea,partida,llegada,id_tren){
    let tren = await get_tren(id_tren)
    let recorrido = new Recorrido(id,fecha,id_linea,partida,llegada,tren)
    fetch(endpoint_recorrido+"/post", {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(recorrido),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

async function actualizar_recorrido(id_recorrido,recorrido){
    console.log(typeof id_recorrido)
    console.log(await fetch(endpoint_recorrido+"/put-"+{id_recorrido}, {
        method: 'PUT', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(recorrido),
    })
    .then(response => {response.json();console.log(response)})
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    }))
}

export {actualizar_recorrido,get_recorrido, add_recorrido};