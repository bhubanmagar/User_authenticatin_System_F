import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "../Components/login";
import Signup from "../Components/signup";
import MainPage from "../pages/mainPage";
import UpdatePage from "../pages/updatePage";
import ViewPage from "../pages/viewPage";
import Fpassword from "../pages/forgotPassword/forgotPassword";
import VerifyEmail from "../pages/verifyemail/verifyemail";
import OtpVerification from "../pages/forgotPassword/otpVerification/OtpVerification";
import UpdatePassword from "../pages/forgotPassword/updatePassword/updatePassword";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update-Password/:email" element={<UpdatePassword />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/forgot-password" element={<Fpassword />} />
          <Route path="/verify-otp/:email" element={<OtpVerification />} />
          <Route path="/users/:otp/verify/:email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
