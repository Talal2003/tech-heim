import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import axiosInstance from "../api/axiosinstance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";

export default function useLogin() {

    const navigate = useNavigate();
    const { setAccessToken } = useContext(AuthContext);
    const [serverErrors, setServerErrors] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess: (response) => {
            setAccessToken(response.data.accessToken);
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