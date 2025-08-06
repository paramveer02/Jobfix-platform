import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { About } from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <HomeLayout /> },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
