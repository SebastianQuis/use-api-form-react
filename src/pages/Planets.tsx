import { FC, use, useOptimistic, useState, useTransition } from "react";
import { Planet } from "../interfaces/planet.interface";
import { EditPlanetForm } from "./ui/EditPlanetForm";
import { updatePlanetAction } from "../actions/update-planet.action";

interface Props {
  getPlanets: Promise<Planet[]>;
}

// FC : functional component
const Planets: FC<Props> = ({ getPlanets }) => {
  
  const originalPlanets = use(getPlanets);
  // const [planetsList, setPlanetsList] = useState<Planet[]>(originalPlanets);
  const [isPending, startTransition] = useTransition();
  const [planetsOptimitic, setPlanetsOptimitic] = useOptimistic(
    originalPlanets,
    (current, newPlanet: Planet) => {
      const updatedPlanets = current.map((p) =>
        p.id === newPlanet.id ? newPlanet : p
      );
      return updatedPlanets;
    }
  );

  // crear un planeta con el formulario
  const handleAddPlanet = async (planet: Planet) => {
    // setPlanetsList([...planetsList, planet]);
  };

  const handledUpdatePlanet = async (planet: Planet) => {
    startTransition(async () => {
      const data = {
        ...planet,
        name: planet.name.toUpperCase(),
      };
      try {
        setPlanetsOptimitic(data); // enviar solo el dataa que se va a actualizar en useOptimistic
        const updatedPlanet = await updatePlanetAction(data);
        setPlanetsOptimitic(updatedPlanet);

        console.log("todo salió bien");
      } catch (error) {
        console.log(error);
        setPlanetsOptimitic(planet);
      }
    });
  };

  // const newPlanetsList = planetsList.map((p) => (p.id === updatedPlanet.id ? updatedPlanet : p));
  // setPlanetsList(newPlanetsList);

  return (
    <div className="p-4">
      {/* Lista de planetas Grid*/}
      <EditPlanetForm onAddPlanet={handleAddPlanet} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {planetsOptimitic.map((planet) => (
          <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-semibold">{planet.name}</h2>
            <p className="text-gray-700">{planet.type}</p>
            <p className="text-gray-700">{planet.distanceFromSun}</p>
            <button
              onClick={() => handledUpdatePlanet(planet)}
              className="bg-blue-600 disabled:bg-gray-500 text-white p-1 rounded-md mt-2 w-full"
              disabled={isPending}
            >
              Actualizar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
