const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
});

let onlineUsers = [];

io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    onlineUsers.push({ id: socket.id, username });
    io.emit("online_users", onlineUsers);
  });

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });

  socket.on("typing", (username) => {
    socket.broadcast.emit("typing", username);
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter(user => user.id !== socket.id);
    io.emit("online_users", onlineUsers);
    console.log("User disconnected:", socket.id);
  });

});

server.listen(3000, () => console.log("Server running on port 3000"));
