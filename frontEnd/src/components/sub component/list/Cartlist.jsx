import React, { useState } from "react";
import Style from "../../../styles/Cart.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'



const Cart = ({ name, img, weight, prc, quan, add, minus, del, id}) => {




    return (
        <div>

            <div className={Style.cartlist}>


                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={img} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2> {name}</h2>
                        </div>
                    <div className={Style.delete}>
                        <button className={Style.del} id={id} onClick={del}> <FontAwesomeIcon  icon={faX} /> </button>
                    </div>
                        <div className={Style.price}>
                            <h2> £ {prc} </h2>
                        </div>

                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <button id={id} onClick={minus} name="minus"> - </button>
                            <input type="number" min={0} name={"qty"}  value={quan} max={99} />
                            <button id={id} onClick={add} name="add"> + </button>
                        </div>

                        <div className={Style.weight}>
                        <p id="weight" name="weight"> size: {weight}        </p>
                        </div>
                        </div>
                    </div>

                    </div>


                </div>


        </div>


     </div>

    )
}





export default Cart