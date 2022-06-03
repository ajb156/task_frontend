import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Alerta } from "../components/Alerta";

export const Resgistrar = () => {
  const [alerta, setAlerta] = useState({});
  const [registro, setRegistro] = useState({
    nombre: "",
    email: "",
    password: "",
    repetirPassword: "",
  });

  const { msg } = alerta;
  const { nombre, email, password, repetirPassword } = registro;

  const handleInputs = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear usuario en la api
  };

  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-4xl capitalize text-center">
        Registrate y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg px-10 py-5"
        onSubmit={handleForm}
      >
        <div className="my-5">
          <label htmlFor="nombre" className="input-label">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            className="input-form"
            name="nombre"
            value={nombre}
            onChange={handleInputs}
          />
        </div>

        <div className="my-5">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="input-form"
            name="email"
            value={email}
            onChange={handleInputs}
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
            name="password"
            value={password}
            onChange={handleInputs}
          />
        </div>

        <div className="my-5">
          <label htmlFor="password2" className="input-label">
            Repetir Contraseña
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir Contraseña"
            className="input-form"
            name="repetirPassword"
            value={repetirPassword}
            onChange={handleInputs}
          />
        </div>

        <input type="submit" value="Crear Cuenta" className="button-full" />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Ya tienes una cuenta? Inicia Sesión
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
