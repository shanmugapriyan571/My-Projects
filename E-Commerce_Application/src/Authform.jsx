import React, { useState } from "react";
import "./Authform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  userId: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "User ID must be alphanumeric")
    .required("User ID is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, and include at least one letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function Authform() {
  const navigate = useNavigate();
  const handleSignUp = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          // Handle successful login
          navigate("RootLayout");
        } else {
          alert(data.message);
        }
      } else {
        const text = await response.text();
        console.error("Server response is not JSON:", text);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active bg-warning" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active bg-warning" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <Formik
              /* initialValues={{ userId: "", password: "" }}
              onSubmit={(values) => {
                // Handle login
              }}*/
              initialValues={{ userId: "", password: "" }}
              onSubmit={handleLogin}
            >
              <Form>
                <Field type="text" name="userId" placeholder="User_ID" />
                <ErrorMessage name="userId" component="div" />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
                <br></br>
                <a href="#">Forgot Password</a>
                <br></br>
                <button
                  type="submit"
                  className="bg-warning text-black d-flex justify-content-center w-100 mt-1"
                >
                  Login
                </button>
                <p className="m-1">
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    SignUp Now
                  </a>
                </p>
              </Form>
            </Formik>
          </div>
        ) : (
          <div className="form">
            <h2>SignUp Form</h2>
            <Formik
              initialValues={{
                userId: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSignUp}
            >
              <Form>
                <Field type="text" name="userId" placeholder="User_ID" />
                <ErrorMessage name="userId" component="div" />
                <Field type="email" name="email" placeholder="E-mail" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword" component="div" />
                <button
                  type="submit"
                  className="bg-warning text-black d-flex justify-content-center w-100"
                >
                  SignUp
                </button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authform;
