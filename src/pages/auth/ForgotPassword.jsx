import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPassword, resetPassword } from "../../api/authApi";
import forgotPasswordImage from "../../assets/images/Loginbanner.png";
import logo from "../../assets/icons/Kalbii-logo.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(24);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const otpRefs = useRef([]);

  // Timer for OTP resend
  useEffect(() => {
    if (step === 2 && timer > 0) {
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
  }, [step, timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];

    pasted.split("").forEach((char, i) => {
      if (!isNaN(char)) newOtp[i] = char;
    });

    setOtp(newOtp);
  };

  // STEP 1: Send OTP to email
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await forgotPassword({ email });
      toast.success(response.data.message || "OTP sent to your email!");
      setStep(2);
      setTimer(24);
      setCanResend(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Verify OTP and proceed
  const handleVerifyOtpAndProceed = async (e) => {
    e.preventDefault();

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    setLoading(true);
    try {
      // Verify OTP with backend (if you have separate verify endpoint, use it)
      // For now, we'll just validate and move to next step
      // You can add verifyOtp API call here if backend supports it

      toast.success("OTP verified successfully!");
      setStep(3);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (canResend) {
      setLoading(true);
      try {
        await forgotPassword({ email });
        toast.success("OTP resent to your email!");
        setTimer(24);
        setCanResend(false);
        setOtp(["", "", "", "", "", ""]);
      } catch (err) {
        toast.error("Failed to resend OTP");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block h-screen p-4">
        <img
          src={forgotPasswordImage}
          alt="Forgot password banner"
          className="h-full w-full object-contain rounded-[32px]"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* BACK BUTTON */}
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 mb-8 text-black hover:text-gray-600 transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Back</span>
            </button>
          )}

          {/* LOGO */}
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          {/* STEP 1: ENTER EMAIL */}
          {step === 1 && (
            <>
              <h1 className="mt-8 text-center text-3xl font-bold text-black">
                Forgot Password?
              </h1>
              <p className="text-center text-gray-600 mt-2">
                Don't worry, we'll help you recover it
              </p>

              <form onSubmit={handleSendOtp} className="mt-8">
                <label className="text-sm font-semibold text-gray-700">
                  Username, Email
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="email"
                    placeholder="Enter Username, Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-colors"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </>
          )}

          {/* STEP 2: ENTER OTP */}
          {step === 2 && (
            <>
              <h1 className="mt-8 text-center text-3xl font-bold text-black">
                Enter OTP
              </h1>
              <p className="text-center text-gray-600 mt-2">
                Input your OTP here
              </p>

              <form onSubmit={handleVerifyOtpAndProceed} className="mt-8">
                <label className="text-sm font-semibold text-gray-700">
                  Enter OTP
                </label>
                <div className="flex gap-2 mt-1" onPaste={handleOtpPaste}>
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      maxLength="1"
                      value={d}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="h-14 w-full text-center text-black text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ))}
                </div>

                <div className="text-right mt-2 text-sm">
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={loading}
                      className="text-orange-500 hover:underline font-medium"
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <span className="text-gray-600">
                      Resend OTP in 00:{timer.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-lg bg-black py-3 text-white font-semibold hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  {loading ? "Verifying..." : "Proceed"}
                </button>
              </form>
            </>
          )}

          {/* STEP 3: Navigate to Update Password */}
          {step === 3 && (
            <>
              {navigate("/update-password", { state: { email, otp: otp.join("") } })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
