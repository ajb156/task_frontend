import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyecto from "../hooks/useProyecto";

export const Proyecto = () => {
  const { id } = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyecto();
  const { nombre } = proyecto;

  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  return (
    <div className={`${cargando ? "animate-pulse" : ""}`}>
      <h1 className="font-black text-4xl">{nombre}</h1>
      <div>
        
      </div>
    </div>
  );
};
