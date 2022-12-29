import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addtask from "../Pages/Addtask/Addtask";
import Completedtask from "../Pages/Completedtask/Completedtask";
import Home from "../Pages/Home/Home";
import Updatetask from "../Pages/Home/Updatetask";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/completedtask",
        element: <Completedtask></Completedtask>,
      },
      {
        path: "/addtask",
        element: (
          <Privateroute>
            <Addtask></Addtask>
          </Privateroute>
        ),
      },
      {
        path: "/mytasks/:id",
        element: <Updatetask></Updatetask>,
        loader: ({ params }) =>
          fetch(` http://localhost:5000/mytasks/${params.id}`),
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
