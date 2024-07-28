import {React, useEffect, useState} from "react";

import List  from "../components/sub component/list/List";
import Nav from "../components/sub component/Nav"




const Menu = ({ text, img}) => {
    const [product, setproduct] = useState([])



    useEffect(() => {
        fetch("http://localhost:8000" + "/getall/product")
        .then((res) =>  res.json())
        .then((data) => setproduct(data.data));
    }, []);


    return (
        <div>
         <Nav />                
         <h1>TEA LIST</h1>
            <div className="menu">

          
            {product.map((data) => (

         
            <div className="card" key={data._id}> 

            <List
            price={data.size[0]['price']}
            id={data._id}
            name={data.name}
            img={data.imgUrl[0]}
            />    
            </div>



            )   )   }
        </div>


     </div>

    )
}





export default Menu