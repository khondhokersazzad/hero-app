import {
  createBrowserRouter,
  
} from "react-router";
import HomePageLayout from "../layout/HomePageLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Install from "../pages/Install";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/apps",
        element: <Apps></Apps>
      },

      {
        path: "/apps",
        element: <Apps></Apps>
      },

      {
        path: "/install",
        element: <Install></Install>
      },

      
    ]
    
  },
]);

export default router;
