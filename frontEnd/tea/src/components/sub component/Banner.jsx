import React from "react";
import "../../styles/style.css"
import { Image } from "@chakra-ui/react";



const Banner = ({ text, img}) => {



    return (
    <div className="banner">
        <Image src={img} alt="tea banner"/>
        <p>{text}</p>
    </div>
    )
}





export default Banner