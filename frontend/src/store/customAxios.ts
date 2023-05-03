import axios from "axios";

const accessToken = localStorage.getItem("token");

// SPRING BOOT
export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/api/",
  headers: {
    Authorization: accessToken,
  },
});

// DJANGO
export const djangoAxios = axios.create({
  baseURL: process.env.REACT_APP_API_DJANGO_URL,
  headers: {
    Authorization: accessToken,
  },
});
