import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch, user } = useAuthContext();

  const login = async (email, staffNo) => {
    setIsLoading(true);
    setError(null);
    console.log(email + "   " + staffNo);

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        staffNo,
      });
      console.log(response);

      if (response.status !== 200) {
        setIsLoading(false);
        setError(response.data.error);
        return;
      }

      // On successful login
      dispatch({ type: 'LOGIN', payload: response.data });
      localStorage.setItem('user', JSON.stringify(response.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  return { login, isLoading, error };
};
