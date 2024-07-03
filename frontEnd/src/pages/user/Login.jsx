import React, { useState } from "react";

import Nav from "../../components/sub component/Nav"
import Input from "./form/Inputs";
import { Link } from "react-router-dom";
import Style from "../../styles/Login.module.css"



const Login = ({ img}) => {

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

            <h1> SIGN IN</h1>

                <div className={Style.inp}>
                    
            <Input name="email" type={"email"} onchange={handleChange} value={data.email} class={Style.email} label={"email"} />
            <Input name="password" type={"password"} onchange={handleChange} value={data.password} class={Style.password} label={"password"} />
                </div>

            <button className="login" onClick={handleSubmit}> Log in</button> 


            <h3 > New here you can sign up <Link to={"/register"}> here now</Link> </h3>
        </div>
</form>
            </div>
        

    )
}





export default Login