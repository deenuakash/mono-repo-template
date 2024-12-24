import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout, Track } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/track",
          element: <Track />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
