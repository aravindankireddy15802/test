import React from "react";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import About from "./components/About.jsx";
import User from "./components/User.jsx";
import Cart from "./components/Cart.jsx"
import Men from"./components/men.jsx"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index path="#" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route index path="/" element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/user"  element={<User />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/men" element={<Men />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
