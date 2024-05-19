import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const VerifyEmail = () => {
  const navigate = useNavigate();
  const getParams = useParams();
  const getEmail = getParams.email;
  console.log(getEmail);
  const verificationHandler = async () => {
    try {
      const response = await axios.post(
        "https://intern-backend-1.onrender.com/api/auth/verify",
        {
          email: getEmail,
        }
      );
      console.log(response);
      if (response) navigate("/login", { replace: true });
    } catch (error) {
      alert("verificaion failed");
      console.log(error);
      navigate("/signup");
    }
  };
  return (
    <>
      <div className="h-96 w-auto flex justify-center items-center ">
        <div className="m-2 border h-80 bg-slate-200 p-2 w-1/2 flex justify-center items-center rounded-md">
          <button
            onClick={verificationHandler}
            className="bg-green-400 p-2 w-32 rounded-md font-bold"
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};
export default VerifyEmail;
