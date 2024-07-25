import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img, id}) => {


    return (


        <div className="tcard">
            <Link to={"/desc"}>

                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>€ {price}</p>
            </Link>
  
            <button><Link to={"/cart/" + id} >cart</Link> </button>
        </div>

    )
}

export default List