// Signup component
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", values)
      .then((response) => {
        console.log(response);
        alert("User registered successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              name="email"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              placeholder="Enter Password"
            ></input>
          </div>
          <button type="submit" className="btn btn-success w-100 mb-3 rounded-0">
            Register
          </button>
          <p>Already have an account?</p>
          <Link to="/login" className="btn btn-primary w-100 rounded-0">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
