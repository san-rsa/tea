import React from "react";
import { Link } from "react-router-dom";
import Style from "../../style/AdminList.module.css"


const List = ({name, img, email, id}) => {
    
    function del(params) {
        try {
            const response =  fetch(process.env.REACT_APP_API_LINK + "admin/del/admin", {
              method: "PATCH",
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


        <div className={Style.card} >
        <div className="tcard">
                <img id={Style.img} src={img} alt="" />
                <h2>{name}</h2>
                <h4>{email}</h4>

               <button id={Style.delete} onClick={del}> delete  </button>
        </div>
</div>
    )
}

export default List