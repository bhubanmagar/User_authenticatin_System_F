import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState();
  const navigate = useNavigate();
  const getParams = useParams();
  const getEmail = getParams.email;

  const updateHandler = async () => {
    try {
      if (!newPassword) throw "Password can't be empty";
      await axios.put(
        `https://intern-backend-1.onrender.com/api/auth/update-Password/${getEmail}`,
        {
          password: newPassword,
        }
      );
      alert("Password Chnged sucessfully!");
      navigate("/login", { replace: true });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {" "}
      <div className="h-96 w-auto flex justify-center items-center ">
        <div className="m-2 border h-80 bg-slate-200 p-2 w-1/2 flex justify-center items-center rounded-md">
          <input
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
            className="rounded-md m-2 "
            placeholder="New Password"
          />
          <br />
          <button
            onClick={updateHandler}
            className="bg-green-400 p-2 w-32 rounded-md font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
