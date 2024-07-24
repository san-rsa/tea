import React, { useState } from "react";

import Style from "../../../styles/Login.module.css"

const Inputs = ( props) => {



    return (
        <div className={props.class}>
        <label >{props.label}</label>
        <input type={props.type}  name={props.name} onChange={props.onchange} value={props.value} id={props.name} placeholder={props.name} required />
        </div>

    )
}



export default Inputs