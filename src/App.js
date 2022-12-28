import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const { color } = useContext(AuthContext);
  return (
    <div
      className={`App min-h-screen ${
        color ? "bg-primary-color" : "bg-gray-900"
      }`}
    >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
