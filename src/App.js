import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App min-h-screen bg-primary-color">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;