import React, { useState, useEffect } from "react";

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

    const [product, setproduct] = useState([])
    const [quan, setquan] = useState(Number(0))
    const [prc, setprc] = useState(Number())
    const [price, setprice] = useState(Number())
    const [weight, setweight] = useState(Number())
    const [set, setset] = useState('')




    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK  + "getall/cart/", {
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
        }).then((res) =>  res.json())
        .then((data) =>  setproduct(data.data) );
    }, []);









console.log(product)
















    function qty(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * prc )

        
        if (quan <= 0) {
            setquan(1)
           }
    }


    function add(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) + 1;
           let pr = Number(no)*prc;
           setprice(pr);
          return no;
        });
       }


       
       function minus(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) - 1;
           let pr = Number(no) * prc;
           setprice(pr);

           if (prevItems <= 1) {
            setquan(1)
           }



          return no;
        });
       }

    function handleChange(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * 5 )
    }





    return (
        <div>
         <Nav />                
         <h1>CART</h1>
 

            {product.products?.map((project) => (
                    


                <div className=""> 
                

                <Cartlist
                    price={project.price}
                    name={project.name}
                    img={project.imgUrl}
                    
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


    
    )
}





export default Cart