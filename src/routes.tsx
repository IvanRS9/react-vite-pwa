import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Busqueda from "./Components/Busqueda";
import path from "path";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Busqueda />
    }
]);