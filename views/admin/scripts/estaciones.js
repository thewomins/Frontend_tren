import {add_estacion, update_estacion, del_estacion} from "../../../src/Controllers/Estacion_controller.js" ;

try{
    document.getElementById("form_anadir_estacion").onsubmit = e=>{e.preventDefault();post_estacion()};
}catch(error){}

try{
    document.getElementById("form_editar_estacion").onsubmit = e=>{e.preventDefault();put_estacion()};
}catch(error){}

try{
    document.getElementById("form_delete_estacion").onsubmit = e=>{e.preventDefault();delete_estacion()};
}catch(error){}

async function post_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    let ciudad_estacion = document.getElementById("Ciudad_estacion").value
    if(nombre_estacion ==="" || ciudad_estacion===""){return}
    console.log(nombre_estacion)
    console.log(ciudad_estacion)
    let request= await add_estacion(nombre_estacion,ciudad_estacion)
    window.alert(request.status+" - "+request.statusText)
}

async function put_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    let ciudad_estacion = document.getElementById("Ciudad_estacion").value
    if(nombre_estacion ==="" || ciudad_estacion===""){return}
    console.log(nombre_estacion)
    console.log(ciudad_estacion)
    let request= await update_estacion(nombre_estacion, ciudad_estacion)
    window.alert(request.status+" - "+request.statusText)
}

async function delete_estacion(){
    console.log("click")
    let nombre_estacion = document.getElementById("Nombre_estacion").value
    if(nombre_estacion ===""){return}
    console.log(nombre_estacion)
    let request= await del_estacion(nombre_estacion)
    window.alert(request.status+" - "+request.statusText)
}