import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./NewForm.css";
import { number, object, string } from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const userValidationSchema = object({
  name: string("Type a string").required("Name is required"),
  pic: string("Invalid")
    .url("Invalid Url")
    .required("Please you must add picture"),
  bio: string("Bio must be a text")
    .min(10, "Not up to 10")
    .required("Bio is required"),
});

function NewForm() {
  const { handleSubmit, handleChange, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        name: "",
        pic: "",
        bio: "",
      },
      onSubmit: (newUser) => {
        addUser(newUser);
      },
      validationSchema: userValidationSchema,
    },
  );
  const navigate = useNavigate();
  const addUser = async (newUser) => {
    console.log(newUser);

    try {
      const res = await fetch(
        "https://6accafd8b406cb8ec0c64fdd.mockapi.io/Users",
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      toast.success("You are successful");
      navigate("/students");
    } catch (err) {
      toast.error("Not successful");
    }
  };

  return (
    <section>

         <div className="swiper-container-relative">

      
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="my-own-style">Daniel</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="my-own-style">Henry</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="my-own-style">Stella</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="my-own-style">Temi</div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="my-own-style">Sewa</div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="my-own-style">Olamide</div>
        </SwiperSlide>
        ...

         <div className="custom-nav-container">
          <div className="custom-prev">←</div>
          <div className="custom-next">→</div>
        </div>
      </Swiper>

         </div>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="input-group">
          <label>Name:</label>

          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          {touched.name && errors.name ? (
            <p className="error-msg">{errors.name}</p>
          ) : null}
        </div>

        <div className="input-group">
          <label>Picture:</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="pic"
            type="text"
            placeholder="Profile Pic Url"
          />
          {touched.pic && errors.pic ? (
            <p className="error-msg">{errors.pic}</p>
          ) : null}
        </div>

        <div className="input-group">
          <label>Bio:</label>

          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="bio"
            type="text"
            placeholder="Bio"
          />
          {touched.bio && errors.bio ? (
            <p className="error-msg">{errors.bio}</p>
          ) : null}
        </div>
        <button type="submit">Add user</button>
      </form>
    </section>
  );
}

export default NewForm;
