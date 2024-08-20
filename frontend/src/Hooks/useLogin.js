import axios from "axios"
import { useState } from "react"
import {useAuthContext} from "./useAuthContext"
export const useLogin  = () => {

    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch , user} = useAuthContext()
    const login = async (email, staffNo) => 
    {
        setIsLoading(true)
        setError(null)

        const response = await axios.post("http://localhost:8000/api/auth/login", {
            email, staffNo
        }, {
            headers:  {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        console.log(response)
        if(response.status !== 200)
        {setIsLoading(false)
            setError(response.data.error);
        }
        if(response.status === 200)
        {
            dispatch({type: 'LOGIN', payload: response})
            localStorage.setItem('user', JSON.stringify(response.data))
            setIsLoading(false)
        }
    }
    return { login, isLoading, error}
}