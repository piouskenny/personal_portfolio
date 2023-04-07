import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/pages/createPost";
import UpdatePost from "./components/pages/updatePost";
import App from "./App";
import "./index.css";
import Errorpage from "./components/errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admin_create/piouskenny/create/encrypt",
    element: <CreatePost/>
  },

  {
    path: "/admin_update/piouskenny/update/encrypt",
    element: <UpdatePost/>
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
