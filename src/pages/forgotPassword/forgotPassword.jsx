import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Fpassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const otpHandler = async () => {
    try {
      const response = await axios.get(
        `https://intern-backend-1.onrender.com/api/auth/get-profile/${email}`
      );
      const getData = response.data.data;
      if (!getData) {
        alert("User doesn't exist");
      } else {
        await axios.post(
          "https://intern-backend-1.onrender.com/api/auth/forgot",
          {
            email: email,
          }
        );
        alert("opt send to your email");
        navigate(`/verify-otp/${email}`, { replace: true });
      }
    } catch (error) {
      alert("failed to send Email");
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-96 w-auto flex justify-center items-center ">
        <div className="m-2 border h-80 bg-slate-200 p-2 w-1/2 flex justify-center items-center rounded-md">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md m-2 "
            placeholder="enter your email"
          />
          <br />
          <button
            onClick={otpHandler}
            className="bg-green-400 p-2 w-32 rounded-md font-bold"
          >
            Send OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default Fpassword;
