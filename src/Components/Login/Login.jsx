import React, { useContext, useState } from "react";
import style from "./Login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext.js";
import Capture from './Capture';

export default function Login() {
  let { setUserToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  let navigate = useNavigate();
  const [showCapture, setShowCapture] = useState(false);

  async function loginSubmit(obj) {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "http://localhost:3000/api/signin",
        obj
      );
      if (data.message === "User signed in successfully") {
        navigate("/results");
      }
    } catch (err) {
      setApiError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  let validationSchema = yup.object({
    email: yup.string().required("Email is required").email("invalid email"),
    password: yup
      .string()
      .required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });

  const handleCapture = (photo) => {
    // Handle the photo capture logic
    console.log(photo);
    setShowCapture(false);
  };

  return (
    <>
      <div className="row login pb-3">
        <div className="col-md-12 p-0">
          <div className="container mb-0 mx-auto">
            <div
              className={`w-75 ${style.hRegister} mx-auto text-center d-flex flex-column justify-content-center align-items-center`}
            >
              <div className="h-auto">
                <h4 className="fs-1 fw-bold py-3">
                  We protect your information with Face-print SO Please{" "}
                </h4>
                <span 
                  className="text-primary cursor-pointer fs-5"
                  onClick={() => setShowCapture(true)}
                >
                  Open your Camera <i className="fa-solid fa-camera"></i><div> {showCapture && <Capture onCapture={handleCapture} />}</div>
                 
                </span>
                <p className="small py-2 text-secondary">
                  Not a user?{" "}
                  <Link
                    to={"/register"}
                    className="text-primary text-decoration-none"
                  >
                    Create an account.
                  </Link>
                </p>
                <div className="position-relative w-75 mx-auto">
                  <p className={`${style.or} text-secondary small`}>OR</p>
                </div>
                <div className="w-75 mx-auto">
                  <form onSubmit={formik.handleSubmit}>
                    {apiError ? (
                      <div className="alert alert-danger">{apiError}</div>
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
                        className="form-control w-75 mx-auto rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                      <div className="alert alert-danger w-75 mx-auto py-2">
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
                        className="form-control w-75 mx-auto rounded-5 py-2"
                      />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                      <div className="alert alert-danger w-75 mx-auto py-2">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}

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
                        Log In
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
