const express = require("express");

const app = express();
console.log(app);

app.get("/", (req, res) => {
  res.json({
    message: "Expense Tracker API is running",
  });
});

app.get("/about", (req, res) => {
  res.send("This is an Expense Tracker API");
});

app.get("/hello", (req, res) => {
  console.log("Someone visited /hello");
  res.json({
    message: "Hello from expense tracker",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
