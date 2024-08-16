import React, { useState, useEffect } from "react";

import "../styles/style.css"
import Style from "../styles/Checkout.module.css"
import Nav from "../components/sub component/Nav"
import { Link } from "react-router-dom";
import  Checkoutlist  from "../components/sub component/list/Checkoutlist";




export async function getCart(setproduct, setimg, setweight, weight) {
    fetch(process.env.REACT_APP_API_LINK  + "getone/checkout/", {
    credentials: "include",
    headers: { "Content-type": "application/json; charset=UTF-8", },
}).then((res) =>  res.json())
.then((data) => { return (setproduct(data.data), setimg(data.data.products))});

}


const Checkout = ({ text, img}) => {

    const [product, setproduct] = useState([])
    const [imgs, setimg] = useState([])


    useEffect(() => {
            
     getCart(setproduct, setimg)
  }, []);
  




    return (
        <div>
         <Nav />                
         <h1>CHECKOUT</h1>
            <div className={Style.checkout}>


                            {product.products?.map((project, id) => (


                    <Checkoutlist
                        price={project.price}
                        name={project.name}
                        key={id}
                        id={project._id}
                        img={imgs[id].productId.imgUrl}
                        prc={project.total}
                        qty={project.quantity}
                        weight={project.weight}
                        setproduct={setproduct} 
                        setimg={setimg}


                        />    

                    )   )   }

                    <div className={Style.total} > 
                        <h3> TOTAL: € {product.totalCost}</h3>
                    </div>

                    <form action={ "/payment"} method="POST">
                        <div className={Style.cartbtn} >
                       <button type="submit" className={Style.checkout}>
                        COMFIRM
                    </button>
                    </div>
                    </form>

                        <div className={Style.cartbtn} >
                       <Link to={"/payment"}><button type="submit" className={Style.checkout}>
                        COMFIRM
                    </button> </Link>
                    </div>

             
          

        </div>


     </div>

    )
}





export default Checkout;


const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <Checkout />
  );
}