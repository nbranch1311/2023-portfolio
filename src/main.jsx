import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  About,
  Contact,
  contactAction,
  ContactLanding,
  contactLoader,
  ContactwID,
  deleteAction,
  editAction,
  EditContact,
  Error,
  Intro,
  Portfolio,
  singleContactLoader,
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
        path: 'contact',
        element: <Contact />,
        action: contactAction,
        loader: contactLoader,
        children: [
          { index: true, element: <ContactLanding /> },
          {
            path: '/contact/:contactId',
            element: <ContactwID />,
            loader: singleContactLoader,
          },
          {
            path: '/contact/:contactId/edit',
            element: <EditContact />,
            loader: singleContactLoader,
            action: editAction,
          },
          {
            path: '/contact/:contactId/delete',
            action: deleteAction,
            errorElement: (
              <div>{'Something went wrong with deleting that contact.'}</div>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
