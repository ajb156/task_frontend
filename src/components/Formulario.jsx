import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProyecto from "../hooks/useProyecto";
import { Alerta } from "./Alerta";

export const Formulario = () => {
  const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyecto();
  const [nuevoProyecto, setNuevoProyecto] = useState({
    id: null,
    nombre: "",
    descripcion: "",
    fechaEntrega: "",
    cliente: "",
  });

  const { nombre, descripcion, fechaEntrega, cliente } = nuevoProyecto;

  const params = useParams();
  const { msg } = alerta;

  useEffect(() => {
    if (params.id) {
      setNuevoProyecto({
        id: proyecto._id,
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        fechaEntrega: proyecto.fechaEntrega?.split("T")[0],
        cliente: proyecto.cliente,
      });
    }
  }, [params]);

  const handleForm = (e) => {
    e.preventDefault();
    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }
    // Pasar los datos al provider
    submitProyecto(nuevoProyecto);
    setNuevoProyecto({});
  };

  const handleInputs = ({ target }) => {
    setNuevoProyecto({
      ...nuevoProyecto,
      [target.name]: target.value,
    });
  };

  return (
    <form
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleForm}
    >
      {msg && <Alerta alerta={alerta} />}

      <div className="mb-5">
        <label htmlFor="nombre" className="input-label">
          Nombre Proyecto
        </label>
        <input
          type="text"
          className="input-form"
          id="nombre"
          name="nombre"
          value={nombre || ''}
          onChange={handleInputs}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="descripcion" className="input-label">
          Descripción
        </label>
        <textarea
          id="descripcion"
          className="input-form"
          placeholder="Descripcion del proyecto"
          value={descripcion}
          name="descripcion"
          onChange={handleInputs}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="fecha-entrega" className="input-label">
          Fecha Entrega
        </label>
        <input
          type="date"
          className="input-form"
          id="fecha-entrega"
          name="fechaEntrega"
          value={fechaEntrega || ''}
          onChange={handleInputs}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="cliente" className="input-label">
          Nombre Cliente
        </label>
        <input
          type="text"
          className="input-form"
          id="cliente"
          name="cliente"
          value={cliente || ''}
          onChange={handleInputs}
        />
      </div>
      <input
        type="submit"
        className="button-full"
        value={`${params.id ? "Editar Proyecto" : "Guargar Proyecto"}`}
      />
    </form>
  );
};
