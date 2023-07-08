import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home/home/Home';
import Single from './home/single/Single';
import Write from './home/write/Write';
import Settings from './home/settings/Settings';
import Login from './home/login/Login';
import Register from './home/registrer/Register';

import { createBrowserRouter, Route, RouterProvider  } from "react-router-dom";


const user = false;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "write",
        element: (user ? <Write /> : <Register />),
      },
      {
        path: "single",
        element: <Single />,
      },
      {
        path: "settings",
        element: (user ? <Settings /> : <Register />),
      },
      {
        path: "login",
        element: (user ? <Home /> : <Login />),
      },
      {
        path: "register",
        element: (user ? <Home /> : <Register />),
      },
      ],
    },
  ],
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
