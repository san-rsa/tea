import React from "react";
import "../../styles/nav.css"

const Nav = () => {


    return (
        <nav>
        <div className="lnav">
            <a>burger</a>
        </div>

        <h1 id="navh1">TEA NAME</h1>

        <div className="rnav">
            <a className="navr">cart</a>
            <a className="navr">acc</a>
        </div>

    </nav>
    )
}

export default Nav