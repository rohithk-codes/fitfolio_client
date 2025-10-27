
import type  {User} from "../types/User"

export const authService = {
    async signup(email:string,password:string):Promise<User>{
        console.log("authsignup")
        const response = await fetch('http://localhost:3000/api/users/signup',{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({email,password})
        })
        console.log("res",response)
        if(!response.ok){
            throw new Error("Signup failed with status " + response.status);
        }
        const result = await response.json();
        return result.data
    }
}


