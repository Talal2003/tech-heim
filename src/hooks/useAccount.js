import { useFetch } from "./useFetch";
import axiosAuthInstance from '../api/axiosAuthInstance';

export default function useAccount() {
    return useFetch(['profile'], '/Profile', axiosAuthInstance);
}