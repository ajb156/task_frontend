import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, Link } from "react-router-dom";
import { clienteAxios } from "../helpers/axios";

export const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        await clienteAxios.get(`usuarios/confirmar/${id}`);
        toast.success("Cuenta Confirmada Correctamente 😎");
      } catch (error) {
        setCuentaConfirmada(true);
        toast.error(error.response.data.msg);
      }
    };
    confirmarCuenta();
  }, []);

  return (
    <Fragment>
      <h1 className="text-sky-600 font-black text-4xl capitalize text-center">
        Confirma tu cuenta
      </h1>

      <div>
        {cuentaConfirmada && (
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </Fragment>
  );
};
