import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

const routes = [
    {
  path: "/",
  element: <NavBar />,
  errorElement: <ErrorPage />,
  children:[
    { path: "", element: <Home /> },
    { path: "/directors", element: <Directors /> },
    { path: "/actors", element: <Actors /> },
    { path: "/movie/:id", element: <Movie /> },
    { path: "*", element: <NotFound /> },
  ],
 
}
  ];

export default routes;