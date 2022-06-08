import React, { Fragment } from "react";
import { Formulario } from "../components/Formulario";

export const NuevoProyecto = () => {
  return (
    <Fragment>
      <h1 className="text-4xl font-black">Crear Proyecto</h1>
      <div className="mt-10 flex justify-center">
        <Formulario />
      </div>
    </Fragment>
  );
};
