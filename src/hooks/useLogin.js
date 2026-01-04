import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axiosinstance";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { jwtDecode } from "jwt-decode";

export default function useLogin() {

    const navigate = useNavigate();
    const setToken = useAuthStore(state => state.setToken);
    const setUser = useAuthStore((state)=>state.setUser);
    const [serverErrors, setServerErrors] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const loginMutation = useMutation({
        mutationFn: async (values) => {
            return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess: (response) => {
            const accessToken = response.data.accessToken;
            const decoded = jwtDecode(accessToken);
            const user = {
                name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
                role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            }
            setToken(accessToken);
            setUser(user);
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