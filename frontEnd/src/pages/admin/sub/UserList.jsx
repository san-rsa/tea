import React from "react";
import {Link} from "react-router-dom";
import Style from "../style/AdminList.module.css"

const List = ({name, img, email}) => {

    return (

        <div className={Style.card}>

            <div className="tcard">
                <Link to={"/user"}>
                    <img id={Style.img} src={img} alt=""/>
                    <h2>{name}</h2>
                    <h4>{email}</h4>
                </Link>
                <button id={Style.admin}>
                    <Link to={"admin/delete"}>
                        add to admin
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default List