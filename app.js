var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("update", data => io.emit("update", { data }));
  //socket.on("update", data => io.emit(data.get_user_id, { data }));
});
server.listen(3000);
