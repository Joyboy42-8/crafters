import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout"
import Error from "./components/Error"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import Planning from "./pages/Planning"

const router = createBrowserRouter([
  {
    path: '/',
    Component: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/profil/:id",
        element: <Profil />
      },
      {
        path: "/planning",
        element: <Planning />
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}