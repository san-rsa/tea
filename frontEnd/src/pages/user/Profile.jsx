import React, { useState } from "react";
import List  from "../../components/sub component/List";
import Style from "../../styles/Profile.module.css"
import Nav from "../../components/sub component/Nav"
import Input from "./form/Inputs";




const Profile = ({ text, img}) => {

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
            <div className={Style.Profile}>


            <div className={Style.section}>

                <div className={Style.left}>
                            <div className={Style.imgD}>
                            <img src={require("../../img/Rectangle 6.png")} alt=""/>
                            <h3> WALE ADENUGA</h3>
                            <br></br>      
                            <br></br>  
                
                                <div className={Style.tabs}>
                                    <button > personal information</button>
                                    <button> my order</button>
                                </div>
                            
                            </div></div>

        <div className={Style.right}>
            <h1>PERSONAL INFORMATION</h1>

                <form>
                <div className={Style.quan}>
                <div className={Style.details}>

                    <div className={Style.name}>
                        <Input name="first name" type={"text"} onchange={handleChange} value={data.fname} class={Style.fname} label={"first name"} />   
                        <Input name="last name" type={"text"} onchange={handleChange} value={data.lname} class={Style.lname} label={"last name"} />
                    </div>

                    <div className={Style.contact}>
                        <Input name="email" type={"email"} onchange={handleChange} value={data.email} class={Style.email} label={"email"}   />
                        <Input name="phone number" type={"number"} onchange={handleChange} value={data.number} class={Style.number} label={"phone number"}  />
                    </div>
                    
                   
                    <div className={Style.other}>
                    <Input name="address" type={"text"} onchange={handleChange} value={data.address} class={Style.address} label={"address"} />
                    <Input name="password" type={"password"} onchange={handleChange} value={data.password} class={Style.password} label={"password"}  />
                    
                    </div>
                </div>

                <div className={Style.price}>
                    <h2> £  </h2>
                </div>


                <button className={Style.cartB}>ADD TO CART</button>
                </div>
                </form>
        </div>
            </div>

     </div>
        </div>

    )
}





export default Profile