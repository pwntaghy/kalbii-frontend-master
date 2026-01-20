import axiosBaseUrl from "./axiosBaseUrl";

//signup name email number password
export const registerUser = (data) => {
  return axiosBaseUrl.post("/auth/register", {
    name: data.name,
    email: data.email,
    number: data.phone,
    password: data.password,
  });
};

//veryfy otp body email,otp
export const verifyOtp = (data) => {
  return axiosBaseUrl.post("/auth/verify-otp", {
    email: data.email,
    otp: data.otp,
  });
};

//login email password
export const loginUser = (data) => {
  return axiosBaseUrl.post("/auth/login", {
    email: data.email,
    password: data.password,
  });
};

//forgot password
export const forgotPassword = (data) => {
  return axiosBaseUrl.post("/auth/forgot-password", {
    email: data.email,
  });
};

//reset pasword
export const resetPassword = (data) => {
  return axiosBaseUrl.post("/auth/reset-password", {
    token: data.token,
    password: data.password,
  });
};
