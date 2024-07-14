import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img}) => {


    return (

        <Link to={"/category"}>
                    <div className="tcard">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
        </Link>
    )
}

export default List