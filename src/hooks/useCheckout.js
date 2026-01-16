import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosAuthInstance from "../api/axiosAuthInstance"

export default function useCheckout() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ paymentMethod }) => {
            const response = await axiosAuthInstance.post('/checkouts', { paymentMethod })
            return response.data;
        }, onSuccess: (data) => {
            if (data.url) {
                location.href = data.url;
            }
            queryClient.invalidateQueries({ queryKey: ['carts'] });
        }
    })
}
