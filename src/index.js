import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Home from "views/home/Home.js";
import RegisterPage from "views/register/RegisterPage.js";
import ProfilePage from "views/other/ProfilePage.js";
import SignInPage from "views/register/SignInPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/signin-page" element={<SignInPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);
