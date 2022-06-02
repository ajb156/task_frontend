import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const OlvidePassword = () => {
  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-5xl capitalize text-center">
        Recupera tu acceso
      </h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div className="my-5">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="input-form"
          />
        </div>

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="button-full"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Ya tienes una cuenta? Incia Sesión
        </Link>
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
      </nav>
    </Fragment>
  );
};
