import { useFetch } from "./useFetch";

export default function useProducts() {
    return useFetch(['products'], '/Products');
}
