import React from "react";
import List from "./sub component/List";
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
    // <div class="trending">
    //      <h1>TRENDING</h1>
    //    { list.map((prop) => {
            
           
    //         <List 
    //             // img={prop.getImageSrc()}
    //             name={prop.name}
    //             price={prop.price}
    //             />
    
    
    //     })  }  </div>

    <div>  
       <h1>TRENDING</h1>

    <div className="trending">

 
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

  )}

export default Menu