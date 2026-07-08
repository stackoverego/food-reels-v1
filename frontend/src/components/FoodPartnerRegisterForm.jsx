import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodPartnerRegisterForm = () => {
  const navigate=useNavigate();
  const [restaurantName, setrestaurantName] = useState("");
  const [contactName, setcontactName] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState();
   const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const response=await axios.post("http://localhost:3000/api/auth/foodpartner/register",{
        name:restaurantName,contactName,phone,address,email,password
      },{
        withCredentials:true,
      })
      navigate("/createFood");
    }

  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="hero-card">
          <p className="eyebrow">Food Reels</p>
          <h2>Open your partner account with ease.</h2>
          <p>Showcase your food and connect with more customers in a refined space.</p>
        </div>
      </div> 

      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-card__intro">
            <span className="auth-badge">Food Partner</span>
            <h1>Register your kitchen</h1>
            <p>Bring your menu to a wider audience with a calm, simple setup.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Restaurant name</span>
              <input type="text" name="restaurantName" onChange={(e)=>{ setrestaurantName(e.target.value)}} placeholder="Golden Spoon" />
            </label>

            <div className="auth-row">
              <label className="auth-field">
                <span>Contact name</span>
                <input type="text" name="contactName" onChange={(e)=>{setcontactName(e.target.value)}} placeholder="Jamie Lee" />
              </label>

              <label className="auth-field">
                <span>Phone</span>
                <input type="tel" name="phone" onChange={(e)=>{setphone(e.target.value)}} placeholder="+1 234 567 8900" />
              </label>
            </div>

            <label className="auth-field">
              <span>Address</span>
              <input type="text" name="address" onChange={(e)=>{setaddress(e.target.value)}} placeholder="45 Food Avenue" />
            </label>

            <label className="auth-field">
              <span>Email</span>
              <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="team@goldenspoon.com" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" name="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Create a secure password" />
            </label>

            <button type="submit" className="auth-submit">
              Register
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already partnered with us? <a href="/food-partner/login">Sign in</a>
            </p>
          </div>

          <div className="auth-switch">
            <span>Looking for a user account?</span>
            <a href="/user/register">Switch to user</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegisterForm;
