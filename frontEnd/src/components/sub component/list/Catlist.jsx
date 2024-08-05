import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img, id}) => {




    return (

        <Link to={"/category/" +id}>
                    <div className="tcard">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
        </Link>
    )
}

export default List