import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Fetch from "./pages/getting-start/Fetch";
import Text from "./pages/getting-start/Text";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/fetch",
        element: <Fetch />,
      },
      {
        path: "/text",
        element: <Text />,
      },
    ],
  },
]);

export default router;
