import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clienteAxiosToken } from "../helpers/axios";

const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
  };

  const submitProyecto = async (proyecto) => {
    try {
      const { data } = await clienteAxiosToken.post("/proyectos", proyecto);
      navigate("/proyectos");
      toast.success("Creado Correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoContext;
