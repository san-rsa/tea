import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from "../../styles/Nav.module.css"
import {Link} from "react-router-dom"
import { faBars, faUser, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'



const Nav = () => {


    return (
        <nav>
        <div className={Style.lnav}>
            <a ><FontAwesomeIcon icon={faBars} size="1x"/> </a> 
        </div>

        <Link to={"/"}><h1 id="navh1">TEA NAME</h1></Link>

        <div className={Style.rnav}>
            <Link className={Style.navr} to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/> </Link>
            <Link className={Style.navr}to={"/account"}><FontAwesomeIcon icon={faUser}/> </Link>
        </div>

    </nav>
    )
}

export default Nav