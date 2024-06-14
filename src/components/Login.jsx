import { useContext, useState } from "react";
import "../styles/login.css";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
import React from "react";
import "../styles/login.css";

import logo from "../assets/logo2.png";

const Login = () => {
  const [formState, setFormState] = useState(initialState);
  const { auth, axiosins, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formState.email || !formState.password)
      return toast.error("Provide all credentials");

    try {
      axiosins
        .post("/auth", {
          email: formState.email,
          password: formState.password,
          role: "admin",
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Login Successfull");

            setAuth({ ...response.data });
            setFormState(initialState);
            navigate("/dashboard");
          }
        })
        .catch((response) => {
          if (response.response.status == 401) {
            toast.error("Credentials did not match");
          }
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="logo" />
      <div className="login-header-title">
        <h2> Voxpoll Admin Portal</h2>
      </div>
      <form className="login-container" onSubmit={handleLogin}>
        <div className="login-title">
          <h2>Admin Login</h2>
        </div>
        <div className="login-input">
          <input
            type="email"
            value={formState.email}
            onChange={(e) => {
              setFormState((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              });
            }}
            placeholder="Your email"
            required
          ></input>
          <input
            type="password"
            value={formState.password}
            onChange={(e) => {
              setFormState((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              });
            }}
            placeholder="Enter Password"
            required
          ></input>
          <div className="login-condition"></div>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
