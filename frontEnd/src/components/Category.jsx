import React from "react";
import List from "./sub component/list/Catlist";
import "../styles/style.css";



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

const Menu = () => {


    return (
    <div>  
       <h1>MENU BY Category</h1>

    <div className="category">

 
        {list.map((project) => (

<div className="card"> 

  <List
      name={project.name}
      img={project.getImageSrc()}
    />    
    </div>


)   )   }

    <button>Show all</button>
    </div>
   </div>

  )}

export default Menu