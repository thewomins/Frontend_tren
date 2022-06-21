import {add_estacion, update_estacion, del_estacion} from "../../../Controllers/Estacion_controller.js" ;

try {
    document.getElementById("boton-post").addEventListener("click",()=>{post_estacion()});
} catch (error) {}

try{
    document.getElementById("boton-put").addEventListener("click",()=>{put_estacion()});
}catch(error){}

try{
    document.getElementById("boton-delete").addEventListener("click",()=>{delete_estacion()});
}catch(error){}

function post_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    let ciudad_estacion = document.getElementById("Ciudad_estacion").value
    if(nombre_estacion ==="" || ciudad_estacion===""){return}
    console.log(nombre_estacion)
    console.log(ciudad_estacion)
    add_estacion(nombre_estacion,ciudad_estacion)
}

function put_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    let ciudad_estacion = document.getElementById("Ciudad_estacion").value
    if(nombre_estacion ==="" || ciudad_estacion===""){return}
    console.log(nombre_estacion)
    console.log(ciudad_estacion)
    update_estacion(nombre_estacion, ciudad_estacion)
}

function delete_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    if(nombre_estacion ===""){return}
    console.log(nombre_estacion)
    del_estacion(nombre_estacion)
}