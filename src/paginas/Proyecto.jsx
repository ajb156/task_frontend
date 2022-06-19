import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import { Tarea } from "../components/Tarea";
import useProyecto from "../hooks/useProyecto";

export const Proyecto = () => {
  const { id } = useParams();

  const { obtenerProyecto, proyecto, cargando, handleModalTarea } = useProyecto();
  const { nombre } = proyecto;

  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  return (
    <Fragment>
      <div className={`${cargando ? "animate-pulse" : ""} flex justify-between`}>
        <h1 className='font-black text-4xl'>{nombre}</h1>
        <div className='flex items-center gap-2 text-gray-400 hover:text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
            />
          </svg>
          <Link to={`/proyectos/editar/${id}`} className='uppercase font-bold'>
            Editar
          </Link>
        </div>
      </div>
      <div></div>
      <button
        onClick={handleModalTarea}
        type='button'
        className='text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white text-center mt-5 flex gap-2 items-center justify-center'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        Nueva Tarea
      </button>
      <p className='font-bold text-xl mt-10'>Tareas del proyecto</p>
      <div className='bg-white shadow mt-10 rounded-lg'>
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => <Tarea key={tarea._id} tarea={tarea} />)
        ) : (
          <p className='text-center my-5 p-10'>No hay tareas en este proyecto</p>
        )}
      </div>
      <ModalFormularioTarea />
      <ModalEliminarTarea />
    </Fragment>
  );
};
