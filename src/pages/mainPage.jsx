import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [getUser, setGetUser] = useState([]);
  //variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = getUser.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(getUser.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const getUserDetails = async () => {
    const response = await axios.get(
      "https://intern-backend-1.onrender.com/api/auth/profile"
    );
    const details = response.data.data;
    setGetUser(details);
  };

  //pagination handler functions
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <div>
          <table className="w-4/5">
            <thead>
              <tr className="m-2">
                <th className="w-96 ">S.N</th>
                <th className="w-96 ">Name</th>
                <th className="w-96">email</th>
              </tr>
            </thead>
            <tbody className="w-4/5">
              {record.map((e, i) => (
                <tr
                  className=" m-2 text-green-500 border text-center"
                  key={e._id}
                >
                  <td className="p-2 border m-2 ">{i}</td>
                  <td className="p-2 border m-2">{e.name}</td>
                  <td className="p-2 flex justify-between m-2">
                    {e.email}

                    <Link to={`/view/${e._id}`} className="m-2 p-2">
                      <MdOutlineRemoveRedEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination part */}
      <footer className="m-4 mt-10">
        <ul className="pagination flex gap-3">
          <li className="page-item">
            <a href="#" className="border p-2 rounded-md" onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className=" page-item" key={i}>
              <a
                href="#"
                className={`page-item ${
                  currentPage === n
                    ? "bg-gray-300 p-2 rounded-md m-2 ml-7 "
                    : ""
                }    `}
                onClick={() => changePage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              href="#"
              className="border p-2 rounded-md ml-7"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default MainPage;
