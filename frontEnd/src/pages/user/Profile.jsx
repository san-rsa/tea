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

    function ItemList({ items }) {
        return (
          <div>
            <ul>
              {items.length
                ? items.map((item) => <li key={item.id}>{item.name}</li>)
                : null}
            </ul>
          </div>
        );
      }
      


    const change = (event) => {
        event.preventDefault()
        let name = event.target.name
        let info = document.getElementById(Style.info);
        const order = document.getElementById(Style.order);

        if (event.target.name == "info") {

            info.style.opacity = '100%';
            order.style.opacity = '0%';

            info.style.display = 'grid';
            order.style.display = 'none';


            console.log(order);
            
        } else  if (event.target.name == "order") {

            info.style.opacity = '0%';
            order.style.opacity = '100%';
            info.style.display = 'none'
            order.style.display = 'grid'
            
        } 
        // else  if (event.target.name == "info") {

        //     info.style.display = 'flex'
        //     order.style.display = 'none'
            
        // } else if (event.target.name == "info") {

        //     info.style.display = 'flex'
        //     order.style.display = 'none'
            
        // } else {
            
        // }

        // info ?  info.style.display = 'flex' :  info.style.display = 'none'

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
                                    <button name="info" onClick={change}> personal information</button>
                                    <button name="order" onClick={change}> my order</button>
                                </div>
                            
                            </div></div>

        <div className={Style.right}>
            <div className={Style.info} id={Style.info}>
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

                <button className={Style.cartB}>SAVE</button>
                </div>
                </form>
            </div>


            <div className={Style.order} id={Style.order}>
                <h1 > MY ORDERS</h1>
            </div>
        </div>
            </div>

     </div>
        </div>

    )
}





export default Profile