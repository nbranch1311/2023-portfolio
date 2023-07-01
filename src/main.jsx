import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "routes/Error";
import About from "routes/About";
import Intro from "routes/Intro";
import Portfolio from "routes/Portfolio";
import Contact from "routes/Contact";
import { loader as rootLoader } from "components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
