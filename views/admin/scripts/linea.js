
const template_add_estaciones = `
<div class="input-field-fill margin-1">
    <input type="input" class="form__field" placeholder=" " name="Nombre_estacion" id="nombre"
        required />
    <label for="Nombre_estacion" class="form__label">Nombre de la estacion</label>
</div>
<div class="input-field-fill margin-1">
    <input type="number" class="form__field" placeholder=" " name="Kilometro_estacion" id="kilometro"
        required />
    <label for="Kilometro_estacion" class="form__label">Kilometro de la estacion</label>
</div>`;
const template_add_horarios = `
<div class="input-field-fill margin-1">
    <input type="time" class="form__field" placeholder=" " name="Hora_partida" id="Hora_salida"
        required />
    <label for="Hora_partida" class="form__label">Hora salida</label>
</div>
<div class="input-field-fill margin-1">
    <input type="time" class="form__field" placeholder=" " name="Hora_llegada" id="Hora_llegada"
        required />
    <label for="Hora_llegada" class="form__label">Hora llegada</label>
</div>
<div class="input-field-fill margin-1">
    <input type="input" class="form__field" placeholder=" " name="id_tren" id="id_tren"
        required />
    <label for="id_tren" class="form__label">ID tren</label>
</div>`;
var id = 0;
var id_horario = 0;

//iniciar botones estaciones
document.getElementById("boton-less-estacion").addEventListener("click", () => {
    delete_estaciones_lineas();
});
document.getElementById("boton-more-estacion").addEventListener("click", () => {
    add_estaciones_lineas();
});
//iniciar botones horario
document.getElementById("boton-less-horario").addEventListener("click", () => {
    delete_horarios_lineas();
});
document.getElementById("boton-more-horario").addEventListener("click", () => {
    add_horarios_lineas();
});

function add_estaciones_lineas() {
    let contenedor = document.getElementById("contenedor-input-estaciones");
    let div = document.createElement("div");
    div.style = "display: flex; width:100%";
    div.id = id+"-estacion";
    id++;
    div.innerHTML = template_add_estaciones;
    contenedor.appendChild(div);
    console.log(div.id)
}

function delete_estaciones_lineas() {
    if (id <= 1) {
        console.log("entor");
        return;
    }
    let contenedor = document.getElementById("contenedor-input-estaciones");
    contenedor.removeChild(contenedor.lastChild);
    id--;
}
add_estaciones_lineas();

function add_horarios_lineas(){
    let contenedor = document.getElementById("contenedor-input-horarios");
    let div = document.createElement("div");
    div.style = "display: flex; width:100%";
    div.id = id_horario+"-horario";
    id_horario++;
    div.innerHTML = template_add_horarios;
    contenedor.appendChild(div);
    console.log(div.id)
}

function delete_horarios_lineas() {
    if (id_horario <= 1) {
        console.log("entor");
        return;
    }
    let contenedor = document.getElementById("contenedor-input-horarios");
    contenedor.removeChild(contenedor.lastChild);
    id_horario--;
}
add_horarios_lineas();
