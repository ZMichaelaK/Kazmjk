import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Homepage");
  };

  return (
    <div style={{margin: "auto", textAlign: "center", transform: "translate(40px, 30%)"}} className="login-wrapper">
      <h1 style={{fontSize: "60px"}}>Please Log In</h1>
      <br />
      <form style={{fontSize:"30px"}} onSubmit={handleSubmit}>
        <label>
          Username
          <br/>
          <input type="text" />
        </label>
        <br />
        <label>
        Password
          <br/>
          <input type="password" />
        </label>
        <br />
        <div style={{marginTop: "20px"}}>
          <button className="btn btn-success btn-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
