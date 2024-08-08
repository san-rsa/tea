import React, { useState, useEffect } from "react";
import Style from "../../../styles/Cart.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast, Bounce } from 'react-toastify';


import {faX } from '@fortawesome/free-solid-svg-icons'



const Cart = ({ name, img, weight, prc, quan, add, minus, del, id, size, refresh}) => {

  const [product, setproduct] = useState([])







  useEffect(() => {


      fetch(process.env.REACT_APP_API_LINK  + "getall/cart/", {
          credentials: "include",
          headers: { "Content-type": "application/json; charset=UTF-8", },
      }).then((res) =>  res.json())
      .then((data) => (setproduct(data.data)));

  }, [])

     function del(e) {
        e.preventDefault()
    
          console.log(id)
    
          
    
        try {
          const response =  fetch(process.env.REACT_APP_API_LINK + "del/cart", {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
            body: JSON.stringify({
              productId: id,
            }),
    
          }).then((res) =>  {
              if (res.status === 200) {
                  toast.success('removed from cart', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });


                fetch(process.env.REACT_APP_API_LINK  + "getall/cart/", {
                  credentials: "include",
                  headers: { "Content-type": "application/json; charset=UTF-8", },
              }).then((res) =>  res.json())
              .then((data) => (setproduct(data.data)));
              } else {
               
                  toast.error('please try again later ', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
              }
            }
          )
              
          } catch (err) {
            toast.error('please try again later ' + err, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
            console.log(err);
          }
          }

    
       
      

      


    return (
        <div>

            <div className={Style.cartlist}>


                <div className={Style.item}>

                  
                <Link to={"/product/" + name}>
       
                    <div className={Style.img}>
                        <img src={img} alt="tea" />
                    </div>
            </Link>
             




                    <div className={Style.text}>

                    <Link to={"/product/" + name}>
       
                      <div className={Style.name}>
                            <h2> {name}</h2>
                        </div>
                      </Link>
                   



                    <div className={Style.delete}>
                        <button className={Style.del} id={id} onClick={del} name="del"><FontAwesomeIcon id={id} icon={faX}/> </button>
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