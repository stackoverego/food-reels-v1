const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs"); //hash password
const jwt = require("jsonwebtoken"); // token create karne ke liye

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  const IsUserExist = await usermodel.findOne({ email });
  if (IsUserExist) {
    return res.status(409).json({
      message: "user already exist, try with another email",
    });
  }
  const hashedpass = await bcrypt.hash(password, 10);
  const user = await usermodel.create({
    name,
    email,
    password: hashedpass,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);
  res.json({
    message: "user created successfully",
    user_details: {
      name,
      email,
    },
    token,
  });
}
async function loginUser(req, res) {}

module.exports = {
  registerUser,
  loginUser,
}; // object me islye pass kiya coz ek file ek hi cheez export
// kar skti he but humare pass bhohot sare controller function
// he islye object me unko dal ke object ko return karwa diya
