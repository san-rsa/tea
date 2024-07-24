import React, { useState } from "react";

import Nav from "../../../../components/sub component/Nav"
import Input from "../Inputs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Style from "../../style/Form.module.css"



const Add = ({ img}) => {
    const [data, setInputs] = useState({});
    let navigate = useNavigate()


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const HandleSubmit = async (event) => {
    event.preventDefault();

   const api = fetch('http://localhost:8000/admin/add/category/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
    })
    
    .then((res) => {
       if (res.status == 200)     {
        navigate("/admin"); 
       } 
        console.log(res)       
    }).then(
      data => console.log(data))
    
    .catch((e) => {
      console.log(e);
      let msg = "fail"
    })


 
  
      console.log(data)
  }


    return (
        <div>
         <Nav />

<form>
        <div className="form">

            <h1> ADD</h1>

                <div className={Style.inp}>

            <Input name="name" type={"text"} onchange={handleChange} value={data.name} class={Style.name} label={"name"} />   
            <Input name="imgUrl" type={"text"} onchange={handleChange} value={data.img} class={Style.img} label={"image url address"} />
            
             </div>

            <button className="submit" onClick={HandleSubmit}> Submit</button> 

        </div>
</form>
            </div>
        

    )
}





export default Add