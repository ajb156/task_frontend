import { useState } from "react";
import useProyecto from "../hooks/useProyecto";
import { Alerta } from "./Alerta";

export const FormularioColaborador = () => {
  const [email, setEmail] = useState("");
  const { mostrarAlerta, alerta, submitColaborador } = useProyecto();
  const { msg } = alerta;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }
    console.log(email);
    submitColaborador(email);
  };

  return (
    <form className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow' onSubmit={handleSubmit}>
      {msg && <Alerta alerta={alerta} />}
      <div className='mb-5'>
        <label htmlFor='email' className='input-label'>
          Email del usuario
        </label>
        <input
          type='email'
          className='input-form'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input type='submit' className='button-full' value='Buscar Colaborador' />
    </form>
  );
};
