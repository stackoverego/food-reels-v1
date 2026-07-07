import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserLoginForm = () => {
  const navigate=useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
        email,
        password
    },{
      withCredentials:true,
    })
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="hero-card">
          <p className="eyebrow">Food Reels</p>
          <h2>Welcome back to effortless dining.</h2>
          <p>Pick up where you left off with a quiet, seamless login flow.</p>
        </div>
      </div>

      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-card__intro">
            <span className="auth-badge">User</span>
            <h1>Welcome back</h1>
            <p>Continue discovering meals that feel right for you.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="alex@email.com"
              />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>

            <button type="submit" className="auth-submit">
              Log in
            </button>
          </form>

          <div className="auth-footer">
            <p>
              New here? <a href="/user/register">Create account</a>
            </p>
          </div>

          <div className="auth-switch">
            <span>Are you a food partner?</span>
            <a href="/food-partner/login">Partner login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
