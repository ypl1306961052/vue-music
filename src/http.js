import axois from "axios"

const http = axois.create({
    baseURL: "/api"
});
export default http;
