import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "routes/Error";
import About from "routes/About";
import Intro from "routes/Intro";
import Portfolio from "routes/Portfolio";
import Contact from "routes/Contact";
import { loader as rootLoader, action as rootAction } from "components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        loader: rootLoader,
        action: rootAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
