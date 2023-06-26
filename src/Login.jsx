// Login component
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((response) => {
        console.log("login: " + response.data.status);
        if (response.data.status === "success") {
          if (response.data.role === "admin") {
            navigate("/");
          }
        } else {
          console.log(response.data.message); // Log the error message for debugging
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-secondary">
      <div className="bg-white p-3 w-50">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-success mb-3">
            Login
          </button>
          <p>User haven't account</p>
          <Link to="/signup" className="btn btn-primary">
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
