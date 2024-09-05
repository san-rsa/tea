import React from "react";
import Style from "../../../styles/Search.module.css"

import List  from "../../../components/sub component/list/List";
import "../../../styles/style.css"
import "../../../styles/menu.css"
import Nav from "../../../components/sub component/Nav"
import Catlist from "../../../components/sub component/list/Catlist"
import Orrderview from "../../../components/sub component/list/Orderview"

import UserList from "./UserList"



const list =[ {
    getImageSrc: () => require( "../../../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price: "£ 5.00"
},  {
    getImageSrc: () => require("../../../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: "£ 4.00"
},
{
    getImageSrc: () => require( "../../../img/Rectangle 3.png"),
    name: "lip tea",
    price: "£ 9.00"
},
{
    getImageSrc: () => require("../../../img/Rectangle 3 (1).png"),
    name: "milo",
    price: "£ 5.00"
},
{
    getImageSrc: () => require("../../../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: "£ 7.00"
}
]



const Search = ({ text, img}) => {



    return (
        <div>
         <Nav />                
         <h1>SEARCH</h1>

         <div className={Style.user}>
            <h2 > USERS</h2>
            
            {list.map((project) => (

            <div className={Style.usr}> 

            <UserList
                price={project.price}
                name={project.name}
                img={project.getImageSrc()}
                />    
                </div>


            )   )   }

         </div>
           
            <div className="">
            <h2> TEAS</h2>
         
          
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


        <div className={Style.cat}>
            <h2>CATEGORIES</h2>

                {list.map((project) => (

            <div className="card"> 

            <Catlist
                price={project.price}
                name={project.name}
                img={project.getImageSrc()}
                />    
                </div>


            )   )   }


        </div>

        <div className={Style.order}>
            <h2>ORDERS</h2>


            {list.map((project) => (

                    <div className=""> 

                    <Orrderview
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





export default Search