import {auth_admin} from "../../../Controllers/Auth_controller.js"
import {env} from "../../../Config/env.js"

console.log("entro")

let password = document.getElementById("input_password")
let email = document.getElementById("input_email")
document.getElementById("form_inicio").addEventListener("submit",e=>e.preventDefault())
document.getElementById("iniciar_sesion").addEventListener("click",e=>onclick_iniciar_sesion())

async function onclick_iniciar_sesion(){
    let token = await auth_admin(email.value,password.value)
    env.TOKEN=token
    console.warn(env.TOKEN)
}
