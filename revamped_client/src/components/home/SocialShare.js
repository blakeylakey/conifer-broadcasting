import React from "react";

const SocialShare = () => {
  const handler = e => {
    e.preventDefault();
    const cont = document.getElementsByClassName(
      "main-home-social-share-container"
    )[0];
    cont.classList.add("hidden-social-share");
  };

  return (
    <div className="main-home-social-share-container">
      <div className="main-home-social-share-icons">
        <div className="main-home-social-share-icon">
          <a href="mailto:info@example.com?&subject=&body=https://conifer-broadcasting.appspot.com/ Conifer Broadcasting is a free, easy to use screen sharing application. Check it out!">
            <img src="./mail.png" className="main-home-social-share-mail" />
          </a>
        </div>
        <div className="main-home-social-share-icon">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://conifer-broadcasting.appspot.com/">
            <img
              src="./facebook.png"
              className="main-home-social-share-facebook"
            />
          </a>
        </div>
        <div className="main-home-social-share-icon">
          <a href="https://twitter.com/home?status=https://conifer-broadcasting.appspot.com/ Conifer Broadcasting is a free, easy to use screen sharing application. Check it out!">
            <img
              src="./instagram.png"
              className="main-home-social-share-instagram"
            />
          </a>
        </div>
      </div>
      <div className="main-home-social-share-close">
        <div className="main-home-social-share-icon" onClick={handler}>
          <img
            src="./close.png"
            className="main-home-social-share-close-icon-close"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
