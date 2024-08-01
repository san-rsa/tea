import {React, useState, useEffect} from "react";
import  "../../styles/banner.css"
import Bannerlist from "./list/Bannerlist"
import { Image } from "@chakra-ui/react";



const Banner = ({ text, img}) => {

    const [banner, setbanner] = useState([])


    console.log( process.env.REACT_APP_API_LINK)

    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK + "getall/banner")
        .then((res) =>  res.json())
        .then((data) => setbanner(data.data));
    }, []);



    return (

         <div> 
          {banner.slice(0, 1).map((project) => (

            <div className='' key={project._id}> 
            
              <Bannerlist
                  text={project.text}
                  img={project.imgUrl}
                />    
                </div>
            
            
            )   )   }
        </div>
    )
}





export default Banner