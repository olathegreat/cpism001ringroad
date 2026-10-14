import React, { useEffect, useState } from "react";
import "./StudentDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import LoaderImg from "../assets/loader.gif";
import { Bounce, toast } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";

const StudentDetailsPage = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      setShowLoader(true);
      console.log(student);
      const res = await fetch(
        `https://6accafd8b406cb8ec0c64fdd.mockapi.io/students/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        },
      );

      console.log("successful");
      setShowLoader(false);
      toast.success("update  successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setShowModal(false);
    } catch (err) {
      console.log(err);
      toast("update unsuccessful, try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setShowLoader(false);
      setShowModal(false);
    }
  };

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function getAllCountries() {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/",
      );
      const data = await response.json();

      console.log(data);
      setCountries(data.data);
    }

    getAllCountries();
  }, []);

  const [studentStates, setStudentStates] = useState([]);
  useEffect(() => {
    console.log(student.nationality);

    async function getAllStates() {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: student.nationality,
          }),
        },
      );

      const data = await res.json();
      setStudentStates(data.data.states);

      console.log(data);
    }

    getAllStates();
  }, [student.nationality]);

  const deleteFunction = async ()=>{

    try{
        setShowLoader(true);

          const res = await fetch(`https://6accafd8b406cb8ec0c64fdd.mockapi.io/students/${id}`,{
         method: "DELETE",
    })
     toast.success("student deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setShowLoader(false);
      navigate("/students");

    }catch(err){
        console.log(err);
          toast.error("student deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setShowLoader(false);




    }
  
  }

  return (
    <>
      {showLoader === true ? (
        <div className="student-detail-loader">
              <img src={LoaderImg} />
        </div>
        
      ) : (
        <section className="overall-wrapper">
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

             <div className="buttons-wrapper">


             
            <button onClick={()=>setShowModal(true)}>Update Details</button>
            <button onClick={deleteFunction} style={{background: "red",color: "white"}}>Delete Student</button>

            </div>
          </div>

          {
            showModal === true ? (
          <div className="update-popup">
            <div  className="cancel-wrapper">
                <span onClick={()=>setShowModal(false)}>
                     <MdOutlineCancel  />
                </span>
              

            </div>
            <div className="student-reg-scroll">

           
            <div className="students-reg">
              <h3>Update Student data</h3>
              <p>Edit any student info below</p>

              <form onSubmit={formSubmit}>
                <div className="input-group">
                  <label>Surname</label>
                  <input
                    type="text"
                    placeholder="Your surname"
                    required
                    value={student.surname}
                    onChange={(e) =>
                      setStudent({ ...student, surname: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Firstname</label>
                  <input
                    type="text"
                    placeholder="Your firstname"
                    required
                    value={student.firstname}
                    onChange={(e) =>
                      setStudent({ ...student, firstname: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Middlename</label>
                  <input
                    type="text"
                    placeholder="Your middlename"
                    value={student.middlename}
                    onChange={(e) =>
                      setStudent({ ...student, middlename: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    disabled
                    placeholder="Your email e.g johndoe@gmail.com"
                    required
                    value={student.email}
                    onChange={(e) =>
                      setStudent({ ...student, email: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone no e.g +2348169...."
                    required
                    value={student.phoneNumber}
                    onChange={(e) =>
                      setStudent({ ...student, phoneNumber: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Your dob  e.g johndoe@gmail.com"
                    required
                    value={student.dateOfBirth}
                    onChange={(e) =>
                      setStudent({ ...student, dateOfBirth: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Gender:</label>
                  <select
                    required
                    value={student.gender}
                    onChange={(e) =>
                      setStudent({ ...student, gender: e.target.value })
                    }
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Nationality:</label>
                  <select
                    required
                    value={student.nationality}
                    onChange={(e) =>
                      setStudent({ ...student, nationality: e.target.value })
                    }
                  >
                    <option value="">Select Your Country</option>
                    {countries.map((item) => (
                      <option value={item.country}>{item.country}</option>
                    ))}
                  </select>

                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>State of Origin:</label>
                  <select
                    required
                    value={student.stateOfOrigin}
                    onChange={(e) =>
                      setStudent({ ...student, stateOfOrigin: e.target.value })
                    }
                  >
                    <option value="">Select State</option>
                    {studentStates.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </select>

                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Program:</label>
                  <select
                    required
                    value={student.program}
                    onChange={(e) =>
                      setStudent({ ...student, program: e.target.value })
                    }
                  >
                    <option value="">Select your program</option>
                    <option>Cybersecurity</option>
                    <option>Data Science</option>
                    <option>Ethical hacking</option>
                    <option>Software dev</option>
                    <option>Design</option>
                  </select>

                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Profile Image</label>
                  <input
                    type="url"
                    placeholder="Upload your img on cloudinary and paste url"
                    required
                    value={student.profileImg}
                    onChange={(e) =>
                      setStudent({ ...student, profileImg: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>
                <div className="input-group">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Type in your address"
                    value={student.address}
                    onChange={(e) =>
                      setStudent({ ...student, address: e.target.value })
                    }
                  />
                  <div className="error"></div>
                </div>

                <div className="input-group">
                  <label>Your Bio:</label>

                  <textarea
                    placeholder="Say something about you"
                    required
                    value={student.bio}
                    onChange={(e) =>
                      setStudent({ ...student, bio: e.target.value })
                    }
                  />

                  <div className="error"></div>
                </div>

                <button>
                  {showLoader === true ? (
                    <img className="loader-img" src={Loader} alt="loader" />
                  ) : (
                    "Update Student"
                  )}
                </button>
              </form>
            </div>
             </div>
          </div>
            ) : ""
          }
        </section>
      )}
    </>
  );
};

export default StudentDetailsPage;
