import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserRegisterForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate();

  const handleSumbit=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:3000/api/auth/user/register",{
      name,
      email,
      password
    },{
      withCredentials:true,
    }
  )
  navigate('/');
    
  }


  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="hero-card">
          <p className="eyebrow">Food Reels</p>
          <h2>Join a calmer way to discover meals.</h2>
          <p>Simple sign-up for a smooth and personal food experience.</p>
        </div>
      </div>

      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-card__intro">
            <span className="auth-badge">User</span>
            <h1>Create your account</h1>
            <p>Start exploring delicious picks that fit your taste.</p>
          </div>

          <form className="auth-form" onSubmit={handleSumbit}>
            <label className="auth-field">
              <span>Full name</span>
              <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Alex Morgan" />
            </label>

            <label className="auth-field">
              <span>Email</span>
              <input type="email" name="email" value={email}  onChange={(e)=>{setemail(e.target.value)}} placeholder="alex@email.com" />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input type="password" name="password" value={password}  onChange={(e)=>{setpassword(e.target.value)}} placeholder="Create a password" />
            </label>

            <button type="sumbit" className="auth-submit">
              Sign up
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <a href="/user/login">Log in</a>
            </p>
          </div>

          <div className="auth-switch">
            <span>Looking for food partner access?</span>
            <a href="/food-partner/register">Switch to partner</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterForm;
