import React from "react";

const Broadcast = ({ roomId, streamers }) => (
  <main className="main-broadcast-container">
    <div className="main-broadcast-content-container">
      <div className="main-broadcast-video-container">
        <video controls muted autoPlay={true} id="broadcast-video"></video>
        <div className="main-broadcast-video-information">
          <h2>Room ID: {roomId}</h2>
          <div className="main-broadcast-viewers-count">
            <img src="/eye.svg" alt="Viewer Count" id="broadcast-viewer-icon" />
            <p>{streamers}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Broadcast;
