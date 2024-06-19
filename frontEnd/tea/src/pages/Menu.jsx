import React from "react";

import List  from "../components/sub component/List";
import "../styles/style.css"
import "../styles/menu.css"
import { Image } from "@chakra-ui/react";
import Nav from "../components/sub component/Nav"

const list =[ {
    getImageSrc: () => require( "../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price: "£ 5.00"
},  {
    getImageSrc: () => require("../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: "£ 4.00"
},
{
    getImageSrc: () => require( "../img/Rectangle 3.png"),
    name: "lip tea",
    price: "£ 9.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "milo",
    price: "£ 5.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: "£ 7.00"
}
]



const Menu = ({ text, img}) => {



    return (
        <div>
         <Nav />                
         <h1>TEA LIST</h1>
            <div className="menu">

          
            {list.map((project) => (

<div className="card"> 

  <List
      price={project.price}
      name={project.name}
      img={project.getImageSrc()}
    />    
    </div>


)   )   }
        </div>


     </div>

    )
}





export default Menu