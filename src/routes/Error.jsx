import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
