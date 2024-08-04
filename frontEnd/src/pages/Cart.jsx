import React, { useState, useEffect } from "react";

import Cartlist  from "../components/sub component/list/Cartlist";
import Style from "../styles/Cart.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Cart = ({ text, img}) => {

    const [product, setproduct] = useState([])
    const [quan, setquan] = useState(Number(0))
    const [prc, setprc] = useState(Number())
    const [price, setprice] = useState(Number())
    const [weight, setweight] = useState('react')
    const [imgs, setimg] = useState([])






 
    useEffect(() => {


        fetch(process.env.REACT_APP_API_LINK  + "getall/cart/", {
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
        }).then((res) =>  res.json())
        .then((data) => (setproduct(data.data), setimg(data.data.products), setweight(weight)));
    

      
    
 
    }, [])





  function setweight2(params) {
    setweight(weight)
  }



console.log(product)


   function sign(e) {
    e.preventDefault()

    console.log(e.target.name)
    try {
      const response =  fetch(process.env.REACT_APP_API_LINK + "edit/cart", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-type": "application/json; charset=UTF-8", },
        body: JSON.stringify({
          productId: e.target.id,
          quantity: 1,
          sign: e.target.name
        }),

      }).then((res) =>  res.json())
      .then((data) =>  setproduct(data.data))
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }



  function del(e) {
    
  }







    return (
        <div>
         <Nav />                
         <h1>CART</h1>
 

            {product.products?.map((project, id) => (
                    


                <div className=""> 
                

                <Cartlist
                    key={id}
                    id={project.sizeId}
                    price={project.price}
                    name={project.name}
                    img={imgs[id].productId.imgUrl}

                    prc={project.total}
                    quan={project.quantity}
                    weight={project.weight}
             
                
                    

                    add={sign}
                    minus={sign}
                    // refresh={'l'}
                    // del={del(id)}



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