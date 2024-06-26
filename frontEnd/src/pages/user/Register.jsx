import React, { useState } from "react";

import Nav from "../../components/sub component/Nav"
import Input from "./form/Inputs";
import { Link } from "react-router-dom";
import Style from "../../styles/Register.module.css"



const Register = ({ img}) => {
    const [data, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(data);
    console.log(data);
  }


    return (
        <div>
         <Nav />

<form>
        <div className="form">

            <h1> SIGN UP</h1>

                <div className={Style.inp}>

            <Input name="first name" type={"text"} onchange={handleChange} value={data.fname} class={Style.fname} />   
            <Input name="last name" type={"text"} onchange={handleChange} value={data.lname} class={Style.lname} />
            <Input name="email" type={"email"} onchange={handleChange} value={data.email} class={Style.email} />
            <Input name="phone number" type={"number"} onchange={handleChange} value={data.number} class={Style.number} />

            <Input name="address" type={"text"} onchange={handleChange} value={data.address} class={Style.address} />

            <Input name="password" type={"password"} onchange={handleChange} value={data.password} class={Style.password} />
                </div>

            <button className="login" onClick={handleSubmit}> Sign up</button> 


            <h3 > Have an account sign in <Link to={"/register"}> here now</Link> </h3>
        </div>
</form>
            </div>
        

    )
}





export default Register