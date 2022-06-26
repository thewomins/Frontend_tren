import {actualizar_recorrido,get_recorrido} from "../../../Controllers/Recorrido_controller.js"
import { add_ticket} from "../../../Controllers/Ticket_controller.js"

/*
*   hacerlo con entidad tren luego se cambia de recorrido
*   se hace en el backend de recorrido opcion para cambiar estado asiento
*/ 

const FLOW = false

var datos = JSON.parse(sessionStorage.getItem("horario") || "[]");
var lineas = JSON.parse(sessionStorage.getItem("lineas") || "[]");
var id_recorrido = sessionStorage.getItem("id_ruta").toString();

const icon_asiento = document.getElementById("asiento-icon")

let asiento_txt = document.getElementById("numero_asiento")
asiento_txt.textContent = "seleccione asiento"
document.getElementById("precio_ticket").textContent = 2300
document.getElementById("hora_salida").textContent = datos.Salida
document.getElementById("hora_llegada").textContent = datos.Llegada
document.getElementById("boton-form").addEventListener("click",e=>{on_click_compra()})

let canvas = document.getElementById("canvas-tren")

let consulta=(await get_recorrido(id_recorrido)).tren
console.log("consul",consulta)
let asiento=[]
for(let i =0;i<60;i++){
    asiento.push({numero: i, estado: false})
}
make_diagram(consulta.asientos)

function make_diagram(asientos){
    let tren = make_vagon(make_filas(make_parejas(asientos)));
    console.warn("tren:",tren)
    tren.forEach(vagon=>{
        console.log("vagon",vagon)
        let div_vagon = document.createElement("div")
        div_vagon.className="vagon"
        vagon.forEach(fila=>{
            let div_fila = document.createElement("div")
            div_fila.className="filas"
            console.log("fila",fila)
            fila.forEach(pareja=>{
                let div_pareja = document.createElement("div")
                console.log("pareja",pareja)
                pareja.forEach(asiento=>{
                    console.log("asiento",asiento)
                    let asiento_div = icon_asiento.cloneNode(true)
                    asiento_div.id="asiento-"+asiento.numero
                    asiento_div.style="display:flex;cursor: pointer;color:green;"
                    asiento_div.addEventListener("click",e=>{on_click_asiento(asiento_div)})
                    if(asiento.estado===true){
                        asiento_div.style="display:flex;color:red;pointer-events: none;opacity: 0.4;"
                    }
                    div_pareja.appendChild(asiento_div)
                })
                div_fila.appendChild(div_pareja)
            })
            div_vagon.appendChild(div_fila)
        })
        canvas.appendChild(div_vagon)
    })
    
}

function make_parejas(asientos){
    let parejas=[]
    for(let i=0;i<asientos.length;i=i+2){
        parejas.push([asientos[i],asientos[i+1]])
    }
    return parejas;
}

function make_filas(parejas){
    let filas=[]
    let fila=[]
    for (let i = 0; i < parejas.length; i=i+10) {
        for (let j = 0; j < 10 && j+i<parejas.length; j++) {
            fila.push(parejas[j+i])
        }
        filas.push(fila)
        fila=[]
    }
    return filas;
}

function make_vagon(filas){
    let vagon=[]
    for(let i=0;i<filas.length;i=i+2){
        if(filas[i+1]===undefined){
            vagon.push([filas[i]])
        }else{
            vagon.push([filas[i],filas[i+1]])
        }
    }
    return vagon;
}

let asiento_seleccionado=[];

function on_click_asiento(asiento_div){
    if(asiento_seleccionado.length>0){
        console.warn("entro")
        asiento_seleccionado[0].style="display:flex;cursor: pointer;color:green;"
        if(asiento_seleccionado[0]===asiento_div){
            asiento_seleccionado.pop()
            asiento_txt.textContent="Seleccione asiento"
            return
        }
        asiento_seleccionado.pop()
    }
    asiento_seleccionado.push(asiento_div)
    asiento_txt.textContent=asiento_seleccionado[0].id.split("-")[1]
    asiento_seleccionado[0].style="display:flex;cursor: pointer;color:blue;"
    console.error("click_asiento",asiento_seleccionado[0].id.split("-")[1])
}

async function on_click_compra(){
    //todos tienen que leer los datos de recorridos segun fecha
    //hacer que el asiento se ocupe en la base de datos 
    //hacer calculo de precio
    if(asiento_seleccionado.length<=0){return}
    let pasaje={
        "id_recorrido" : id_recorrido,
        "asiento" : parseInt(asiento_seleccionado[0].id.split("-")[1]),
        "linea_id" : datos.nombre_linea,
        "salida" : datos.Salida,
        "llegada" : datos.Llegada,
        "precio" : 3500
    }
    sessionStorage.setItem("pasaje",JSON.stringify(pasaje))
    let recorrido = await get_recorrido(pasaje.id_recorrido)
    recorrido.tren.asientos[pasaje.asiento-1].estado=true
    recorrido.id_linea=pasaje.linea_id
    //console.log(JSON.stringify(await recorrido))

    //si 
    if(FLOW === false){
        actualizar_recorrido("linea 126-6-202202:42",await recorrido)
        genera_ticket()
        window.location.href = "vista_ticket.html";
    }
}

function genera_ticket(){
    if(FLOW === true){return}
    let datos=JSON.parse(sessionStorage.getItem("pasaje") || "[]");
    let viaje=JSON.parse(sessionStorage.getItem("viaje") || "[]");
    add_ticket(datos.id_recorrido,viaje.origen,viaje.destino,datos.asiento,datos.precio)
}




