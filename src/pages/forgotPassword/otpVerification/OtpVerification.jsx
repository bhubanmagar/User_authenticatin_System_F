import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const OtpVerification = () => {
  const getParams = useParams();
  const [getOtp, setGetOtp] = useState();
  const navigate = useNavigate();
  const getEmail = getParams.email;
  const verifyOTP = async () => {
    const response = await axios.get(
      `https://intern-backend-1.onrender.com/api/auth/get-profile/${getEmail}`
    );
    const getData = response.data.data;
    const orignalOtp = getData.forgetPasswordOTP;
    const check = getOtp === orignalOtp;
    if (!check) {
      alert("Otp doesn't match");
    } else {
      navigate(`/update-Password/${getEmail}`, { replace: true });
    }
    // console.log(orignalOtp);
    // console.log(getOtp);
  };
  return (
    <>
      <div className="h-96 w-auto flex justify-center items-center ">
        <div className="m-2 border h-80 bg-slate-200 p-2 w-1/2 flex justify-center items-center rounded-md">
          <input
            type="text"
            onChange={(e) => setGetOtp(e.target.value)}
            className="rounded-md m-2 "
            placeholder="OTP"
          />
          <br />
          <button
            onClick={verifyOTP}
            className="bg-green-400 p-2 w-32 rounded-md font-bold"
          >
            VERIFY
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
