import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const getPlanets = async () => {
    // planetsApi.get("/").then((res) => res.data );
    const res = await planetsApi.get<Planet[]>("/");
    return res.data;
};
