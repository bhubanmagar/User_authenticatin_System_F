import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/", { replace: true });
    localStorage.removeItem("acessToken");
  };
  return (
    <>
      <div className="w-auto p-3  flex justify-between items-center bg-slate-200 mb-9 ">
        <div className="font-bold ml-11  ">
          <Link to="/">Home</Link>
        </div>
        <div className="mr-11">
          {localStorage.getItem("acessToken") ? (
            <>
              <div className="font-bold m-2 cursor-pointer">
                <button onClick={logoutHandler}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <div className="m-2 cursor-pointer">login</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
