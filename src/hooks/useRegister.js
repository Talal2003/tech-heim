import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axiosinstance";

export default function useRegister() {

    const [serverErrors, setServerErrors] = useState([]);
    const [successfulRegistration, setSuccessfulRegistration] = useState(false);
    const registerMutation = useMutation({
        
    mutationFn:async(values)=> {
      return await axiosInstance.post(`/Auth/Account/Register`, values);
    },
    onSuccess:()=> {
      setSuccessfulRegistration(true);
      setServerErrors([]);
    },
    onError:()=> {
      setServerErrors(err.response.data.errors);
      setSuccessfulRegistration(false);
    },
  });
  
  return {serverErrors, registerMutation, successfulRegistration}
}