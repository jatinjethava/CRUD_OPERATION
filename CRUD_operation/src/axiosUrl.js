import axios from "axios";

export const userUrl = axios.create({
    baseURL: "http://localhost:8100/user"
});