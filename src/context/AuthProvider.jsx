import { useState, createContext, useEffect } from "react";
import { clienteAxiosToken } from "../helpers/axios";

/** Crea el context */
const AuthContext = createContext();

/** Define el provider con el que vamos a rodear la app */
export const AuthProvider = ({ children }) => {
  /** Aqui van las funciones */

  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      try {
        const { data } = await clienteAxiosToken.get("/usuarios/perfil");
        setAuth(data);
      } catch (error) {
        console.log(error);
      }
    };
    autenticarUsuario();
  }, [auth]);

  /** Esta es la informacion que estara disponible en los componentes */
  return (
    <AuthContext.Provider
      value={{
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
