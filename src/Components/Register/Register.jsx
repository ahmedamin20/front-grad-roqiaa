import React, { useState } from "react";
import { useFormik } from "formik";
// import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import upload from "../../images/WhatsApp Image 2024-03-03 at 01.21.16_fdb15b85.jpg";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  let navigate = useNavigate();

  async function registerSubmit(values) {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "http://localhost:3000/api/signup",
        values
      );
      if (data.message === "User created successfully") {
        setLoading(false);
        navigate("/login");
      }
    } catch (err) {
      setApiError(err.response.data.message);
      setLoading(false);
    }
  }

  // let validationSchema = yup.object({
  //   name: yup
  //     .string()
  //     .required("Name is required")
  //     .min(3, "Minimum length is 3")
  //     .max(10, "Maximum length is 10"),
  //   email: yup.string().required("Email is required").email("Invalid email"),
  //   password: yup
  //     .string()
  //     .required("Password is required")
  //     /*.matches(/^[A-Z][a-z0-9]{3,30}$/, "Invalid password")*/,
  //   glove_id: yup
  //     .string()
  //     .required("ID is required")
  //     .matches(/^[0-9]{8}$/, "Invalid ID"),
  // });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      glove_id: ""},
    // ,
    // tionSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <div>
        <div className="w-75 hRegister mx-auto text-center d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 h-auto">
            <h4 className="fs-1 py-3 fw-light">
              Sign up to <span className="fw-medium">Comfy View</span>
            </h4>
            <p className="small py-2 text-secondary">
              Already have an account?{" "}
              <Link to={"/login"} className="text-primary text-decoration-none">
                Log in.
              </Link>
            </p>
            <div className="position-relative w-75 mx-auto">
              <p className="or text-secondary small">OR</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="row w-75 mx-auto pb-3 g-4">
              <div className="col-md-6 border-end border-1 borderColor d-flex justify-content-center">
                <div className="dotted py-3 cursor-pointer container w-100 m-0 bg-light flex-column d-flex justify-content-center align-items-center h-100 border border-2 rounded-3">
                  <p className="fs-5">Upload Photo</p>
                  <div className="w-25 mx-auto">
                    <img src={upload} className="w-75 mx-auto" alt="" />
                  </div>
                  <p className="fw-bold m-0 py-2">OR</p>
                  {loading ? (
                    <button
                      type="button"
                      className="btn btn-primary text-light"
                    >
                      <i className="fas fa-spinner fa-spin"></i>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary text-light py-1 px-2"
                    >
                      Open Camera
                    </button>
                  )}
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="w-100">
                    {apiError ? (
                      <div className="alert alert-danger">{apiError}</div>
                    ) : (
                      ""
                    )}

                    <div className="d-flex align-items-center mb-3">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text" // Change type to "text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        className="form-control w-100 rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.name && formik.touched.name ? (
                      <div className="alert alert-danger w-100 py-2">
                        {formik.errors.name}
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="d-flex align-items-center mb-3">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="form-control w-100 rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                      <div className="alert alert-danger w-100 py-2">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-items-center mb-3">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        className="form-control w-100 rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                      <div className="alert alert-danger w-100 py-2">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-items-center">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="id"
                        name="glove_id"
                        placeholder="glove Id"
                        id="glove_id"
                        className="form-control w-100 rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.id && formik.touched.id ? (
                      <div className="alert alert-danger w-100 py-2 mt-3">
                        {formik.errors.id}
                      </div>
                    ) : (
                      ""
                    )}
                </div>
              </div>
            </div>
            {loading ? (
                      <button
                        type="button"
                        className="btn btn-primary text-light"
                      >
                        <i className="fas fa-spinner fa-spin"></i>
                      </button>
                    ) : (
                      <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn btn-primary text-light rounded-5 py-2 px-3"
                      >
                        Sign Up
                      </button>
                    )}
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
