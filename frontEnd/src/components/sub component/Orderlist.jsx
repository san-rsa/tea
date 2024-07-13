import React, { useState } from "react";
import Style from "../../styles/Checkout.module.css"
import { Link } from "react-router-dom";


const Orderlist = ({ name, img, qty, weight, price}) => {


    return (
        <div>
  
            <div className={Style.checkout}>

                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={require("../../img/Rectangle 5.png")} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2>{name}</h2>
                        </div>




                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <p> QUANTITY: {qty}</p>
                        </div>

                        <div className={Style.weight}>
                            <p> WEIGHT: {weight} kg</p>
                        </div>

                        </div>
                        <div className={Style.price}>
                            <h2> € {price} </h2>
                        </div>
                    </div>

                    </div>


                </div>

          
        </div>


     </div>

    )
}





export default Orderlist