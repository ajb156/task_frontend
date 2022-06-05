import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando";
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
