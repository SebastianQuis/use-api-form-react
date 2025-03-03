import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    // use formStatus toma el componente padre de este componente, es decir el <form></form>
    // y de acuerdo a ese componente, toma el estado de ese formulario
  const formStatus = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 disabled:bg-gray-600 text-white p-2 rounded flex-1 sm:flex-none"
      disabled={formStatus.pending}
    >
      Agregar planeta
    </button>
  );
}
