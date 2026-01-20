import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";
import toast from "react-hot-toast";
import signupImage from "../../assets/images/Loginbanner.png";
import logo from "../../assets/icons/Kalbii-logo.svg";
import Google from "../../assets/icons/google-icon.svg";
import xicon from "../../assets/icons/x-icon.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.number.length !== 10) {
      newErrors.number = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await registerUser(formData);
      toast.success(response.data.message || "Registration successful! Please verify OTP.");
      // Redirect to Verify OTP page with email
      navigate("/verify-otp", { state: { email: formData.email } });
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block h-screen p-4">
        <img
          src={signupImage}
          alt="Signup banner"
          className="h-full w-full object-contain rounded-[32px]"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="flex justify-center">
            <img src={logo} alt="Company logo" className="h-10" />
          </div>

          <h1 className="mt-8 text-center text-3xl font-bold text-black font-sora">
            Sign up
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Register now and explore it now!
          </p>

          {/* <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <img src={xicon} alt="X" className="h-5 w-5" />
            </button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <img src={Google} alt="Google" className="h-5 w-5" />
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px w-full bg-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px w-full bg-gray-300" />
          </div> */}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                type="text"
                maxLength={10}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter 10 digit phone number"
              />
              {errors.number && (
                <p className="mt-1 text-xs text-red-500">{errors.number}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-orange-500 hover:underline">
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
