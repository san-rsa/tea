import React, { useState } from "react";

import Cartlist  from "../components/sub component/list/Cartlist";
import Style from "../styles/Cart.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'

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



const Cart = ({ text, img}) => {

    
    const [quan, setquan] = useState(Number(1))
    const [prc, setprc] = useState(Number())

    function handleChange(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * 5 )
    }


    function add(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) + 1;
           let pr = Number(no)*5;
           setprc(pr);
          return no;
        });
       }

       function minus(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) - 1;
           let pr = Number(no) * 5;
           setprc(pr)
          return no;
        });
       }



    return (
        <div>
         <Nav />                
         <h1>CART</h1>
            <div className={Style.cart}>


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
                            <option value="400g">400g</option>
                            <option value="700g">
                                700g
                            </option>
                            <option value="800g">800g</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    </div>


                </div>

            {list.map((project) => (
                    


                <div className=""> 
                

                <Cartlist
                    price={project.price}
                    name={project.name}
                    img={project.getImageSrc()}
                    weight1={"500"}
                    weight2={"800"}
                    weight3={"900"}
            



                    />    
                    </div>


                )   )   }
   


                  <div className={Style.cartbtn} >
                       <Link to={"/list"}> <button className={Style.more}> SHOP MORE  </button></Link>
                       <Link to={"/checkout"}> <button className={Style.checkout} >CHECKOUT</button></Link>
                    </div>
          

        </div>


     </div>

    )
}





export default Cart