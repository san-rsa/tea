import React from "react";
import  "../../../styles/banner.css"
import { Image } from "@chakra-ui/react";



const Banner = ({ text, img }) => {



    return (
    <div className="banner">
        <Image src={img} alt="tea banner"/>
        <h2>{text}</h2>
    </div>
    )
}





export default Banner