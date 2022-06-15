import {template,funcionalidad_menu,} from "../../../Components/menu_lateral_admin/menu.js";

const template_add_estaciones = `
<div class="input-field-fill margin-1">
    <input type="input" class="form__field" placeholder=" " name="Nombre_estacion" id="Nombre_estacion"
        required />
    <label for="Nombre_estacion" class="form__label">Nombre de la estacion</label>
</div>
<div class="input-field-fill margin-1">
    <input type="input" class="form__field" placeholder=" " name="Kilometro_estacion" id="Kilometro_estacion"
        required />
    <label for="Kilometro_estacion" class="form__label">Kilometro de la estacion</label>
</div>`;
var id=0;

let menu = document.getElementById("menu");
menu.innerHTML = template;
funcionalidad_menu();
console.log(template);

//iniciar botones
document.getElementById("boton-less").addEventListener("click",()=>{delete_estaciones_lineas()});
document.getElementById("boton-more").addEventListener("click",()=>{add_estaciones_lineas()})

function add_estaciones_lineas() {
    let contenedor = document.getElementById("contenedor-input-estaciones")
    let div = document.createElement("div")
    div.style="display: flex; width:100%"
    div.id=id
    id++;
    div.innerHTML=template_add_estaciones;
    contenedor.appendChild(div);
}

function delete_estaciones_lineas() {
    if(id<=1){
        console.log("entor")
        return;
    }
    let contenedor = document.getElementById("contenedor-input-estaciones")
    contenedor.removeChild(contenedor.lastChild)
    id--;
}
add_estaciones_lineas()
