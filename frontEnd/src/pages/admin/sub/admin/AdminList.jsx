import React from "react";
import { Link } from "react-router-dom";
import Style from "../../style/AdminList.module.css"


const List = ({name, img, email, id}) => {
    


    return (


        <div className={Style.card} >
        <div className="tcard">
                <img id={Style.img} src={img} alt="" />
                <h2>{name}</h2>
                <h4>{email}</h4>

               <button id={Style.delete} > <Link to={"admin/delete/" + id}> delete </Link> </button>
        </div>
</div>
    )
}

export default List