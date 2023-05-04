import axios from "axios";

const accessToken = localStorage.getItem("token");

// SPRING BOOT
export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/api/",
  headers: {
    Authorization: accessToken,
  },
});

// 응답을 가로채서 오류 처리
customAxios.interceptors.response.use((response) => {
  if (response.data.status === 403) {
    window.location.href = "/login";
    localStorage.removeItem("token");
  }
  return Promise.reject(response);
});

// DJANGO
export const djangoAxios = axios.create({
  baseURL: process.env.REACT_APP_API_DJANGO_URL,
  headers: {
    Authorization: accessToken,
  },
});
