import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axiosinstance";
import { useNavigate } from "react-router-dom";

export default function useSendCode() {

  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState("");

  const sendCodeMutation = useMutation({
    mutationFn: async (values) => {
      return await axiosInstance.post(`/Auth/Account/SendCode`, values);
    },
    onSuccess: (response, values) => {
      localStorage.setItem("email", values.email);
      setServerErrors("");
      navigate('/reset-password');
    },
    onError: (err) => {
      setServerErrors(err.response.data.message);
    },
  });

  return { sendCodeMutation, serverErrors }
}