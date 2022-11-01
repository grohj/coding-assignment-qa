import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "./Main";
import Welcome from "./Welcome";
import Header from "./Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: '/welcome',
        element: <Welcome/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} >
      </RouterProvider>
  </React.StrictMode>
);
