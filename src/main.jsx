import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  About,
  Contact,
  contactLoader,
  Error,
  Intro,
  Portfolio,
  rootAction,
  rootLoader,
} from 'routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contacts',
        element: <Contact />,
        loader: rootLoader,
        action: rootAction,
      },
      {
        path: 'contacts/:id',
        element: <Contact />,
        loader: contactLoader,
        action: rootAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
