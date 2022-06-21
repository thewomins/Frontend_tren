import {get_estacion_by_city} from "../../../Controllers/Estacion_controller.js"
import {get_linea_by_estacion} from "../../../Controllers/Linea_controller.js"


document.getElementById("search")

search.addEventListener("click",e=>{onclick_search()})

async function onclick_search(){
    let origen = document.getElementById("Ciudad_origen")
    let destino = document.getElementById("Ciudad_destino")
    if(origen.value === ""&& destino.value==""){return}
    let destino_estacion = (await get_estacion_by_city(destino.value)).nombre
    let array_final=[]
    let lista_origen= await get_linea_by_estacion( (await get_estacion_by_city(origen.value)).nombre)
    lista_origen.forEach(element => {
        if(element.estaciones.filter(e => e.nombre === destino_estacion).length > 0){
        array_final.push(element);}
    });
    localStorage.setItem("lineas", JSON.stringify(array_final));
    window.location.href = "seleccion_horario.html?"+"origen="+origen.value+"&destino="+destino.value;
}
