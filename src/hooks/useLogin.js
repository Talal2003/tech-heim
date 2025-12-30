import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axiosinstance";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function useLogin() {

    const navigate = useNavigate();
    const setToken = useAuthStore(state=>state.setToken);
    const [serverErrors, setServerErrors] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess: (response) => {
            setToken(response.data.accessToken);
            navigate('/home');
            setSuccessfulLogin(true);
            setServerErrors("");
        },
        onError: (err) => {
            setServerErrors(err.response.data.message);
            setSuccessfulLogin(false);
        },
    });

    return { loginMutation, successfulLogin, serverErrors }
}