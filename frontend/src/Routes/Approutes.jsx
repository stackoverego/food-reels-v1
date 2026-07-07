import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegisterForm from "../components/UserRegisterForm";
import UserLoginForm from "../components/UserLoginForm";
import FoodPartnerRegisterForm from "../components/FoodPartnerRegisterForm";
import FoodPartnerLoginForm from "../components/FoodPartnerLoginForm";
import Home from "../general/Home";
import Createfood from "../components/Createfood";

const Approutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegisterForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegisterForm />} />
        <Route path="/food-partner/login" element={<FoodPartnerLoginForm />} />
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createFood" element={<Createfood/>}></Route>
      </Routes>
    </Router>
  );
};

export default Approutes;
