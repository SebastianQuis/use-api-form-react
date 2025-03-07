import axios from "axios";

export const planetsApi = axios.create({
  baseURL: "http://localhost:3101/planets",
});

//! Interceptor para simular una espera de 2 segundos
planetsApi.interceptors.request.use((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(config);
      // ! insertando un error a proposito
      // reject(new Error("Error de red"));
    }, 2000);
  });
});
