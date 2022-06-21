import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clienteAxiosToken } from "../helpers/axios";

const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [cargando, setCargando] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  const [proyecto, setProyecto] = useState({});
  const [tarea, setTarea] = useState({});
  const [modalFormularioTarea, setModalFormularioTarea] = useState(false);
  const [modalEliminarTarea, setModalEliminarTarea] = useState(false);
  const [colaborador, setColaborador] = useState({});
  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
  };

  const obtenerProyectos = async () => {
    try {
      const { data } = await clienteAxiosToken.get("/proyectos");
      setProyectos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, []);

  const submitProyecto = async (proyecto) => {
    if (proyecto.id) {
      editarProyecto(proyecto);
    } else {
      nuevoProyecto(proyecto);
    }
  };

  const nuevoProyecto = async (proyecto) => {
    try {
      const { data } = await clienteAxiosToken.post("/proyectos", proyecto);
      setProyectos([...proyectos, data]);
      navigate("/proyectos");
      toast.success("Creado Correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  const editarProyecto = async (proyecto) => {
    try {
      const { data } = await clienteAxiosToken.put(`/proyectos/${proyecto.id}`, proyecto);
      const proyectosActualizados = proyectos.map((proyecto) =>
        proyecto._id === data._id ? data : proyecto
      );
      setProyectos(proyectosActualizados);
      navigate("/proyectos");
      toast.success(`${data.nombre}, editado correctamente`);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProyecto = async (id) => {
    setCargando(true);
    try {
      const { data } = await clienteAxiosToken.get(`/proyectos/${id}`);
      setProyecto(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  const eliminarProyecto = async (id) => {
    try {
      await clienteAxiosToken.delete(`/proyectos/${id}`);

      const proyectosActualizados = proyectos.filter((proyecto) => proyecto._id !== id);
      setProyectos(proyectosActualizados);
      navigate("/proyectos");
      toast.success(`Eliminado correctamente`);
    } catch (error) {}
  };

  /** Funcion que cambia el estado del modal */
  const handleModalTarea = () => {
    setModalFormularioTarea(!modalFormularioTarea);
  };

  const submitTarea = async (tarea) => {
    if (tarea?._id) {
      await editarTarea(tarea);
    } else {
      await crearTarea(tarea);
    }
  };

  const crearTarea = async (tarea) => {
    try {
      const { data } = await clienteAxiosToken.post("/tareas", tarea);
      // Agrega la tarea al state
      const proyectoActualizado = { ...proyecto };
      proyectoActualizado.tareas = [...proyecto.tareas, data];
      setProyecto(proyectoActualizado);
      toast.success("Tarea creada correctamente");
      setModalFormularioTarea(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editarTarea = async (tarea) => {
    try {
      const { data } = await clienteAxiosToken.put(`/tareas/${tarea._id}`, tarea);
      console.log(data);
      const proyectoActualizado = { ...proyecto };
      proyectoActualizado.tareas = proyectoActualizado.tareas.map((tareaState) =>
        tareaState._id === data._id ? data : tareaState
      );
      setProyecto(proyectoActualizado);
      setAlerta({});
      setModalFormularioTarea(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalEditarTarea = (tarea) => {
    setTarea(tarea);
    setModalFormularioTarea(true);
  };

  const handleModalEliminarTarea = (tarea) => {
    setTarea(tarea);
    setModalEliminarTarea(!modalEliminarTarea);
  };

  const eliminarTarea = async () => {
    try {
      const { data } = await clienteAxiosToken.delete(`/tareas/${tarea._id}`);
      toast.success(data.msg);

      const proyectoActualizado = { ...proyecto };
      proyectoActualizado.tareas = proyectoActualizado.tareas.filter(
        (tareaState) => tareaState._id !== tarea._id
      );
      setProyecto(proyectoActualizado);
      setModalEliminarTarea(false);
      setTarea({});
    } catch (error) {
      console.log(error);
    }
  };

  const submitColaborador = async (email) => {
    setCargando(true);
    try {
      const { data } = await clienteAxiosToken.post(`/proyectos/colaboradores/`, { email });
      setColaborador(data);
      setAlerta({});
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
    setCargando(false);
  };

  const agregarColaborador = async(email) => {
    try {

    } catch (error) {
      
    }
  }

  return (
    <ProyectoContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto,
        modalFormularioTarea,
        handleModalTarea,
        submitTarea,
        handleModalEditarTarea,
        tarea,
        modalEliminarTarea,
        handleModalEliminarTarea,
        eliminarTarea,
        submitColaborador,
        colaborador,
        agregarColaborador
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoContext;
