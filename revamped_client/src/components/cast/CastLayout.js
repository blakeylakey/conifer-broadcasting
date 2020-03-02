import React from "react";

const CastLayout = props => {
  const path = props.location.pathname.split("/")[1];
  return (
    <>
      <main className="main-cast-container">
        <div className="main-cast-content-container">
          <video
            width="80%"
            controls
            muted
            autoPlay={true}
            className="main-cast-content-video"
          ></video>
        </div>
      </main>
      <aside className="side-cast-container">
        <div className="side-cast-content-container">
          {path === "join"
            ? "this is the join content"
            : "this is the start content"}
        </div>
      </aside>
    </>
  );
};

export default CastLayout;
