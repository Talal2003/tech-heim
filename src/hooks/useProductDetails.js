import i18n from "../i18n";
import { useFetch } from "./useFetch";

export default function useProductDetails(id) {
  return useFetch(['product', id, i18n.language],`/products/${id}`)
}
