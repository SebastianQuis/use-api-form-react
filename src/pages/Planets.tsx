import { FC, use, useState } from 'react';
import { Planet } from '../interfaces/planet.interface';
import { EditPlanetForm } from './ui/EditPlanetForm';

interface Props {
  getPlanets: Promise<Planet[]>;
}

// FC : functional component
const Planets: FC<Props> = ({ getPlanets }) => {
  const originalPlanets = use(getPlanets);
  const [planetsList, setPlanetsList] = useState<Planet[]>(originalPlanets);

  const handleAddPlanet = async (planet: Planet) => {
    setPlanetsList([...planetsList, planet]);
  }

  return (
    <div className="p-4">
      {/* Lista de planetas Grid*/}
      <EditPlanetForm onAddPlanet={handleAddPlanet} />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {planetsList.map((planet) => (
          <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-semibold">{planet.name}</h2>
            <p className="text-gray-700">{planet.type}</p>
            <p className="text-gray-700">{planet.distanceFromSun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
