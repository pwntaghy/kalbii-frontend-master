import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import loginImage from "../../assets/images/Loginbanner.png";
import logo from "../../assets/icons/Kalbii-logo.svg";
import Google from "../../assets/icons/google-icon.svg";
import xicon from "../../assets/icons/x-icon.svg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Changed from email to identifier
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // Send identifier (email or phone) to backend
      await login({ email, password });
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block h-screen p-4">
        <img
          src={loginImage}
          alt="Login banner"
          className="h-full w-full object-contain rounded-[32px]"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex h-screen items-center justify-center px-6 bg-white">
        <div className="w-full max-w-md">
          <div className="flex justify-center">
            <img src={logo} alt="Company logo" className="h-10" />
          </div>

          <h1 className="mt-8 text-center text-3xl font-bold text-black font-sora">
            Login
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Welcome Back! Please login
          </p>

          {/* <div className="mt-6 flex items-center justify-center gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <img src={xicon} alt="X" className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <img src={Google} alt="Google" className="h-5 w-5" />
            </button>
          </div> */}

          {/* <div className="my-6 flex items-center gap-4">
            <div className="h-px w-full bg-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px w-full bg-gray-300" />
          </div> */}

          <form onSubmit={handleLogin}>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/forgot-password" title="Forgot Password" className="font-medium text-orange-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" title="Log in" className="font-semibold text-orange-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
