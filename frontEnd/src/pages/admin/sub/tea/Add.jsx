import React, { useState } from "react";

import Nav from "../../../../components/sub component/Nav"
import Input from "../Inputs";
import { Link } from "react-router-dom";
import Style from "../../style/Form.module.css"



const Add = ({ img}) => {
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

            <h1> ADD</h1>

                <div className={Style.inp}>

            <Input name="name" type={"text"} onchange={handleChange} value={data.name} class={Style.name} label={"name"} />   
            <Input name="img" type={"url"} onchange={handleChange} value={data.img} class={Style.img} label={"image url address"} />
            
            <Input name="category" type={"text"} onchange={handleChange} value={data.category} class={Style.category} label={"category"} />


            <Input name="price" type={"number"} onchange={handleChange} value={data.price} class={Style.lname} label={"price"} />


            <Input name="weight" type={"number"} onchange={handleChange} value={data.weight} class={Style.weight} label={"weight"} />

  

            <Input name="description" type={"text"} onchange={handleChange} value={data.description} class={Style.description} label={"description"} />
                </div>

            <button className="submit" onClick={handleSubmit}> Submit</button> 

        </div>
</form>
            </div>
        

    )
}





export default Add