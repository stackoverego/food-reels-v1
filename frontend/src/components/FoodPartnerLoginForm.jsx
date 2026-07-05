import React from "react";

const fields = [
  { name: "email", label: "Email", type: "email", placeholder: "team@goldenspoon.com" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
];

const FoodPartnerLoginForm = () => {
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

          <form className="auth-form">
            {fields.map((field) => (
              <label className="auth-field" key={field.name}>
                <span>{field.label}</span>
                <input type={field.type || "text"} name={field.name} placeholder={field.placeholder} />
              </label>
            ))}

            <button type="button" className="auth-submit">
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
