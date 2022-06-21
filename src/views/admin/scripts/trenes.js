import {add_tren, update_tren, del_tren} from "../../../Controllers/Tren_controller.js" ;

try{
    document.getElementById("boton-post").addEventListener("click",()=>{post_tren()});
}catch(error){}

try{
    document.getElementById("boton-put").addEventListener("click",()=>{put_tren()});
}catch(error){}

try{
    document.getElementById("boton-delete").addEventListener("click",()=>{delete_tren()});
}catch(error){}

function post_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    let velocidad = document.getElementById("Velocidad").value
    let asientos = document.getElementById("Asientos").value
    if(numero_serie ==="" || velocidad==="" || asientos ===""){return}
    console.log(numero_serie)
    console.log(velocidad)
    console.log(asientos)
    add_tren(numero_serie,velocidad,asientos)
}

function put_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    let velocidad = document.getElementById("Velocidad").value
    let asientos = document.getElementById("Asientos").value
    if(numero_serie ==="" || velocidad==="" || asientos ===""){return}
    console.log(numero_serie)
    console.log(velocidad)
    console.log(asientos)
    update_tren(numero_serie,velocidad,asientos)
}

function delete_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    if(numero_serie ===""){return}
    console.log(numero_serie)
    del_tren(numero_serie)
}
