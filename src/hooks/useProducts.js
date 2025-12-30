import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosinstance"

export default function useProducts() {

    const fetchProducts = async () => {
        const response = await axiosInstance.get('/Products');
        return response.data.response.data;
    }

    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000
    })
}
