import { Suspense } from "react";
import { getPlanets } from "./actions/get-planets.action";
import Planets from "./pages/Planets";
import { ErrorBoundary } from "./shared/ErrorBoundary";

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>
      {/* Formulario para agregar un planeta */}
      <ErrorBoundary fallback={<h1>Algo salió mal..</h1>}>
        <Suspense fallback={<h1>Cargando..</h1>}>
          <Planets getPlanets={getPlanets()} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
