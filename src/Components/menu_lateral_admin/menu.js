const template = `
<div id="container-menu-lateral-admin">
    <div id="div-administrador-txt">
        <h1>Administrador</h1>
    </div>
    <!--menu-->
    <div class="container-items-menu">
        <div class="boton-menu-colapsable">
            <div class="inner-boton">
                <h2>Estaciones</h2>
                <img class="icon-expand" src="../../../icons/arrow_expand.svg"></img>
            </div>
        </div>
        <div class="div-colapsable">
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/añadir_estacion.html"><h4>Añadir Estaciones</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/editar_estacion.html" ><h4>Editar estaciones</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/eliminar_estacion.html" ><h4>Eliminar estaciones</h4></a>
            </div>
        </div>
        <!-- Siguiente item en menu-->
        <div class="boton-menu-colapsable">
            <div class="inner-boton">
                <h2>Trenes</h2>
                <img class="icon-expand" src="../../../icons/arrow_expand.svg"></img>
            </div>
        </div>
        <div class="div-colapsable">
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/añadir_tren.html" ><h4>Añadir trenes</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/editar_tren.html" ><h4>Editar trenes</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/eliminar_tren.html" ><h4>Eliminar trenes</h4></a>
            </div>
        </div>
        <!-- Siguiente item en menu-->
        <div class="boton-menu-colapsable">
            <div class="inner-boton">
                <h2>Lineas</h2>
                <img class="icon-expand" src="../../../icons/arrow_expand.svg"></img>
            </div>
        </div>
        <div class="div-colapsable">
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/añadir_lineas.html" ><h4>Añadir lineas</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/editar_lineas.html" ><h4>Editar lineas</h4></a>
            </div>
            <div class="boton-colapsable">
                <a class="a-no-style" href="../../views/admin/eliminar_lineas.html" ><h4>Eliminar lineas</h4></a>
            </div>
        </div>
    </div>
</div>
`;

//inicializa menu

function funcionalidad_menu(){

let menu_colapsable = document.getElementsByClassName("boton-menu-colapsable");

for (let index = 0; index < menu_colapsable.length; index++) {
    menu_colapsable[index].addEventListener("click", function() {
        let sub_menu = menu_colapsable[index].nextElementSibling;
        //sub_menu.addEventListener("click",function(){submenu_onclick(sub_menu)})
        let img = menu_colapsable[index].querySelector("img");
        //let boton = menu_colapsable[index].querySelector("boton-menu-colapsable");
        //boton.style.border = "1px solid var(--outline);"
        if (sub_menu.style.opacity === "1") {
            sub_menu.style.maxHeight = 0 + "px";
            menu_colapsable[index].style.border = "";
            menu_colapsable[index].style.backgroundColor = "";
            img.style.transform = "rotate(0deg)";
            sub_menu.style.opacity = "0";
        } else {
            sub_menu.style.opacity = "1";
            sub_menu.style.maxHeight = sub_menu.scrollHeight + "px";
            menu_colapsable[index].style.border = "1px solid var(--outline)";
            menu_colapsable[index].style.backgroundColor = "var(--on-primary-16)";
            img.style.transform = "rotate(-180deg)";
        }
    });
}
}

export {template,funcionalidad_menu};