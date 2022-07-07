import { is_Auth } from "../../../Controllers/Auth_controller.js";


let TOKEN=sessionStorage.getItem("token")
console.log(TOKEN.split(" ")[1])
let request = await is_Auth(TOKEN.split(" ")[1])
if(request.detail !== true){
    window.location.href = "/src/views/admin/login.html"
}
console.log(request)