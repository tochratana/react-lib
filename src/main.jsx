import ReactDom from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import App from "./App";
import { Provider } from "react-redux";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
