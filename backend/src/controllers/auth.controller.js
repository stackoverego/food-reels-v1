const usermodel = require("../models/user.model");
const foodpartnermodel = require("../models/foodpartner.model");
const bcrypt = require("bcryptjs"); //hash password
const jwt = require("jsonwebtoken"); // token create karne ke liye

// logic for users
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

  res.cookie("user_token", token);
  res.json({
    message: "user created successfully",
    user_details: {
      name,
      email,
    },
    token,
  });
}
async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await usermodel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "invaild email or password",
    });
  }
  const isPasswordVaild = await bcrypt.compare(password, user.password);

  if (!isPasswordVaild) {
    return res.status(400).json({
      message: "invaild email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("user_token", token);
  res.status(200).json({
    message: "user logged in successfully",
  });
}
async function logoutUser(req, res) {
  res.clearCookie("user_token");
  res.status(200).json({
    message: "user logged out successfully",
  });
}

// logic for foodpartners
async function registerFoodpartner(req, res) {
  const { name, email, password,contactname,phone,address } = req.body;
  
  const IsUserExist=await foodpartnermodel.findOne({email})
  console.log(IsUserExist)
  if(IsUserExist){
    return res.status(409).json({
      message:"partner already exist. try with another email"
    })
  }
  const hashedpass=await bcrypt.hash(password,10);
  const partner=foodpartnermodel.create({
    name:name,
    email:email,
    password:hashedpass,
    contactName:contactname,
    phone:phone,
    address:address
  })

  const token=jwt.sign({
    id:partner._id
  },process.env.JWT_SECRET);

  res.cookie("partner_token",token);
  res.status(201).json({
    message:"food partner created successfully",
    partner_details:{
      name,
      email
    }
  })
}
async function loginFoodpartner(req, res) {
  const { email, password } = req.body;
  const partner = await foodpartnermodel.findOne({ email });

  if (!partner) {
    return res.status(400).json({
      message: "invaild email or password",
    });
  }

  const isPasswordVaild = await bcrypt.compare(password, partner.password);

  if (!isPasswordVaild) {
    return res.status(400).json({
      message: "invaild email or password",
    });
  }

  const token = jwt.sign(
    {
      id: partner._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("partner_token", token);
  res.status(200).json({
    message: "food-partner logged in successfully",
  });
}
async function logoutFoodpartner(req, res) {
  res.clearCookie("partner_token");
  res.status(200).json({
    message: "food Partner logged out successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodpartner,
  loginFoodpartner,
  logoutFoodpartner,
};
 // object me islye pass kiya coz ek file ek hi cheez export
// kar skti he but humare pass bhohot sare controller function
// he islye object me unko dal ke object ko return karwa diya
