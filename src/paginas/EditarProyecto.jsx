import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import useProyecto from "../hooks/useProyecto";

export const EditarProyecto = () => {
  const { proyecto, obtenerProyecto, cargando, eliminarProyecto } =
    useProyecto();

  const { id } = useParams();

  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  const handleDelete = (id) => {
    eliminarProyecto(id);
  };

  if (cargando) return "Cargando...";

  return (
    <Fragment>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">
          Editar Proyecto: {proyecto.nombre}
        </h1>
        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <button
            type="button"
            className="uppercase font-bold"
            onClick={() => handleDelete(proyecto._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Formulario proyecto={proyecto} />
      </div>
    </Fragment>
  );
};
