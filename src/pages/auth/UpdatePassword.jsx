import { useState } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../../api/authApi";
import updatePasswordImage from "../../assets/images/Loginbanner.png";
import logo from "../../assets/icons/Kalbii-logo.svg";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const email = location.state?.email;
  const otp = location.state?.otp;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword({
        email,
        otp,
        newPassword: formData.password // Changed from password to newPassword
      });

      toast.success(response.data.message || "Password updated successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block h-screen p-4">
        <img
          src={updatePasswordImage}
          alt="Update password banner"
          className="h-full w-full object-cover rounded-[32px]"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-black hover:text-gray-600 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          {/* LOGO */}
          <div className="flex justify-center">
            <img src={logo} alt="Company logo" className="h-10" />
          </div>

          {/* TITLE */}
          <h1 className="mt-8 text-center text-3xl font-bold text-black">
            Update Password
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Create a strong and secure password
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8">
            {/* NEW PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* CONFIRM PASSWORD */}
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full text-black rounded-lg border border-gray-300 px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>


            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Updating..." : "Proceed"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;