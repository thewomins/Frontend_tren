import { Admin } from "../Models/Admin.js"
import {env} from "../Config/env.js"

const endpoint_admin = env.URL_API+"/admin";

console.log("ingreso_controller",endpoint_admin)

async function auth_admin(email, password){
  let admin = new Admin(email,password,"")
  let request = await fetch(endpoint_admin+"/auth", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    });
  return await request.json()
}

async function is_Auth(token){
  let request = await fetch(endpoint_admin+"/is-auth-"+token, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(request)
  return await request.json()
}

export {auth_admin, is_Auth}