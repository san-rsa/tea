import React, { useState } from "react";

import List  from "../components/sub component/List";
import "../styles/style.css"
import Style from "../styles/Cart.module.css"
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



const Cart = ({ text, img}) => {

    
    const [quan, setquan] = useState(Number(1))
    const [prc, setprc] = useState(Number(5))

    function qty(params) {
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
                            <input type="number" min={0} name="qty" onChange={qty} value={quan} max={99} />
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


                  <div className={Style.cartbtn} >
                       <Link to={"/list"}> <button className={Style.more}> SHOP MORE  </button></Link>
                       <Link to={"/checkout"}> <button className={Style.checkout} >CHECKOUT</button></Link>
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





export default Cart