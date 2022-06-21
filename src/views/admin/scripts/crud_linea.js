import {add_linea, update_linea, delete_linea} from "../../../Controllers/Linea_controller.js";

try{
document.getElementById("boton-post").addEventListener("click", () => {post_linea();});
}catch (error){}

try{
    document.getElementById("boton-put").addEventListener("click", () => {put_linea();});
}catch (error){}

try{
    document.getElementById("boton-delete").addEventListener("click", () => {del_linea();});
}catch (error){}

function obtener_list_div(div){
    let array=[]
    Array.from(div.children).forEach(element => {
        let obj_temp={}
        Array.from(element.children).forEach(element => {
            element.querySelectorAll("input").forEach(element=>{
                obj_temp[element.id]=element.value
            })
        });
        array.push(obj_temp)
    });
    return array;
}

function post_linea() {
    console.log("click");
    let nombre_linea = document.getElementById("Nombre_linea").value;
    let list_horario = obtener_list_div(document.getElementById("contenedor-input-horarios"))
    let list_estaciones = obtener_list_div(document.getElementById("contenedor-input-estaciones"))
    //console.log(list_horario)
    //console.log(list_estaciones)
    if (nombre_linea === "") {
        return;
    }
    //console.log(nombre_linea); 
    add_linea(nombre_linea, list_horario, list_estaciones);
}

function put_linea() {
    console.log("click");
    let nombre_linea = document.getElementById("Nombre_linea").value;
    let list_horario = obtener_list_div(document.getElementById("contenedor-input-horarios"))
    let list_estaciones = obtener_list_div(document.getElementById("contenedor-input-estaciones"))
    if (nombre_linea === "") {
        return;
    }
    console.log(list_horario)
    console.log(list_estaciones)
    console.log(nombre_linea); 
    update_linea(nombre_linea, list_horario, list_estaciones)
}

function del_linea() {
    console.log("click_del");
    let nombre_linea = document.getElementById("Nombre_linea").value;
    if (nombre_linea === "") {
        return;
    }
    console.log(nombre_linea); 
    delete_linea(nombre_linea)
}