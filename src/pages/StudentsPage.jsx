import React, { useEffect, useState } from "react";
import "./StudentsPage.css";
import StudentCard from "../components/StudentCard";
import { Bounce, toast } from "react-toastify";

import LoaderImg from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";

const StudentsPage = () => {
  const [studentsArray, setStudentsArray] = useState([]);

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllStudents() {
      try {
        setShowLoader(true);
        const res = await fetch(
          "https://6accafd8b406cb8ec0c64fdd.mockapi.io/students",
        );

        const data = await res.json();

        console.log(data);

        setStudentsArray(data);
        setShowLoader(false);

        toast.success("fetch successful", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } catch (err) {
               toast.error("fetch unsuccessful,reload", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
         setShowLoader(false);
         console.log(err);

      }
    }

    getAllStudents();
  }, []);
  return (
    <div className="students-page">
      <h3>All students in my school </h3>

      {showLoader === true ? (
        <img src={LoaderImg} />
      ) : (
        <div className="students-wrapper">
          {studentsArray.map((item) => (
            <StudentCard
              name={item.firstname + " " + item.surname}
              img={item.profileImg}
              bio={item.bio}
              program={item.program}
              gender={item.gender}
              id={item.id}
            />
          ))}
        </div>
      )}

      <button onClick={()=>navigate("/create-students")}>Register student</button>
    </div>
  );
};

export default StudentsPage;
