import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/nav.css"
import {Link} from "react-router-dom"
import { faBars, faUser, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'



const Nav = () => {


    return (
        <nav>
        <div className="lnav">
            <a ><FontAwesomeIcon icon={faBars} size="1x"/> </a> 
        </div>

        <Link to={"/"}><h1 id="navh1">TEA NAME</h1></Link>

        <div className="rnav">
            <Link className="navr" to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/> </Link>
            <Link className="navr"to={"/account"}><FontAwesomeIcon icon={faUser}/> </Link>
        </div>

    </nav>
    )
}

export default Nav