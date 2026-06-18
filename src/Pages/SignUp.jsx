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
      toast.success("Login successful");
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

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const result = await registerUser(email, password);

      await updateUserProfile(name, url);

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
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-base-content mb-4">
          Register Now!
        </h2>

        <p className="text-sm text-center text-base-content/70 mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-warning hover:underline"
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
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="url"
            placeholder="Image URL"
            className="input input-bordered w-full"
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-12"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input input-bordered w-full pr-12"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-full"
          >
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;