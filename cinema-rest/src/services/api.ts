import axios from "axios";

const api = axios.create({
  baseURL: "https://cinema-api-resilia.herokuapp.com",
});

export default api;
