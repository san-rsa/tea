import React, { useState, ReactDOM } from "react";
import Style from "../../styles/Alert.module.css"




const Alert = ({text, text2}) => {


    return (
        <div className={Style.alert}>
            <h2 className={Style[text]}> {text} {text2}</h2>


        </div>



    )
}

export default Alert