import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Fetch from "./pages/getting-start/Fetch";
import Text from "./pages/getting-start/Text";
import FetchSingleProduct from "./pages/getting-start/FetchSingleProduct";
import ReactHook from "./pages/getting-start/ReactHook";
import ProductCard from "./components/card/ProductCard";
import Dashboard from "./pages/dashboard/Dashboard";
import InputFill from "./pages/test/InputFill";
import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/react-hook",
        element: <ReactHook />,
      },
      {
        path: "/products",
        element: <ProductCard />,
      },
      {
        path: "/signleproduct",
        element: <FetchSingleProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/inputfill",
    element: <InputFill />,
  },
]);

export default router;
