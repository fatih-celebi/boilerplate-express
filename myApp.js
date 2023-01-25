let express = require('express');
let app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", function (req, res) {
  console.log("Hello World");
});

app.get("/", function (req, res) {
  res.send("Hello Express");
});



const listener = app.listen(9000, function () {
  console.log("Your app is listening on port" + listener.address().port);
});


























 module.exports = app;
