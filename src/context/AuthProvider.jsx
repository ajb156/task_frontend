import { useState, createContext, useEffect } from "react";
import { clienteAxiosToken } from "../helpers/axios";

/** Crea el context */
const AuthContext = createContext();

/** Define el provider con el que vamos a rodear la app */
export const AuthProvider = ({ children }) => {
  /** Aqui van las funciones */

  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    /** Comprobar autenticacion */
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token") || null;
      if (!token) {
        setCargando(false);
        return;
      }

      try {
        const { data } = await clienteAxiosToken.get("/usuarios/perfil");
        setAuth(data);
      } catch (error) {
        setAuth({});
      }
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  /** Esta es la informacion que estara disponible en los componentes */
  return (
    <AuthContext.Provider
      value={{
        auth,
        cargando,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
