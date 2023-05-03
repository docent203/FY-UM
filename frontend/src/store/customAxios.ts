import axios from "axios";

const accessToken = localStorage.getItem("token");
const baseURL = "http://192.168.100.93:1234";
export const customAxios = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL + "/api/",
  baseURL: baseURL + "/api/",
  headers: {
    Authorization: accessToken,
  },
});
