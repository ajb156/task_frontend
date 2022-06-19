import React, { Fragment, useEffect } from "react";
import io from "socket.io-client";
import { PreviewProyecto } from "../components/PreviewProyecto";
import useProyecto from "../hooks/useProyecto";

// eslint-disable-next-line no-unused-vars
let socket;

export const Proyectos = () => {
  const { proyectos } = useProyecto();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    socket = io(process.env.REACT_APP_API_URL);
  });

  return (
    <Fragment>
      <h1 className="text-4xl font-black">Proyectos: {proyectos.length}</h1>
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
