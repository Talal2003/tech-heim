import { useFetch } from "./useFetch";
import axiosAuthInstance from '../api/axiosAuthInstance';

export default function useCart() {
    return useFetch(['carts'], '/Carts', axiosAuthInstance);
}