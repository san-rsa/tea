import React, { useState } from "react";

import "../styles/style.css"
import Style from "../styles/Checkout.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'
import  Checkoutlist  from "../components/sub component/list/Checkoutlist";

const list =[ {
    getImageSrc: () => require( "../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price: "£ 5.00"
},  {
    getImageSrc: () => require("../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: "£ 4.00"
},
{
    getImageSrc: () => require( "../img/Rectangle 3.png"),
    name: "lip tea",
    price: "£ 9.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "milo",
    price: "£ 5.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: "£ 7.00"
}
]



const Checkout = ({ text, img}) => {


    return (
        <div>
         <Nav />                
         <h1>CHECKOUT</h1>
            <div className={Style.checkout}>


                            {list.map((project) => (

                    <div className=""> 

                    <Checkoutlist
                        price={project.price}
                        name={project.name}
                        img={project.getImageSrc()}
                        qty={"6"}
                        weight={"600kg"}
                        />    
                        </div>


                    )   )   }


                  <div className={Style.cartbtn} >
                       <Link to={"/checkout"}> <button className={Style.checkout} >COMFIRM</button></Link>
                    </div>
          

        </div>


     </div>

    )
}





export default Checkout