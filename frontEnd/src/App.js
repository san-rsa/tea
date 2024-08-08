import Home from "./pages/Home";
import Description from "./pages/Description";
import Menu from "./pages/Menu";
import CategoryL from "./pages/CategoryL";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Profile from "./pages/user/Profile";
import Admin from "./pages/admin/Admin";
import Addtea from "./pages/admin/sub/tea/Add";
import Edittea from "./pages/admin/sub/tea/Edit";
import Addadmin from "./pages/admin/sub/admin/Add";
import Orders from "./pages/Orders"
import Search from "./pages/admin/sub/ResultAdmin";
import Addbanner from "./pages/admin/sub/banner/Add";
import Editbanner from "./pages/admin/sub/banner/Edit";
import Addcategory from "./pages/admin/sub/category/Add";
import Editcategory from "./pages/admin/sub/category/Edit";


  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';





import "./styles/style.css"


  

function App() {
 
  return (
 
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Description />}/>
        <Route path="/list" element={<Menu />}/>
        <Route path="/category/:id" element={<CategoryL />}/>

        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/user" element={<Profile />}/>
        <Route path="/admin" element={<Admin />}/>

        
        <Route path="/admin/addtea/" element={<Addtea />}/>
        <Route path="/admin/edittea/:id" element={<Edittea />}/>
        <Route path="/admin/addadmin" element={<Addadmin />}/>
        <Route path="/order" element={<Orders />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/admin/editbanner/:id" element={<Editbanner />}/>
        <Route path="/admin/addbanner" element={<Addbanner />}/>
        <Route path="/admin/editcategory/:id" element={<Editcategory />}/>
        <Route path="/admin/addcategory" element={<Addcategory />}/>

   


    </Routes>       

  </BrowserRouter>    
 
  );
}

export default App;