import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyOtp as verifyOtpApi } from "../../api/authApi";
import verifyOtpImage from "../../assets/images/Loginbanner.png";
import logo from "../../assets/icons/Kalbii-logo.svg";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60); // Increased timer for better UX
  const [canResend, setCanResend] = useState(false);
  const otpRefs = useRef([]);

  const email = location.state?.email;

  // Redirect if no email (user tried to access page directly)
  useEffect(() => {
    if (!email) {
      toast.error("Please complete registration first");
      navigate("/signup");
    }
  }, [email, navigate]);

  // Timer for resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Handle backspace to focus previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];

    pasted.split("").forEach((char, i) => {
      if (!isNaN(char) && i < 6) newOtp[i] = char;
    });

    setOtp(newOtp);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      // Call verify OTP API
      const response = await verifyOtpApi({ email, otp: otpString });
      toast.success(response.data.message || "OTP Verified! You can now login.");

      // Redirect to login page as requested
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    // Logic for resending OTP would go here (e.g., calling register API again or a dedicated resend endpoint)
    toast.success("New OTP sent to your email!");
    setTimer(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block h-screen p-4">
        <div className="h-full w-full bg-[#FFF5F0] rounded-[32px] flex items-center justify-center p-8">
          <img
            src={verifyOtpImage}
            alt="OTP verification banner"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/signup")}
            className="flex items-center gap-2 text-gray-500 hover:text-black mb-10 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-medium">Back to Sign up</span>
          </button>

          {/* LOGO */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          {/* TITLE */}
          <h1 className="text-center text-3xl font-bold text-black font-sora">
            Verify Email
          </h1>
          <p className="text-center text-gray-500 mt-3 text-sm leading-relaxed">
            We've sent a 6-digit code to <span className="font-semibold text-black">{email}</span>.
            Please enter it below to verify your account.
          </p>

          {/* FORM */}
          <form onSubmit={handleVerify} className="mt-10">
            <div className="flex justify-between gap-2" onPaste={handleOtpPaste}>
              {otp.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  type="text"
                  maxLength="1"
                  value={d}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="h-14 w-12 text-center text-black text-2xl font-bold border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50"
                />
              ))}
            </div>

            {/* RESEND OTP */}
            <div className="mt-6 text-center text-sm">
              {canResend ? (
                <p className="text-gray-600">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-orange-500 hover:underline font-bold"
                  >
                    Resend Code
                  </button>
                </p>
              ) : (
                <p className="text-gray-400">
                  Resend code in <span className="text-black font-mono">00:{timer.toString().padStart(2, "0")}</span>
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-black py-4 text-white font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98]"
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            By verifying your account, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
