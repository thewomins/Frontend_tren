import {add_estacion} from "../../../Controllers/Estacion_controller.js" ;

document.getElementById("boton-post").addEventListener("click",()=>{post_estacion()});

function post_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    let ciudad_estacion = document.getElementById("Ciudad_estacion").value
    if(nombre_estacion ==="" || ciudad_estacion===""){return}
    console.log(nombre_estacion)
    console.log(ciudad_estacion)
    add_estacion(nombre_estacion,ciudad_estacion)
}

