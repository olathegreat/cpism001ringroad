import React, { useEffect, useState } from "react";
import "./StudentDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import LoaderImg from "../assets/loader.gif";
import { Bounce, toast } from "react-toastify";

const StudentDetailsPage = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    async function getStudentDetails() {
      try {
        setShowLoader(true);
        const res = await fetch(
          `https://6accafd8b406cb8ec0c64fdd.mockapi.io/students/${id}`,
        );

        const data = await res.json();

        console.log(data);
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
        setShowLoader(false);

        setStudent(data);
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

    getStudentDetails();
  }, []);
  return (
    <>
      {showLoader === true ? (
        <img src={LoaderImg} />
      ) : (
        <div className="student-detail">
          <button onClick={() => navigate(-1)}>Go back</button>
          <h4>
            {student.firstname} {student.surname}
          </h4>
          <img src={student.profileImg} alt="" />
          <p>Firstname: {student.firstname}</p>
          <p>Surname: {student.surname}</p>
          <p>Middlename: {student.middlename}</p>
          <p>Bio: {student.bio}</p>
          <p>Email: {student.email}</p>
          <p>Phone number: {student.phoneNumber}</p>
          <p>Program: {student.program}</p>
          <p>Gender: {student.gender}</p>
          <p>Address: {student.address}</p>
          <p>Nationality: {student.nationality}</p>
          <p>State Of Origin: {student.stateOfOrigin}</p>

          <p>DateOfBirth: {student.dateOfBirth}</p>
        </div>
      )}
    </>
  );
};

export default StudentDetailsPage;
