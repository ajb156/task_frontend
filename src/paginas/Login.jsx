import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import { clienteAxios } from "../helpers/axios";
import useAuth from "../hooks/useAuth";

export const Login = () => {
  const [alerta, setAlerta] = useState({});
  const [login, setLogin] = useState({
    email: "ajblanco156@gmail.com",
    password: "Ablanco156*",
  });
  const { setAuth } = useAuth();
  const { email, password } = login;
  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clienteAxios.post("/usuarios/autenticar", login);
      localStorage.setItem("token", data.token);
      setAuth(data);
      setAlerta({});
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handleInputs = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value,
    });
  };

  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-5xl capitalize text-center">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg px-10 py-5"
        onSubmit={handleSubmit}
      >
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
