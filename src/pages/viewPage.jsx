import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
const ViewPage = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const getParams = useParams();
  const getID = getParams.id;
  const viewHandler = async () => {
    try {
      const response = await axios.get(
        `https://intern-backend-1.onrender.com/api/auth/profile/${getID}`
      );
      const getData = response.data.data;
      setProfile(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(
        `https://intern-backend-1.onrender.com/api/auth/profile/${getID}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("acessToken")}`,
          },
        }
      );
      alert("Sucessfully deleted");
      navigate("/", { replace: true });
    } catch (error) {
      alert("Unauthorized!");
      console.log(error.message);
    }
  };

  useEffect(() => {
    viewHandler();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full h-52 border flex justify-center items-center m-2">
        <div className="container m-2 p-2">
          <h1 className="font-bold text-xl">Profile Information:</h1>
          <hr />
          <strong>Name: </strong>
          {profile.name}
          <br />
          <strong>Email:</strong>
          {profile.email}
          <br />
          <strong>CreatedAt:</strong>
          {profile.createdAt}
        </div>
      </div>
      <div>
        {localStorage.getItem("acessToken") ? (
          <>
            {" "}
            <Link to={`/update/${getID}`}>
              <button className="bg-green-400 m-2 p-2 w-28 rounded-md">
                Edit
              </button>
            </Link>
          </>
        ) : (
          <></>
        )}
        {localStorage.getItem("acessToken") ? (
          <>
            <button
              className="bg-red-400 m-2 p-2 w-28 rounded-md"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ViewPage;
