import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

export const updatePlanetAction = async (planet: Planet) => {
  try {
    // patch es para actualizar todo un objeto.
    await sleep();
    // throw new Error("Error de prueba al actualizar planeta");

    const res = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    // console.log('planeta actualizado')
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error al actualizar el planeta", error);
    throw new Error("No se pudo actualizar el planeta");
  }
};
