import React, { useState, useEffect } from "react";

import Nav from "../../../../components/sub component/Nav"
import Input from "../Inputs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Style from "../../style/Form.module.css"



const Add = () => {
    const [data, setInputs] = useState({});
    const [cat, setcat] = useState([]);

    let navigate = useNavigate()



    useEffect(() => {
      fetch(process.env.REACT_APP_API_LINK  + "getall/category/",{
        method: "GET",
        credentials: "include",
        headers: {'Content-Type': 'application/json'},

      })
      .then((res) =>  res.json())
      .then((data) => setcat(data.data));
  }, []);



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const HandleSubmit = async (event) => {
    event.preventDefault();

   const api = fetch(process.env.REACT_APP_API_LINK + 'admin/add/product/', {
    method: 'POST',
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

            <h1> ADD</h1>


            <div className={Style.inp}>

<Input name="name" type={"text"} onchange={handleChange} value={data.name} class={Style.name} label={"name"} />   
<Input name="imgUrl" type={"text"} onchange={handleChange} value={data.imgUrl} class={Style.img} label={"image url address"} />



        <div className={Style.cat}>
            <label for="category ">category</label>

            <select id="categoryId" name={data.categoryId}  >

            {cat.map((datas) => (

              <option value={datas?._id} key={datas._id} > {datas.name} </option>
              )   )   }
              </select>

            </div>  
 


<div className={Style.sizes}>

 <p>size</p>
<div className={Style.size}>
 
  <div >
    <Input name="small" type={"text"} onchange={handleChange} value={data.small} class={Style.weight} label={"small"} />

    <Input name="sprice" type={"number"} onchange={handleChange} value={data.sprice} class={Style.lname} label={"S price"} />

  </div>
  <div >
    <Input name="medium" type={"text"} onchange={handleChange} value={data.medium} class={Style.weight} label={"medium "} />

    <Input name="mprice" type={"number"} onchange={handleChange} value={data.mprice} class={Style.lname} label={"M price"} />

  </div>
  <div >
    <Input name="large" type={"text"} onchange={handleChange} value={data.large} class={Style.weight} label={"large "} />

    <Input name="lprice" type={"number"} onchange={handleChange} value={data.lprice} class={Style.lname} label={"L price"} />

  </div>
</div>
</div>

    <div className={Style.description}>
    <label for="description ">description</label>


    <textarea name="description" type={"text"} onChange={handleChange} value={data.description} class={Style.description} label={"description"} />

    </div>

    </div>

<button className="submit" onClick={HandleSubmit}> Submit</button> 

</div>
</form>
            </div>
        

    )
}





export default Add