import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img}) => {


    return (

        <Link to={"/desc"}>
                    <div className="tcard">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button>cart</button>
        </div>
        </Link>
    )
}

export default List