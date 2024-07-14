import React, { useState } from "react";
import Style from "../../../styles/Cart.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'



const Cart = ({ name, img, weight1, weight2, weight3, price}) => {

    
    const [quan, setquan] = useState(Number(1))
    const [prc, setprc] = useState(Number(price))

    function handleChange(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * price )
    }


    function add(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) + 1;
           let pr = Number(no)*price;
           setprc(pr);
          return no;
        });
       }

       function minus(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) - 1;
           let pr = Number(no) * price;
           setprc(pr)
          return no;
        });
       }



    return (
        <div>

            <div className={Style.cartlist}>


                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={require("../../../img/Rectangle 5.png")} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2> {name}</h2>
                        </div>
                    <div className={Style.delete}>
                        <Link className="del" to={"/delete"}> <FontAwesomeIcon  icon={faX} /> </Link>
                    </div>
                        <div className={Style.price}>
                            <h2> £ {prc} </h2>
                        </div>

                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <button onClick={minus} value={quan}> - </button>
                            <input type="number" min={0} name="qty" onChange={handleChange} value={quan} max={99} />
                            <button onClick={add} value={quan}> + </button>
                        </div>

                        <div className={Style.weight}>
                        <select id="weight" name="weight">
                            <option value={weight1 + "kg"}>{weight1 + "kg"}</option>
                            <option value={weight2 + "kg"}>
                                {weight2 + "kg"}
                            </option>
                            <option value={weight3 + "kg"}>{weight3 + "kg"}</option>
                            </select>
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