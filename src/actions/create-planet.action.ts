import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

// para meter la info con el tipado de objeto
export const createPlanetAction = async (planet: Partial<Planet>) => {
  try {
    // planetsApi.get("/").then((res) => res.data );
    const res = await planetsApi.post<Planet>("/", planet);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// para meter la info con el formulario
export const createPlanetActionForm = async (prevState: unknown,queryData: FormData) => {
  try {
    console.log(prevState);
    const planet = Object.fromEntries(queryData.entries());
    const res = await planetsApi.post<Planet>("/", planet);
    return res.data;
  } catch (error) {
    console.log(error);
    // return null;
    throw new Error('No se pudo crear el nuevo planeta');
  }
};

