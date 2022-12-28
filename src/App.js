<<<<<<< HEAD
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
=======
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
>>>>>>> cd825e12c502a1ee7ccc5c6dc1034d6380defd4c

function App() {
  return (
    <div className="App min-h-screen bg-primary-color">
      <RouterProvider router={router}></RouterProvider>
<<<<<<< HEAD
      <Toaster />
=======
>>>>>>> cd825e12c502a1ee7ccc5c6dc1034d6380defd4c
    </div>
  );
}

export default App;
