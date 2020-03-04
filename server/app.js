var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var socket_io = require("socket.io");

var app = express();

// Socket.io
var io = socket_io();
app.io = io;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Socket.io events
let receivers = {};

io.on("connection", socket => {
  // Room ID of connected socket
  var roomId;

  socket.on("initiator join", room => {
    roomId = room;
    // Add the initator to the room ID
    socket.join(roomId);
    // Set initator variable to true, check for receivers on connect
    io.sockets.adapter.rooms[roomId].initiator = true;
    // Once initiator joins, set count of streamers to 1
    io.sockets.adapter.rooms[roomId].count = 1;
    // Set initiator ID to reference later
    io.sockets.adapter.rooms[roomId].initiator_id = socket.id;
  });

  socket.on("get streamers count", room => {
    io.sockets
      .in(roomId)
      .emit("streamers count is", io.sockets.adapter.rooms[roomId].count);
  });

  socket.on("receiver join", room => {
    roomId = room;
    // Add receiver to the room ID
    socket.join(roomId);
    // Increase the count of streamers for the room
    io.sockets.adapter.rooms[roomId].count += 1;
    // If there is currently no initiator in that room, let the user know
    if (!io.sockets.adapter.rooms[roomId].initiator) {
      socket.emit("no initiator");
    }
    // Else continue
    else {
      // Let the initiator know about a new receiver
      socket
        .to(io.sockets.adapter.rooms[roomId].initiator_id)
        .emit("new peer", socket.id);
    }
  });

  socket.on("new peer initiator sdp created", (sdp, id) => {
    // When we receive a SDP from initiator, let the new peer know
    socket.to(id).emit("new peer initiator sdp", sdp);
  });

  socket.on("new peer receiver sdp created", (sdp, id) => {
    // When we receive an answer SDP from receiver, let the initiator know
    io.to(io.sockets.adapter.rooms[roomId].initiator_id).emit(
      "new peer receiver sdp",
      sdp,
      id
    );
  });

  socket.on("disconnect", () => {
    if (io.sockets.adapter.rooms[roomId]) {
      io.sockets.adapter.rooms[roomId].count -= 1;
      io.sockets
        .in(roomId)
        .emit("streamers count is", io.sockets.adapter.rooms[roomId].count);
      if (io.sockets.adapter.rooms[roomId].initiator_id === socket.id) {
        io.sockets.in(roomId).emit("initiator disconnected");
      }
    }
  });
});

module.exports = app;
