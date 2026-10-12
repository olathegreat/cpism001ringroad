import React, { useEffect, useState } from "react";
import "./StudentsReg.css";

const StudentsReg = () => {
  const [studentInfo, setStudentInfo] = useState({
    surname: "",
    firstname: "",
    middlename: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "Afghanistan",
    stateOfOrigin: "",
    program: "",
    profileImg: "",
    address: "",
    bio: "",
  });

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
    console.log(studentInfo.nationality);

    async function getAllStates() {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: studentInfo.nationality,
          }),
        },
      );

      const data = await res.json();
      setStudentStates(data.data.states);

      console.log(data);
    }

    getAllStates();
  }, [studentInfo.nationality]);

  const formSubmit = async (e)=>{
    e.preventDefault();
    console.log(studentInfo)

    const res = await fetch("https://6accafd8b406cb8ec0c64fdd.mockapi.io/students", {
        method:"POST",
        body: JSON.stringify(studentInfo)
    });

    console.log("successful")

  }

  return (
    <div className="students-reg">
      <h3>Register a new student</h3>
      <p>Input the correct details of the student below</p>

      <form onSubmit={formSubmit}>
        <div className="input-group">
          <label>Surname</label>
          <input
            type="text"
            placeholder="Your surname"
            required
            value={studentInfo.surname}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, surname: e.target.value })
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
            value={studentInfo.firstname}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, firstname: e.target.value })
            }
          />
          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>Middlename</label>
          <input
            type="text"
            placeholder="Your middlename"
            value={studentInfo.middlename}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, middlename: e.target.value })
            }
          />
          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email e.g johndoe@gmail.com"
            required
            value={studentInfo.email}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, email: e.target.value })
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
            value={studentInfo.phoneNumber}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, phoneNumber: e.target.value })
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
            value={studentInfo.dateOfBirth}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, dateOfBirth: e.target.value })
            }
          />
          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>Gender:</label>
          <select
            required
            value={studentInfo.gender}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, gender: e.target.value })
            }
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>Nationality:</label>
          <select
            required
            value={studentInfo.nationality}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, nationality: e.target.value })
            }
          >
            {countries.map((item) => (
              <option>{item.country}</option>
            ))}
          </select>

          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>State of Origin:</label>
          <select
            required
            value={studentInfo.stateOfOrigin}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, stateOfOrigin: e.target.value })
            }
          >
            {studentStates.map((item) => (
              <option>{item.name}</option>
            ))}
          </select>

          <div className="error"></div>
        </div>

        <div className="input-group">
          <label>Program:</label>
          <select
            required
            value={studentInfo.program}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, program: e.target.value })
            }
          >
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
            value={studentInfo.profileImg}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, profileImg: e.target.value })
            }
          />
          <div className="error"></div>
        </div>
         <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Type in your address"
            
            value={studentInfo.address}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, address: e.target.value })
            }
          />
          <div className="error"></div>
        </div>

         <div className="input-group">
          <label>Your Bio:</label>

          <textarea
          
            placeholder="Say something about you"
            required
            value={studentInfo.bio}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, bio: e.target.value })}
          
          />
        
          <div className="error"></div>
        </div>

        <button>Register Students</button>
      </form>
    </div>
  );
};

export default StudentsReg;
