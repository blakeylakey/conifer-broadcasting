import React from "react";

const SignUpEmail = () => {
  const handler = e => {
    e.preventDefault();
    const cont = document.getElementsByClassName(
      "main-home-signup-email-container"
    )[0];
    cont.classList.add("hidden-signup-email");
  };

  return (
    <div className="main-home-signup-email-container">
      <div className="main-home-signup-email-input">
        <form className="main-home-signup-email">
          <label className="main-home-signup-email-label">
            Consider supporting us with your email:
          </label>
          <input
            type="email"
            className="main-home-signup-email-input-box"
            placeholder="name@example.com"
          />
        </form>
      </div>
      <div className="main-home-signup-email-close">
        <div className="main-home-signup-email-icon" onClick={handler}>
          <img
            src="./close.png"
            className="main-home-signup-email-close-icon-close"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpEmail;
