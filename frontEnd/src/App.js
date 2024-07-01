import Home from "./pages/Home";
import Description from "./pages/Description";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Profile from "./pages/user/Profile";
import Admin from "./pages/user/Admin";

import "./styles/style.css"


  // 2. Wrap ChakraProvider at the root of your app

  

function App() {
 
  return (
 
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desc" element={<Description />}/>
        <Route path="/list" element={<Menu />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/user" element={<Profile />}/>
        <Route path="/admin" element={<Admin />}/>


    </Routes>
  </BrowserRouter>    
 
  );
}

export default App;