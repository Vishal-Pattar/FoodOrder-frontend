import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";

export default function App() {
  return (
  <Router>

    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eat/stores/:id/menus' element={<Menu />}/>
        </Routes>
      </div>
      <Footer />
    </div>;
  </Router>
)}