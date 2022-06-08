import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clienteAxiosToken } from "../helpers/axios";

const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [cargando, setCargando] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  const [proyecto, setProyecto] = useState({});
  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
  };

  const obtenerProyectos = async () => {
    try {
      const { data } = await clienteAxiosToken.get("/proyectos");
      setProyectos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, []);

  const submitProyecto = async (proyecto) => {
    try {
      const { data } = await clienteAxiosToken.post("/proyectos", proyecto);
      setProyectos([...proyectos, data]);
      navigate("/proyectos");
      toast.success("Creado Correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProyecto = async (id) => {
    setCargando(true);
    try {
      const { data } = await clienteAxiosToken.get(`/proyectos/${id}`);
      setProyecto(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoContext;
