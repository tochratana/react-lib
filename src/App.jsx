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
import ProductDetail from "./pages/getting-start/ProductDetail";
import { FillInTheBlank } from "./pages/exercises/FillInTheBlank";
import ImageTTS from "./pages/sound/ImageTTS";

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
        path: "/product:id",
        element: <ProductDetail />,
      },
      {
        path: "/products",
        element: <ProductCard />,
      },
      {
        path: "/signleproduct",
        element: <FetchSingleProduct />,
      },
      {
        path: "/soundtts",
        element: <ImageTTS />,
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
  {
    path: "/fillintheblank",
    element: <FillInTheBlank />,
  },
]);

export default router;
