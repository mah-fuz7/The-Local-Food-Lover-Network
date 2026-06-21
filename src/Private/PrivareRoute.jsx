import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import { MoonLoader } from "react-spinners";

const PrivareRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading){
        return  <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm z-50">
<MoonLoader></MoonLoader>
                      </div>
    }
    if(!user){
        return(
            <Navigate to="/login"
            state={location}
            replace
            />
        )
    }
    return children ;
};

export default PrivareRoute;