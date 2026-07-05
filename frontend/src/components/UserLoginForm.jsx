import React from "react";

const fields = [
  { name: "email", label: "Email", type: "email", placeholder: "alex@email.com" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
];

const UserLoginForm = () => {
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

          <form className="auth-form">
            {fields.map((field) => (
              <label className="auth-field" key={field.name}>
                <span>{field.label}</span>
                <input type={field.type || "text"} name={field.name} placeholder={field.placeholder} />
              </label>
            ))}

            <button type="button" className="auth-submit">
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
