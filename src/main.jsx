import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Remove duplicate import
import store from "./app/store";
import  router  from "./App"; // Make sure the router is properly exported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
