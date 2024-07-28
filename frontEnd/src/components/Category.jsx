import List from "./sub component/list/Catlist";
import "../styles/style.css";
import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Menu = () => {



 

   const [cat, setcat] = useState([])


    console.log( process.env.REACT_APP_API_LINK)

    useEffect(() => {
        fetch("http://localhost:8000" + "/getall/category")
        .then((res) =>  res.json())
        .then((data) => setcat(data.data));
    }, []);





    return (
    <div>  
       <h1>MENU BY Category</h1>

    <div className="category">

    {cat.slice(0, 4).map((project) => (

        <div className='card' key={project._id}> 

        <List
            id={project._id}
            name={project.name}
            img={project.imgUrl}
            />    
            </div>


        )   )   }
 

         <Link to={"/catlist"}> <button className={''} >MORE</button></Link>
 </div>
   </div>

  )}

export default Menu