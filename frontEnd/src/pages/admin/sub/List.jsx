import React from "react";
import { Link } from "react-router-dom";
import style from "../style/List.module.css"


const List = ({name, price, img, stock, id}) => {
    

    function del(e) {
        e.preventDefault()
    
          console.log(id)
    
          
    
        try {
          const response =  fetch(process.env.REACT_APP_API_LINK + "admin/del/cart", {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
            body: JSON.stringify({
              productId: id,
            }),
    
          }).then((res) =>  res.json())
    
        } catch (err) {
          alert("Something Went Wrong");
          console.log(err);
        }
      }

    return (


        <div className={style.card} >
        <div className="tcard" >
             <Link to={"/product/" + name}>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>€ {price}</p>
            </Link>   

                 <button id={style.edit}> <Link to={"/admin/edittea/" + id }> edit  </Link> </button>
               <button id={style.delete} onClick={del} > <Link to={"admin/delete/" + id}> delete </Link> </button>
        </div>
</div>
    )
}

export default List