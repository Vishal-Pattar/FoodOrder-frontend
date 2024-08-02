import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

export default function App() {
  return (
  <Router>

    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eat/stores/:id/menus' element={<Menu />}/>
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/signup' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>;
  </Router>
)}