import React from "react";


const Banner = ({ text, img }) => {

    return (
    <div className="banner">
        <img src={img} alt="tea banner"/>
        <h2>{text}</h2>
    </div>
    )
}





export default Banner