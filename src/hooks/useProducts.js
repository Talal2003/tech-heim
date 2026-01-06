import { useFetch } from "./useFetch";

export default function useProducts() {
    return useFetch.response.data(['products'], '/Products');
}
