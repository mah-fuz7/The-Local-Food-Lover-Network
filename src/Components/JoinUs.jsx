import joinusimg from "../assets/indian room.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
const JoinUs = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 my-10">
      <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden">
        {/* Image */}
        <figure className="lg:w-1/2">
          <img
            src={joinusimg}
            alt="Join Us"
            className="w-full h-64 lg:h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body lg:w-1/2 flex flex-col justify-center lg:mt-[15%]">
          <h2 className="card-title text-4xl font-bold lg:text-4xl">
            Join The Local Food Lovers Network
          </h2>

          <p className="text-base-content/70 text-lg">
            Discover amazing local restaurants, share your food experiences,
            write reviews, and connect with fellow food enthusiasts. Be part
            of a growing community that celebrates great food and authentic
            dining experiences.
          </p>

          {/* Button Bottom Right */}
          <div className="card-actions justify-end mt-auto pt-6">
            <button className="btn btn-warning">
              Join Now<MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;