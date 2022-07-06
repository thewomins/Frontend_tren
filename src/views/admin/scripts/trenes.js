import {add_tren, update_tren, del_tren} from "../../../Controllers/Tren_controller.js" ;

try{
    document.getElementById("form_anadir_tren").onsubmit = e=>{e.preventDefault();post_tren()};
}catch(error){}

try{
    document.getElementById("form_editar_tren").onsubmit = e=>{e.preventDefault();put_tren()};
}catch(error){}

try{
    document.getElementById("form_delete_tren").onsubmit = e=>{e.preventDefault();delete_tren()};
}catch(error){}

async function post_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    let velocidad = document.getElementById("Velocidad").value
    let asientos = document.getElementById("Asientos").value
    if(numero_serie ==="" || velocidad==="" || asientos ===""){return}
    console.log(numero_serie)
    console.log(velocidad)
    console.log(asientos)
    let request= await add_tren(numero_serie,velocidad,asientos)
    window.alert(request.status+" - "+request.statusText)
}

async function put_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    let velocidad = document.getElementById("Velocidad").value
    let asientos = document.getElementById("Asientos").value
    if(numero_serie ==="" || velocidad==="" || asientos ===""){return}
    console.log(numero_serie)
    console.log(velocidad)
    console.log(asientos)
    let request= await update_tren(numero_serie,velocidad,asientos)
    window.alert(request.status+" - "+request.statusText)
}

async function delete_tren(){
    console.log("click")
    let numero_serie = document.getElementById("Numero_serie").value
    if(numero_serie ===""){return}
    console.log(numero_serie)
    let request= await del_tren(numero_serie)
    window.alert(request.status+" - "+request.statusText)
}
