import i18n from "../i18n";
import { useFetch } from "./useFetch";

export default function useProducts(filters = {}) {
    return useFetch(['products', i18n.language, filters], '/Products', filters);
}