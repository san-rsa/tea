import React from "react";
import "../../styles/nav.css"
import {Link} from "react-router-dom"

const Nav = () => {


    return (
        <nav>
        <div className="lnav">
            <a >burger</a>
        </div>

        <Link to={"/"}><h1 id="navh1">TEA NAME</h1></Link>

        <div className="rnav">
            <Link className="navr" to={"/cart"}>cart</Link>
            <Link className="navr"to={"account"}>acc</Link>
        </div>

    </nav>
    )
}

export default Nav