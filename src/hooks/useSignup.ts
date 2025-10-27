import { authService } from "@/services/authService"
import type {User} from "../types/User"
import { useState } from "react"

export const useSignup = ()=>{
   
    const[user,setUser]=useState< User | null>(null)
    const[error,setError]=useState<string|null>(null)
    const[loading,setLoading]=useState(false)
    const signup = async(email:string,password:string)=>{
        setError(null)
        setLoading(true)
        try {
            console.log("Before signup API call");
            const newUser = await authService.signup(email,password);
        ;
            setUser(newUser)
               console.log("user",newUser)
        } catch (error) {
            setError("signup failed")
        }finally{
            setLoading(false)
        }
    }
    return {signup,loading,error,user}
}