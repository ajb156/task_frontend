import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { ConfirmarCuenta } from "./paginas/ConfirmarCuenta";
import { Login } from "./paginas/Login";
import { NuevoPassword } from "./paginas/NuevoPassword";
import { OlvidePassword } from "./paginas/OlvidePassword";
import { Resgistrar } from "./paginas/Resgistrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Grupo de rutas sin autenticacion cargan el template desde AuthLayout */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Resgistrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
