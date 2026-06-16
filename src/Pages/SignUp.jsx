import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const {
    signInWithGoogle,
    registerUser,
    updateUserProfile,
    setUser,
    user,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // HANDLE GOOGLE SIGN IN
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      toast.success("Log in success");
    });
  };

  // HANDLE EMAIL PASSWORD SIGN UP
  const handleEmailPassSignIn = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const url = e.target.url.value;

    console.log({
      name,
      email,
      password,
      url,
      confirmPassword,
    });

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const result = await registerUser(email, password);

      await updateUserProfile(name, url);

      // Update local state instantly
      setUser({
        ...result.user,
        displayName: name,
        photoURL: url,
      });

      console.log(user);

      toast.success("Sign Up Successfully");
      e.target.reset();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Register Now!
          </h2>

          <p className="text-sm text-center text-gray-500 mb-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 hover:underline"
            >
              Login Now
            </Link>
          </p>

          <form
            onSubmit={handleEmailPassSignIn}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            <input
              type="text"
              name="url"
              placeholder="Image URL"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                name="confirmPassword"
                type={
                  showConfirmPassword ? "text" : "password"
                }
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;