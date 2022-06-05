import { useState, createContext } from "react";

/** Crea el context */
const AuthContext = createContext();

/** Define el provider con el que vamos a rodear la app */
export const AuthProvider = ({ children }) => {
  /** Aqui van las funciones */

  const [auth, setAuth] = useState({});

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
