import React, { useState } from "react";
import Style from "../../../styles/Order.module.css"



const Order = ({ text, img}) => {


    return (
        <div>
            <div className={Style.orders}>


                <div className={Style.item}>
                    <div className={Style.det}>
                           <h3 className={Style.id}>Order ID: <span>44477755</span> </h3>
                           <h3 className={Style.date}> Date:  <span>22/08/2022</span></h3>
                           <h3 className={Style.price}>Total: <span>€ 500</span> </h3>
 
                    </div>

                   <div className={Style.link}>

                        <button className={Style.view}> view</button>


                    </div>


                </div>

        </div>

     </div>

    )
}







export default Order