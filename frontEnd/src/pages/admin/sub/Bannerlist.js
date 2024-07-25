import React from "react";
import { Link } from "react-router-dom";
import style from "../style/List.module.css"


const List = ({name, img, id}) => {
    


    return (


        <div className={style.card} >
        <div className="tcard" >
             <Link to={"/desc"}>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </Link>   

                 <button id={style.edit}> <Link to={"/admin/editbanner/" + id }> edit  </Link> </button>
               <button id={style.delete} > <Link to={"admin/delete/" + id}> delete </Link> </button>
        </div>
</div>
    )
}

export default List