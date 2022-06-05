import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import { clienteAxios } from "../helpers/axios";

export const NuevoPassword = () => {
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const { token } = useParams();
  const { msg } = alerta;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(
          `/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit =async(e) => {
    e.preventDefault();

    if (password === "" || password.length < 3) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      await clienteAxios.post(`/usuarios/olvide-password/${token}`, {
        password,
      });
      setPassword("");
      toast.success("Contraseña actualizada correctamente");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-4xl capitalize text-center">
        Restablecer Contraseña
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          className="my-10 bg-white shadow rounded-lg px-10 py-5"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label htmlFor="password" className="input-label">
              Nueva Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="input-form"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Confirmar Contraseña"
            className="button-full"
          />
        </form>
      )}
    </Fragment>
  );
};
