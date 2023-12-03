import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//importing all Pages
import PropertiesOverview from "./pages/PropertiesOverview.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import Start from "./pages/Start";
import { ChakraProvider } from "@chakra-ui/react";
import NearbyProperties from "./pages/NearbyProperties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
    children: [
      {
        path: "/properties",
        element: <PropertiesOverview />,
        loader: async () => {
          return fetch("http://localhost:8000/properties/");
        },
      },

      {
        path: "/properties/near-by",
        element: <NearbyProperties />,
        loader: async ({ params, request }) => {
          console.log(request);
          return fetch(
            "http://localhost:8000/properties/near-by?lng=53.573&lat=9.9517&distance=5000"
          );
        },
      },
      {
        path: "/properties/:id",
        element: <PropertyDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:8000/properties/${params.id}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
