import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
<<<<<<< HEAD
import Addtask from "../Pages/Addtask/Addtask";
import Completedtask from "../Pages/Completedtask/Completedtask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";
=======
import Completedtask from "../Pages/Completedtask/Completedtask";
import Home from "../Pages/Home/Home";
>>>>>>> cd825e12c502a1ee7ccc5c6dc1034d6380defd4c

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
<<<<<<< HEAD
      {
        path: "/addtask",
        element: (
          <Privateroute>
            <Addtask></Addtask>
          </Privateroute>
        ),
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
=======
    ],
  },
>>>>>>> cd825e12c502a1ee7ccc5c6dc1034d6380defd4c
]);
