import { add_recorrido, get_recorrido } from "../../../Controllers/Recorrido_controller.js";

const template_horario=`
    <div class="conteiner-horarios">
        <p> Salida [8:30] - Llegada [10:30]</p>
    </div>`
;

document.getElementById("viaje").innerText=getUrlVars().origen+" - "+getUrlVars().destino

var lineas = JSON.parse(sessionStorage.getItem("lineas") || "[]");

lineas.forEach(element=>{add_lineas(element.nombre_linea,element.horarios)})


function getUrlVars() {
    let vars = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function add_lineas(nombre_linea,list_horarios){
    let contenedor_padre = document.getElementById("container-linea")
    let contenedor_hijo = document.createElement("div")
    let nombre_linea_p = document.createElement("p")
    contenedor_hijo.className="contenedor-hijo"
    nombre_linea_p.style="font-size: 2vw; margin-top:0;margin-bottom:1vw;"
    nombre_linea_p.textContent=nombre_linea
    contenedor_hijo.appendChild(nombre_linea_p)
    let i = 0;
    list_horarios.forEach(element => {
        let contenedor_horarios = document.createElement("div")
        contenedor_horarios.innerHTML=template_horario
        contenedor_horarios.id=nombre_linea+"-"+i
        i++
        contenedor_horarios.addEventListener("click",e=>{on_click_horario(contenedor_horarios)})
        let text_format="Salida: "+element.Hora_salida + " - Llegada: "+element.Hora_llegada
        contenedor_horarios.querySelector("p").textContent= text_format
        contenedor_hijo.appendChild(contenedor_horarios)
    });
    contenedor_padre.appendChild(contenedor_hijo)
}

var STACK_HORARIO=[]
var SELECCION=""

function on_click_horario(self){
    if(STACK_HORARIO.length>0){
        console.warn("entro")
        STACK_HORARIO[0].querySelector("div").style="background-color: var(--secundary-container)"
        if(STACK_HORARIO[0]===self){
            STACK_HORARIO.pop()
            SELECCION=""
            return
        }
        STACK_HORARIO.pop()
    }
    STACK_HORARIO.push(self)
    console.info(STACK_HORARIO.length)
    self.querySelector("div").style="background-color:red;transition:background-color 0.3s"
    let txt ='{"'+STACK_HORARIO[0].querySelector("p").textContent.replace(' - ','","').replaceAll(': ','" : "')
    SELECCION=(txt+'","nombre_linea":"'+STACK_HORARIO[0].id.split("-")[0]+'"}')
    show_rute(STACK_HORARIO[0].id.split("-")[0])
}

function show_rute(nombre_linea){
    let linea_seleccionada = lineas.filter(e=>e.nombre_linea===nombre_linea)
    let container_rutas = document.getElementById("vista-recorrido")
    container_rutas.removeChild(container_rutas.firstChild)
    let container_hijo = document.createElement("div")
    container_hijo.id="ruta"
    container_hijo.className="rutas_name"
    linea_seleccionada[0].estaciones.forEach(element=>{
        let p = document.createElement("p")
        p.textContent=element.nombre
        container_hijo.appendChild(p)
    })
    container_rutas.appendChild(container_hijo)
}

document.getElementById("boton-form").addEventListener("click",e=>{on_click_enviar()});

async function on_click_enviar(){
    if(SELECCION===""){
        return
    }
    sessionStorage.setItem("horario", SELECCION);
    await create_recorrido()
    window.location.href = "seleccion_asiento.html?"+SELECCION;
}

//lee o genera recorrido

async function create_recorrido(){
    let horario = JSON.parse(sessionStorage.getItem("horario") || "[]");
    let fecha = sessionStorage.getItem("fecha");
    let linea_seleccionada = (lineas.find(e=>e.nombre_linea===horario.nombre_linea)).horarios.find(e=>e.Hora_llegada===horario.Llegada)
    let id = horario.nombre_linea+fecha+horario.Salida
    sessionStorage.setItem("id_ruta", id);
    let consulta = await get_recorrido(id)
    if(await consulta===""){
        //crea
        console.warn("entro")
        await add_recorrido(id,fecha,horario.nombre_linea,horario.Salida,horario.Llegada,linea_seleccionada.id_tren)
        return false
    }
    //return
    return consulta.data
}
