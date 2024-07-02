import axios from "axios";

const url = "http://localhost:1990/api/v1";

export const customAxios = axios.create({
  baseURL: url,
});
