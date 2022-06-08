import React, { Fragment } from "react";
import { PreviewProyecto } from "../components/PreviewProyecto";
import useProyecto from "../hooks/useProyecto";

export const Proyectos = () => {
  const { proyectos } = useProyecto();

  return (
    <Fragment>
      <h1 className="text-4xl font-black">Proyectos</h1>
      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="mt-5 text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>
        )}
      </div>
    </Fragment>
  );
};
