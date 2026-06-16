import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllReview from "../Pages/AllReview";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";

const router = createBrowserRouter([
 {
    path:"/",
    element:<Rootlayout></Rootlayout>,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"allreview",
            element:<AllReview></AllReview>
        },
        {
            path:"addreview",
            element:<AddReview></AddReview>
        },
        {
            path:"myreview",
            element:<MyReview></MyReview>
        },
        {
            path:"favorite",
            element:<favorite></favorite>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
        {
            path:"login",
            element:<login></login>
        },
    ]
 }
]);
export default router