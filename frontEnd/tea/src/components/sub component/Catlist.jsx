import React from "react";
const List = ({name, price, img}) => {


    return (

        <div className="tcard">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default List