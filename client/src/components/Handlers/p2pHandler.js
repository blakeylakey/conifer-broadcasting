import socketIOClient from "socket.io-client";
import SimplePeer from "simple-peer";

function getStream() {
    // p2p and screenshare only work with chrome & firefox
    if (navigator.userAgent.search("Chrome") > 0) {
      return navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
    } else if (navigator.userAgent.search("Firefox") > 0) {
      return navigator.mediaDevices.getUserMedia({
        video: { mediaSource: "screen" }
      });
    }
  }

function p2pHandler(endpoint, initiator, roomId) {
    // Needed variables
    /* let endpoint = endpoint;
    let initiator = init;
    let roomId = roomId; */

    // To hold everyone that connects
    let receivers = {};

    if (initiator) {
      getStream().then(function(stream) {
        let socket = socketIOClient(endpoint);

        // Join the room
        socket.emit("initiator join", roomId);

        // When a new receiver joins we have to deal with it
        socket.on("new peer", id => {
          // Add new peer instance
          receivers[id] = new SimplePeer({
            initiator: initiator,
            trickle: false,
            stream: stream
          });

          // When we receive our sdp
          receivers[id].on("signal", function(data) {
            let mySDP = JSON.stringify(data);
            // Let the signalling server know about our sdp
            socket.emit("new peer initiator sdp created", mySDP, id);
          });
        });

        // When we receive the receiver's sdp
        socket.on("new peer receiver sdp", (sdp, id) => {
          let otherSDP = sdp;
          // Signal them
          receivers[id].signal(otherSDP);
        });

        // We should play the stream on initiators tab too
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.play();
      });
    } else {
      let socket = socketIOClient(endpoint);

      // We only need one peer instance, since we are receiving a broadcast
      var peer = new SimplePeer({
        initiator: initiator,
        trickle: false
      });

      // Join room
      socket.emit("receiver join", roomId);

      // Handle no initiator situations
      socket.on("no initiator", () => {
        window.alert(
          "No broadcaster found at provided URL. Either refresh your page to wait for broadcaster, or try a different URL."
        );
      });

      // When we receive the initiator's sdp
      socket.on("new peer initiator sdp", sdp => {
        let otherSDP = sdp;
        peer.signal(otherSDP);
      });

      // When we receive our sdp
      peer.on("signal", data => {
        let mySDP = JSON.stringify(data);
        // Let the signalling server know
        socket.emit("new peer receiver sdp created", mySDP, socket.id);
      });

      // Handle our stream
      peer.on("stream", stream => {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.id = "editted";
        video.play();
      });
    }
}

export default p2pHandler;