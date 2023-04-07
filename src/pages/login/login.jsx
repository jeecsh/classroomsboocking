import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="page">
      <span className="logo">classroomsbooking</span>
      <div className="cover">
        <h1>Login</h1>
        <span className="word">Username</span>
        <input type="text" placeholder="type your username" className="in" />
        <span className="word">Password</span>
        <input
          type="password"
          placeholder="type your password"
          className="in"
        />

        <button className="loginbtn">Login</button>
      </div>
    </div>
  );
};
export default Login;
