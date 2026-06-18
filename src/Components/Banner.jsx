import { Link } from 'react-router';
import bannerImg from '../assets/f762d0288740cb48ef40fc9550f995f3.jpg'
import { HiArrowSmallRight } from "react-icons/hi2";

const Banner = () => {
    return (
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${bannerImg})`,
    // backgroundSize: "contain", // or "cover"
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">The Local <span className='text-orange-400'>Food</span> Lover Network </h1>
      <p className="mb-5">
        This platform connects food enthusiasts who love exploring local restaurants, street food, or home-cooked meals. Users can share their food experiences, post reviews with photos, and discover what others are enjoying nearby. It’s a community-driven platform that celebrates great food, honest opinions, and local flavor.

      </p>
      <Link to={'/allreview'} className="btn btn-primary bg-[#dc6601] border-0 transition-opacity hover:opacity-80 "
  >See All Review <HiArrowSmallRight />
</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;