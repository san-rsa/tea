import React, { useState } from "react";
import List  from "./sub/List";
import AdminList from "./sub/admin/AdminList"
import UserList from "./sub/UserList"
import Style from "../../styles/Admin.module.css"
import Nav from "../../components/sub component/Nav"
import Input from "./sub/Inputs";
import Search from "./sub/Search";

import Order from "../../components/sub component/list/Orderview";
import { Link } from "react-router-dom";


const list =[ {
    getImageSrc: () => require( "../../img/Rectangle 6.png"),
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



const Admin = ({ text, img}) => {

    const [data, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
       const reorder = document.getElementById(Style.reorder);
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(data);
      console.log(data);
    }
    // reorder.style.display = 'none';

    console.log(reorder);



      


    const change = (event) => {
        event.preventDefault()
        const name = event.target.name
        const info = document.getElementById(Style.info);
        const order = document.getElementById(Style.order);
        const tea = document.getElementById(Style.tea);
        const admin = document.getElementById(Style.admin);
        const user = document.getElementById(Style.user);
   



        if (event.target.name == "info") {

            info.style.display = 'block';
            order.style.display = 'none';
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'none';

            
        } else  if (event.target.name == "order") {

            info.style.display = 'none'
            tea.style.display = 'none';
            order.style.display = 'block'
            admin.style.display = 'none';
            user.style.display = 'none';

            
        }        else  if (event.target.name == "tea") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'block';
            admin.style.display = 'none';
            user.style.display = 'none';

        }         else  if (event.target.name == "admin") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'block';
            user.style.display = 'none';

        }         else  if (event.target.name == "user") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'block';

        } 

       
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

                                    <div >
                                        <button name="info" onClick={change}> personal information</button>
                                    </div>

                                    <div >
                                        <button name="order" onClick={change}> orders</button>
                                    </div>

                                    <div >
                                        <button name="admin" onClick={change}> admins</button>
                                    </div>

                                    <div >
                                        <button name="user" onClick={change}> users</button>
                                    </div>

                                    <div >
                                        <button name="tea" onClick={change}> tea</button>
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


                <h1 > ORDERS</h1>

            <div className={Style.search} >
                <Search name="order" type={"text"} onchange={handleChange} value={data.order} class={Style.order} /> 
                <button><Link to={"search"}> search</Link> </button> 
            </div>

                <Order/>
            </div>

            <div className={Style.tea} id={Style.tea} >


            

                <h1 > TEA</h1>

            <div className={Style.search} >
               <Search name="tea" type={"text"} onchange={handleChange} value={data.tea} class={Style.tea} />   

                <button><Link to={"/search"}> search</Link> </button> 
            </div>

                <button className={Style.add}> <Link to={"/admin/addtea"}> ADD NEW</Link> </button>


            {list.map((project, id) => (

                <div className="card" key={id}> 



                <List
                    price={project.price}
                    name={project.name}
                    img={project.getImageSrc()}
                    stock={"500"}
                    />    
                    </div>


)   )   }

            </div>
 

            <div className={Style.admin} id={Style.admin}>
                <h1 > ADMIN</h1>
                <button className={Style.add}> <Link to={"/admin/addadmin"}> ADD NEW</Link> </button>

                {list.map((project, id) => (

                    <div className="card" key={id}> 



                    <AdminList
                        name={project.name}
                        img={project.getImageSrc()}
                        email={"eeee@gmail.com"}
                        />    
                        </div>


                    )   )   }
            </div>


            <div className={Style.user} id={Style.user}>
                



                <h1 > USER</h1>
           
            <div className={Style.search} >
                <Search name="user" type={"text"} onchange={handleChange} value={data.user} class={Style.user} />   

                <button><Link to={"search"}> search</Link> </button> 
            </div>

                {list.map((project, id) => (

                    <div className="card" key={id}> 



                    <UserList
                        name={project.name}
                        img={project.getImageSrc()}
                        email={"eeee@gmail.com"}
                        />    
                        </div>


                    )   )   }
            </div>

            </div>
            </div>

     </div>
        </div>

    )
}





export default Admin