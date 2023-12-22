import axios from "axios";
import { BASE_URL } from "../config/system";

export function findByName(name: string) {
    return axios.get(`${BASE_URL}${name}`);
}
