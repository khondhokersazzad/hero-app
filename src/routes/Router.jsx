import {
  createBrowserRouter,
  
} from "react-router";
import HomePageLayout from "../layout/HomePageLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
    ]
    
  },
]);

export default router;
