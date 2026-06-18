import newsletterbg from "../assets/Newsletterbg2.jpg";
import { MdOutlineMail } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div
      className="hero min-h-[80vh] my-16 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${newsletterbg})`,
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-white">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-3">
            Subscribe to Our Newsletter
          </h2>

          <p className="mb-6 text-gray-200">
            Get the latest food recommendations, local restaurant updates, and
            exclusive offers delivered straight to your inbox.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full text-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full text-black"
              required
            />

            <button
              type="submit"
              className="btn btn-warning w-full text-lg"
            >
             <MdOutlineMail />
 Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;