
let menu_colapsable = document.getElementsByClassName("boton-menu-colapsable");


//inicializa menu
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
            img.style.transform = "rotate(0deg)";
            sub_menu.style.opacity = "0";
        } else {
            sub_menu.style.opacity = "1";
            sub_menu.style.maxHeight = sub_menu.scrollHeight + "px";
            menu_colapsable[index].style.border = "1px solid var(--outline)";
            img.style.transform = "rotate(-180deg)";
        }
    });
}