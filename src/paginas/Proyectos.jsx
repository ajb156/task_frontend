import React, { Fragment } from "react";
import useProyecto from "../hooks/useProyecto";

export const Proyectos = () => {
  const { proyectos } = useProyecto();

  console.log(proyectos);
  return (
    <Fragment>
      <h1 className="text-4xl font-black">Proyectos</h1>
      <div></div>
    </Fragment>
  );
};
