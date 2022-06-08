
let menu_colapsable = document.getElementsByClassName("boton-menu-colapsable");


for (let index = 0; index < menu_colapsable.length; index++) {
    menu_colapsable[index].addEventListener("click", function() {
        let sub_menu = menu_colapsable[index].nextElementSibling;
        if (sub_menu.style.display === "grid") {
            sub_menu.style.maxHeight = 0 + "px";
            sub_menu.style.display = "none";
        } else {
            sub_menu.style.display = "grid";
            sub_menu.style.maxHeight = sub_menu.scrollHeight + "px";
        }
    });
}