import React, { useState } from "react";
import Style from "../styles/Order.module.css"
import Orderlist from "../components/sub component/list/Orderlist";
import Nav from "../components/sub component/Nav";

const list =[ {
    getImageSrc: () => require( "../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price:5
},  {
    getImageSrc: () => require("../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: 7
},
{
    getImageSrc: () => require( "../img/Rectangle 3.png"),
    name: "lip tea",
    price:9
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "milo",
    price: 5
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: 9
}
]


const Order = ({ text, img}) => {


    return (
        <div>
            <Nav />
            <div className={Style}>

            <h1>ORDER DETAILS</h1>

            <div>
                 
        {list.map((project) => (

            <div className=""> 

            <Orderlist
                price={project.price}
                name={project.name}
                img={project.getImageSrc()}
                weight={5}
                qty={5}
                />    
                </div>


)   )   }
            </div>

        </div>

     </div>

    )
}







export default Order