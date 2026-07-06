const express = require("express");
const cookieParser = require("cookie-parser");
const authrouter = require("./routes/auth.routes");
const foodrouter = require("./routes/food.routes");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json()); //req.body data ke liye

app.use(cookieParser()); // to save the token in cookie storage

app.use("/api/auth", authrouter);
app.use("/api/food", foodrouter);

module.exports = app;
