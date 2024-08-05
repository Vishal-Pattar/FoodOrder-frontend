import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import ForgotPassword from "./components/users/ForgotPassword";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eat/stores/:id/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
      ;
    </Router>
  );
}
