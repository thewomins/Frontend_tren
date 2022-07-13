import { is_Auth } from "../../../src/Controllers/Auth_controller.js";


let TOKEN=sessionStorage.getItem("token")
console.log(TOKEN.split(" ")[1])
if(TOKEN===null){
    window.location.href = "/views/admin/login.html"
}
let request = await is_Auth(TOKEN.split(" ")[1])
if(request.detail !== true){
    window.location.href = "/views/admin/login.html"
}
console.log(request)