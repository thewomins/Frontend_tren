import {get_estacion_by_city} from "../../../Controllers/Estacion_controller.js"
import {get_linea_by_estacion} from "../../../Controllers/Linea_controller.js"


document.getElementById("search")

search.addEventListener("click",e=>{onclick_search()})

const datePicker = document.getElementById('fecha');


async function onclick_search(){
    let origen = document.getElementById("Ciudad_origen")
    let destino = document.getElementById("Ciudad_destino")
    const selectedDate = new Date(datePicker.value);
    const today = new Date();
    today.setUTCHours(0,0,0,0);
    if(origen.value === ""){
        origen.setCustomValidity("No puede ser vacio");
        origen.reportValidity();
        return}
    if(destino.value === ""){
        destino.setCustomValidity("No puede ser vacio");
        destino.reportValidity();
        return}
    if (isNaN(selectedDate) || selectedDate < today) {
        datePicker.setCustomValidity("Ingrese una fecha correctamente")
        datePicker.reportValidity();
        return}
    let fecha=[selectedDate.getDate()+1,(selectedDate.getMonth()+1),selectedDate.getFullYear()].join("-")
    let destino_estacion = (await get_estacion_by_city(destino.value)).nombre
    let array_final=[]
    let lista_origen= await get_linea_by_estacion( (await get_estacion_by_city(origen.value)).nombre)
    lista_origen.forEach(element => {
        if(element.estaciones.filter(e => e.nombre === destino_estacion).length > 0){
        array_final.push(element);}
    });
    localStorage.setItem("lineas", JSON.stringify(array_final));
    sessionStorage.setItem("fecha",fecha)
    window.location.href = "seleccion_horario.html?"+"origen="+origen.value+"&destino="+destino.value;
}

