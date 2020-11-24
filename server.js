const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/jds-me"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/jds-me/index.html"));
});

app.listen(8080);
