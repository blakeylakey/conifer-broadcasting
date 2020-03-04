import React from "react";

const Broadcast = ({ roomId, streamers, connect }) => (
  <main className="main-broadcast-container">
    <div className="main-broadcast-content-container">
      <div className="main-broadcast-video-container">
        <video controls muted autoPlay={true} id="broadcast-video"></video>
        <div className="main-broadcast-video-information">
          <h2>Room ID: {roomId}</h2>
        </div>
        <div className="main-broadcast-viewers-count">
          <p className="broadcast-is-connected">
            {connect ? "Connected" : "Not Connected"}
          </p>
          <img src="/eye.svg" alt="Viewer Count" id="broadcast-viewer-icon" />
          <p className="broadcast-viewer-count">{streamers}</p>
        </div>
      </div>
    </div>
  </main>
);

export default Broadcast;
