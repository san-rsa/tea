import React, { useState, useEffect } from "react";

import Nav from "../../../../components/sub component/Nav"
import Input from "../Inputs";
import { Link, useParams, useNavigate } from "react-router-dom";
import Style from "../../style/Form.module.css"



const Edit = () => {
    const [data, setInputs] = useState({});
    const link = useParams().id
    let navigate = useNavigate()



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

          useEffect(() => {
            fetch(process.env.REACT_APP_API_LINK  + "getone/banner/"+ link,{
              method: "GET",
              credentials: "include",
              headers: {'Content-Type': 'application/json'},

            }

            )
            .then((res) =>  res.json())
            .then((data) => setInputs({"text": data.text, "imgUrl": data.imgUrl}));
        }, []);



  const HandleSubmit =  (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_API_LINK + 'admin/edit/banner/' + link, {
      method: 'PATCH',
      credentials: "include",    
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

            <h1> Edit</h1>

                <div className={Style.inp}>

                <Input name="text" type={"text"} onchange={handleChange} value={data.text} class={Style.name} label={"name"} />   
                <Input name="imgUrl" type={"text"} onchange={handleChange} value={data.imgUrl} class={Style.img} label={"image url address"} />

                </div>

            <button className="submit" onClick={HandleSubmit}> Submit</button> 

        </div>
</form>
            </div>
        

    )
}





export default Edit