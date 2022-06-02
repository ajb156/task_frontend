import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Fragment>
      <main className="container mx-auto mt-2 md:mt-2 p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
};
