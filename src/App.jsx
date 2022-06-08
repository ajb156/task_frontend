import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { ConfirmarCuenta } from "./paginas/ConfirmarCuenta";
import { Login } from "./paginas/Login";
import { NuevoPassword } from "./paginas/NuevoPassword";
import { OlvidePassword } from "./paginas/OlvidePassword";
import { Resgistrar } from "./paginas/Resgistrar";

import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { RutaProtegida } from "./layouts/RutaProtegida";
import { Proyectos } from "./paginas/Proyectos";
import { NuevoProyecto } from "./paginas/NuevoProyecto";
import { ProyectoProvider } from "./context/ProyectoProvider";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <AuthProvider>
        <ProyectoProvider>
          <Routes>
            {/** Grupo de rutas sin autenticacion cargan el template desde AuthLayout */}
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Resgistrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            {/** Grupo de rutas con autenticación */}
            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
            </Route>
          </Routes>
        </ProyectoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
