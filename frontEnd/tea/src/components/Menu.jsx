import React from "react";
import Kim from "../img/Rectangle 3 (1).png"
const Menu = () => {


    return (
        <div class="trending">
        <h1>TRENDING</h1>
        <div className="tcard">
            <img src={Kim} alt="" />
            <h2>name</h2>
            <p>price</p>
            <button>cart</button>
        </div>
    </div>
    )
}

export default Menu