import React from "react";

const SignUpEmail = () => {
  const handler = e => {
    e.preventDefault();
    const cont = document.getElementById(
      "main-home-signup-email-content-container"
    );
    cont.classList.add("hidden-signup-email");
  };

  return (
    <div className="main-home-signup-email-container">
      <div
        className="main-home-signup-email-content-container"
        id="main-home-signup-email-content-container"
      >
        <input
          type="email"
          placeholder="Consider showing your support for conifer by submitting your email"
          className="main-home-signup-email-input"
          id="main-home-signup-email-input"
        />
        <img
          src="/close.png"
          className="main-home-signup-email-close"
          id="main-home-signup-email-close"
          onClick={handler}
        />
      </div>
    </div>
  );
};

export default SignUpEmail;
