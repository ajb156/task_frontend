import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-5xl capitalize text-center">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
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

        <div className="my-5">
          <label htmlFor="password" className="input-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="input-form"
          />
        </div>
        <input type="submit" value="Iniciar Sesión" className="button-full" />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          No tienes una cuenta? registrate
        </Link>
        <Link
          to="/olvide-password"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Olvide mi contraseña
        </Link>
      </nav>
    </Fragment>
  );
};
