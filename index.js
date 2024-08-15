const express = require("express");
const app = express();
const PORT = 3400;
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.get("/contact", (req, res) => {
  res.send("22554466 - this is my contact number");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Node</h1>");
});
app.listen(PORT, () => {
  // console.log("server is running");
  console.log(`server is running on : ${PORT}`);
});
