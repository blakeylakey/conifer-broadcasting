import React from "react";

const Broadcast = ({ roomId }) => (
  <div>
    <h1>{roomId}</h1>
    <video width="100%" controls muted autoPlay={true}></video>
  </div>
);

export default Broadcast;
