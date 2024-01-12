import routers from "./routers";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
      <Toaster />
    </>
  );
};

export default App;
