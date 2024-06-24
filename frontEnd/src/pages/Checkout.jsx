import React, { useState } from "react";

import List  from "../components/sub component/List";
import "../styles/style.css"
import Style from "../styles/Checkout.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'

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


                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={require("../img/Rectangle 5.png")} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2>tea name</h2>
                        </div>
                    <div className={Style.delete}>
                        <Link className="del" to={"/delete"}> <FontAwesomeIcon  icon={faX} /> </Link>
                    </div>


                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <p> X5</p>
                        </div>

                        <div className={Style.weight}>
                            <p> WEIGHT: 700g</p>
                        </div>

                        </div>
                        <div className={Style.price}>
                            <h2> £ {"5.00"} </h2>
                        </div>
                    </div>

                    </div>


                </div>


                  <div className={Style.cartbtn} >
                       <Link to={"/checkout"}> <button className={Style.checkout} >COMFIRM</button></Link>
                    </div>
          
            {/* {list.map((project) => (

<div className="card"> 

  <List
      price={project.price}
      name={project.name}
      img={project.getImageSrc()}
    />    
    </div>


)   )   } */}
        </div>


     </div>

    )
}





export default Checkout