import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img}) => {


    return (

      
                    <div className="tcard">
                          <Link to={"/desc"}>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
               </Link>   
            <button> <List to={""}>cart</List> </button>
        </div>
  
    )
}

export default List