import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home.jsx';
import Classic from './Components/ShowIcons/ShowIcons.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import { GlobalProvider } from './Context/GLobalProvider.jsx';
import AllIcons from './Components/AllIcons/AllIcons';
import ShowIcons from './Components/ShowIcons/ShowIcons.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <AllIcons></AllIcons>
      },
      {
        path: "/:id",
        element: <ShowIcons></ShowIcons>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
