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
import PrivareRoute from "../Private/PrivareRoute";

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
            element:<PrivareRoute>
                <AddReview></AddReview>
            </PrivareRoute>
        },
        {
            path:"myreview",
            element:<PrivareRoute>
                <MyReview></MyReview>
            </PrivareRoute>
        },
        {
            path:"favorite",
            element:<PrivareRoute>
                <Favorite></Favorite>
            </PrivareRoute>
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
            path:"editreview/:id",
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