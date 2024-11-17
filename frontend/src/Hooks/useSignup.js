import axios from "axios"
import { useState } from "react"
import {useAuthContext} from "./useAuthContext"
export const useSignup = () => {

    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch } = useAuthContext()
    const signup = async (email, password) => 
    {
        setIsLoading(true)
        setError(null)

        const response = await axios.post(`${process.env.backend_url}/api/auth/login`, {
            email, password
        })
        console.log(response)

        if(!response.ok)
        {setIsLoading(false)
            setError(response.data.error);
        }
        if(response.ok)
        {
            localStorage.setItem('user', response)
            dispatch({type: 'LOGIN', payload: response})
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error}
}