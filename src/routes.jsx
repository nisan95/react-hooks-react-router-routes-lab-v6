import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import App from "./pages/App";

const routes = [
    {
  path: "/",
  element: <App />,
  children:[
    { path: "", element: <Home /> },
    { path: "/directors", element: <Directors /> },
    { path: "/actors", element: <Actors /> },
    { path: "/movie/:id", element: <Movie /> },
    { path: "*", element: <ErrorPage /> },
  ],
 
}
  ];

export default routes;