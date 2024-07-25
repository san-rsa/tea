import React, { useState } from "react";

import Nav from "../../../../components/sub component/Nav"
import Input from "../Inputs";
import { Link } from "react-router-dom";
import Style from "../../style/Form.module.css"



const Edit = ({ img}) => {
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

            <h1> Edit</h1>

                <div className={Style.inp}>

            <Input name="name" type={"text"} onchange={handleChange} value={data.name} class={Style.name} label={"name"} />   
            <Input name="img" type={"text"} onchange={handleChange} value={data.img} class={Style.img} label={"image url address"} />
            
            <Input name="category" type={"text"} onchange={handleChange} value={data.category} class={Style.category} label={"category"} />

            <div className={Style.sizes}>

              <p>size</p>
              <div className={Style.size}>

              <div >
                <Input name="small" type={"number"} onchange={handleChange} value={data.weight} class={Style.weight} label={"small"} />

                <Input name="sprice" type={"number"} onchange={handleChange} value={data.price} class={Style.lname} label={"S price"} />

              </div>
              <div >
                <Input name="medium" type={"number"} onchange={handleChange} value={data.weight} class={Style.weight} label={"medium "} />

                <Input name="mprice" type={"number"} onchange={handleChange} value={data.price} class={Style.lname} label={"M price"} />

              </div>
              <div >
                <Input name="large" type={"number"} onchange={handleChange} value={data.weight} class={Style.weight} label={"large "} />

                <Input name="lprice" type={"number"} onchange={handleChange} value={data.price} class={Style.lname} label={"L price"} />

              </div>
              </div>
              </div>

  

            <Input name="description" type={"text"} onchange={handleChange} value={data.description} class={Style.description} label={"description"} />
                </div>

            <button className="submit" onClick={handleSubmit}> Submit</button> 

        </div>
</form>
            </div>
        

    )
}





export default Edit