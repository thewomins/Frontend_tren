import {add_tren} from "../../../Controllers/Tren_controller.js" ;




document.getElementById("boton-post").addEventListener("click",()=>{post_tren()});

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
