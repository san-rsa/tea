import React, { useState } from "react";

import List  from "../components/sub component/List";
import "../styles/style.css"
import "../styles/cart.css"
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
            <div className="cart">


                <div className="item">
                    <div className="img">
                        <img src={require("../img/Rectangle 5.png")} alt="tea" />
                    </div>




                    <div className="text">
                        <div className="name">
                            <h2>tea name</h2>
                        </div>
                    <div className="delete">
                        <Link className="del" to={"/delete"}> <FontAwesomeIcon  icon={faX} /> </Link>
                    </div>
                        <div className="price">
                            <h2> £ {prc} </h2>
                        </div>

                    <div>


                    <div className="quan">
                        <div className="count">
                            <button onClick={minus} value={quan}> - </button>
                            <input type="number" min={0} name="qty" onChange={qty} value={quan} max={99} />
                            <button onClick={add} value={quan}> + </button>
                        </div>

                        <div className="weight">
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