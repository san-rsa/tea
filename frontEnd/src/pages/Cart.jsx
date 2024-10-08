import React, { useState, useEffect } from "react";
import Cartlist  from "../components/sub component/list/Cartlist";
import Style from "../styles/Cart.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




    export async function getCart(setproduct, setimg, setweight, weight) {
            fetch(process.env.REACT_APP_API_LINK  + "getall/cart/", {
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
        }).then((res) =>  res.json())
        .then((data) => { return (setproduct(data.data), setimg(data.data.products))});
 
    }

const Cart = () => {

    const [product, setproduct] = useState([])
    const [imgs, setimg] = useState([])


    useEffect(() => {
            
     getCart(setproduct, setimg)
  }, []);
  
  
   function sign(e) {
    e.preventDefault()
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

  console.log(product.products);




    return (
        <div>
         <Nav />                
         <h1>CART</h1>
 

            {product.products?.map((project, id) => (
                    


                <div className=""> 
                

                <Cartlist
                    key={id}
                    id={project._id}
                    size={project.sizeId}
                    price={project.price}
                    name={project.name}
                    img={imgs[id].productId.imgUrl}

                    prc={project.total}
                    quan={project.quantity}
                    weight={project.weight}
                              
                    add={sign}
                    minus={sign}
                    setproduct={setproduct} 
                    setimg={setimg}



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