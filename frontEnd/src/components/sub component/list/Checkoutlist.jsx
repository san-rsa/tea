import React, { useState } from "react";
import Style from "../../../styles/Checkout.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faX } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast, Bounce } from 'react-toastify';

import { getCart } from "../../../pages/Cart";


const Checkoutlist = ({ qty, price, name,setproduct,setimg, img, weight, id, }) => {


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
                  toast.success('removed from checkout ', {
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


                getCart(setproduct, setimg)
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
  
            <div className={Style.Checkoutlist}>

                <div className={Style.item}>
                    <div className={Style.img}>
                        <img src={img} alt="tea" />
                    </div>




                    <div className={Style.text}>
                        <div className={Style.name}>
                            <h2>{name}</h2>
                        </div>
                    <div className={Style.delete}>
                    <button className={Style.del} id={id} onClick={del} name="del"><FontAwesomeIcon id={id} icon={faX}/> </button>
                    </div>


                    <div>


                    <div className={Style.quan}>
                        <div className={Style.count}>
                            <p> X{qty}</p>
                        </div>

                        <div className={Style.weight}>
                            <p> WEIGHT: {weight}</p>
                        </div>

                        </div>
                        <div className={Style.price}>
                            <h2> {price} </h2>
                        </div>
                    </div>

                    </div>


                </div>

          
        </div>


     </div>

    )
}





export default Checkoutlist