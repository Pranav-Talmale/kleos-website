import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "store.js";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import 'react-toastify/dist/ReactToastify.css';

import Home from "views/home/Home.js";
import RegisterPage from "views/register/RegisterPage.js";
import ProfilePage from "views/other/ProfilePage.js";
import SignInPage from "views/register/SignInPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
