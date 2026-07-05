import React from "react";

const fields = [
  { name: "fullName", label: "Full name", type: "text", placeholder: "Alex Morgan" },
  { name: "email", label: "Email", type: "email", placeholder: "alex@email.com" },
  { name: "password", label: "Password", type: "password", placeholder: "Create a password" },
];

const UserRegisterForm = () => {
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

          <form className="auth-form">
            {fields.map((field) => (
              <label className="auth-field" key={field.name}>
                <span>{field.label}</span>
                <input type={field.type || "text"} name={field.name} placeholder={field.placeholder} />
              </label>
            ))}

            <button type="button" className="auth-submit">
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
