import React, { Fragment } from "react";

export const NuevoPassword = () => {
  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-4xl capitalize text-center">
        Restablecer Contraseña
      </h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div className="my-5">
          <label htmlFor="password" className="input-label">
            Nueva Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="input-form"
          />
        </div>

        <input
          type="submit"
          value="Confirmar Contraseña"
          className="button-full"
        />
      </form>
    </Fragment>
  );
};
