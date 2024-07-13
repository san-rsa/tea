import React, { useState } from "react";
import Style from "../../styles/Checkout.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'


const Checkoutlist = ({ name, img, qty, weight, price}) => {


    return (
        <div>
  
            <div className={Style.checkout}>

                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={img} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2>{name}</h2>
                        </div>
                    <div className={Style.delete}>
                        <Link className="del" to={"/delete"}> <FontAwesomeIcon  icon={faX} /> </Link>
                    </div>


                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <p> X{qty}</p>
                        </div>

                        <div className={Style.weight}>
                            <p> WEIGHT: {weight}</p>
                        </div>

                        </div>
                        <div className={Style.price}>
                            <h2> {price} </h2>
                        </div>
                    </div>

                    </div>


                </div>

          
        </div>


     </div>

    )
}





export default Checkoutlist