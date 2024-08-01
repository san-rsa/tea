import React, { useState, useEffect,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import List  from "../../components/sub component/list/List";
import Style from "../../styles/Profile.module.css"
import Nav from "../../components/sub component/Nav"
import Input from "./sub/Inputs";
import Order from "../../components/sub component/list/Orderview";


const list =[ {
    getImageSrc: () => require( "../../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price: "£ 5.00"
},  {
    getImageSrc: () => require("../../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: "£ 4.00"
},
{
    getImageSrc: () => require( "../../img/Rectangle 3.png"),
    name: "lip tea",
    price: "£ 9.00"
},
{
    getImageSrc: () => require("../../img/Rectangle 3 (1).png"),
    name: "milo",
    price: "£ 5.00"
},
{
    getImageSrc: () => require("../../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: "£ 7.00"
}
]




const Profile = ({ text, img}) => {
    const navigate = useNavigate();


    const [data, setInputs] = useState({});
    const [order, setorder] = useState([])
    const [product, setproduct] = useState([])
    const [user, setuser] = useState([])
    
    
    
    
    
    function Api() {

        
    
        useEffect(() => {
            fetch(process.env.REACT_APP_API_LINK + "getall/category",  {
                method: "GET",
                credentials: "include",
              }) 
            .then((res) =>  res.json())
            .then((data) => setorder(data.data));
        }, []);
    
        useEffect(() => {
            fetch(process.env.REACT_APP_API_LINK + "getall/product")
            .then((res) =>  res.json())
            .then((data) => setproduct(data.data));
        }, []);
    
        useEffect(() => {
            fetch(process.env.REACT_APP_API_LINK + "getall/user")
            .then((res) =>  res.json())
            .then((data) => setuser(data.data));
        }, []);
    }
    
    Api()













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
        const name = event.target.name
        const info = document.getElementById(Style.info);
        const order = document.getElementById(Style.order);
        const wishlist = document.getElementById(Style.wishlist);

        if (event.target.name == "info") {

            info.style.display = 'block';
            order.style.display = 'none';
            wishlist.style.display = 'none';
            
        } else  if (event.target.name == "order") {

            info.style.display = 'none'
            wishlist.style.display = 'none';
            order.style.display = 'block'

            
        } 
        else  if (event.target.name == "wishlist") {

            info.style.display = 'none'
            order.style.display = 'none'
            wishlist.style.display = 'block';

            
        } }

            const logout = async (event) => {
       
           
                const api = await fetch(process.env.REACT_APP_API_LINK + 'auth/logout/', {
                    method: 'GET',
                    credentials: "include",
                    headers: {'Content-Type': 'application/json'},
                     })
                     
                     if (api.status === 200) {
                      navigate("/");
                    } 
                  }
            
       
        //else {
            
        // }

        // info ?  info.style.display = 'flex' :  info.style.display = 'none'



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

                                    <div >
                                        <button name="info" onClick={change}> personal information</button>
                                    </div>

                                    <div >
                                        <button name="order" onClick={change}> my order</button>
                                    </div>

                                    <div >
                                        <button name="wishlist" onClick={change}> wishlist</button>
                                    </div>

                                    <div id={Style.logout} >
                                        <button name="log-out" onClick={logout}> log out</button>
                                    </div>

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
                <Order/>
            </div>

            <div className={Style.wishlist} id={Style.wishlist} >
                <h1 > WISHLIST</h1>

            {list.map((project) => (

                <div className="card"> 

                <List
                    price={project.price}
                    name={project.name}
                    img={project.getImageSrc()}
                    />    
                    </div>


)   )   }

            </div>
 

                <div id={Style.logout2} >
                    <button name="log-out" onClick={logout}> log out</button>
                </div>

            </div>
            </div>

     </div>
        </div>

    )
}





export default Profile