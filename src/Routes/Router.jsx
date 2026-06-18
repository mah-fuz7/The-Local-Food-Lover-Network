import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllReview from "../Pages/AllReview";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Favorite from "../Pages/Favorite";
import EditReview from "../Pages/EditReview";
import ReviewDetails from "../Pages/ReviewDetails";

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
            element:<Favorite></Favorite>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"editreview",
            element:<EditReview></EditReview>
        },
        {
            path:"reviewdetails/:id",
            element:<ReviewDetails></ReviewDetails>
        },
    ]
 }
]);
export default router