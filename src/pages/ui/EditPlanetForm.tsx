import { useActionState } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { createPlanetActionForm } from "../../actions/create-planet.action";

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  const [state, formAction, isPending] = useActionState(
   
    async (prevState: unknown, queryData: FormData) => {
      const planet = await createPlanetActionForm(prevState, queryData);
      onAddPlanet(planet);
    },
    null

  );

  return (
    <form
      className="mb-4 flex flex-col md:flex-row"
      action={formAction}
      method="post"
    >
      <span>{isPending ? "cargando" : "no mostrar"}</span>
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="name"
      />
      <input
        type="text"
        placeholder="Tipo de planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="type"
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="distanceFromSun"
      />
      <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-600 text-white p-2 rounded flex-1 sm:flex-none"
        disabled={isPending}
      >
        Agregar planeta
      </button>
    </form>
  );
};
