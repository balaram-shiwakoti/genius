import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import USerDetail from "./page/UserDetail.tsx";
import DataVisualisation from "./page/DataVisualisation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:id",
    element: <USerDetail />,
  },
  {
    path: "/visualization",
    element: <DataVisualisation />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
