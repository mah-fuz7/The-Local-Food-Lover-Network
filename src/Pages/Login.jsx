import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const { login, setUser, forgotPassword, signInWithGoogle } =
    useAuth();

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // HANDLE GOOGLE LOGIN
  const handlegoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await login(email, password);

      setUser(result.user);

      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch {
      toast.error("Login Failed");
    }
  };

  // HANDLE FORGOT PASSWORD
  const handleForgotPassword = async () => {
    if (!email) {
      return toast.error("Enter Your Email First");
    }

    try {
      await forgotPassword(email);
      toast.success("Password Reset Email Sent");
    } catch {
      toast.error("Failed to Send Reset Email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-base-content mb-2">
          Login
        </h2>

        <p className="text-sm text-center text-base-content/70 mb-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-warning hover:underline"
          >
            Register Now
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
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

          <div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-warning hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-full"
          >
            Log In
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handlegoogleLogin}
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

export default Login;