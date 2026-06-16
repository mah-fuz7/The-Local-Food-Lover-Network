import { Link } from 'react-router';
import errorImg from '../assets/error.png'
import { IoHomeOutline } from "react-icons/io5";
const Error = () => {
    return (
     <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${errorImg})`,
    backgroundSize: "contain", // or "cover"
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    
      <Link to={'/'} className="btn btn-primary bg-[#dc6601] border-0 transition-opacity hover:opacity-80 "
  ><IoHomeOutline />Back to Home</Link>
    </div>
  </div>
</div>
    );
};

export default Error;