import Home from "./pages/Home";
import Description from "./pages/Description";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
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
        <Route path="/list" element={<Menu />}/>

    </Routes>
  </BrowserRouter>    
 
  );
}

export default App;