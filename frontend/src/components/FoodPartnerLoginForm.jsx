import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodPartnerLoginForm = () => {
    const navigate=useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/auth/foodpartner/login",{
        email,
        password
    },{
      withCredentials:true,
    })
    navigate("/createFood");
  };


  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="hero-card">
          <p className="eyebrow">Food Reels</p>
          <h2>Sign in to your partner dashboard.</h2>
          <p>Stay connected to your menu, orders, and customers with clarity.</p>
        </div>
      </div>

      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-card__intro">
            <span className="auth-badge">Food Partner</span>
            <h1>Partner sign in</h1>
            <p>Manage your profile and keep service smooth and simple.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email</span>
              <input type="email" name="email"  onChange={(e)=>{setemail(e.target.value)}} placeholder="team@goldenspoon.com" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" name="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your password" />
            </label>

            <button type="submit" className="auth-submit">
              Continue
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Need a profile? <a href="/food-partner/register">Register</a>
            </p>
          </div>

          <div className="auth-switch">
            <span>Need a user account?</span>
            <a href="/user/login">User login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLoginForm;
