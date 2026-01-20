import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../api/axiosAuthInstance";

export default function useReviews(id) {
    const queryClient = useQueryClient();
    const addReviewMutation = useMutation({
        mutationFn: async ({ Rating, Comment }) => {
            return await axiosAuthInstance.post(`/Products/${id}/reviews`, {
                Rating,
                Comment
            })
        }, onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reviews', id] });
        }
    })

    return addReviewMutation
}
