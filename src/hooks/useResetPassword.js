import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axiosinstance";

export default function useResetPassword() {

  const userEmail = localStorage.getItem("email");
  const [serverErrors, setServerErrors] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [successfulSentCode, setSuccessfulSentCode] = useState(false);

  const resetPasswordMutation = useMutation({
    mutationFn: async (values) => {
      return await axiosInstance.patch(`/Auth/Account/ResetPassword`, values);
    },
    onSuccess: (response) => {
      setSuccessfulSentCode(true);
      setServerMessage(response.data.message);
      setServerErrors("");
    },
    onError: (err) => {
      setServerErrors(err.response.data.message);
      setSuccessfulSentCode(false);
    },
  });

  return { resetPasswordMutation, userEmail, serverMessage, successfulSentCode, serverErrors }
}