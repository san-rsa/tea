import React, { useState, useEffect } from "react";
import List  from "./sub/List";
import Bannerlist  from "./sub/Bannerlist";
import Categorylist  from "./sub/Categorylist";

import AdminList from "./sub/admin/AdminList"
import UserList from "./sub/UserList"
import Style from "../../styles/Admin.module.css"
import Nav from "../../components/sub component/Nav"
import Input from "./sub/Inputs";
import Search from "./sub/Search";

import Order from "../../components/sub component/list/Orderview";
import { Link } from "react-router-dom";


const Admin =  () => {

const [admin, setadmin] = useState([])
const [banner, setbanner] = useState([])
const [category, setcategory] = useState([])
const [order, setorder] = useState([])
const [product, setproduct] = useState([])
const [user, setuser] = useState([])





function Api() {
    useEffect(() => {
        fetch("http://localhost:8000/getall/banner")
        .then((res) =>  res.json())
        .then((data) => setbanner(data.data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/getall/category")
        .then((res) =>  res.json())
        .then((data) => setcategory(data.data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/getall/product")
        .then((res) =>  res.json())
        .then((data) => setproduct(data.data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/getall/user")
        .then((res) =>  res.json())
        .then((data) => setuser(data.data));
    }, []);
}

Api()

          //  console.log(product)

    
    //    const api = fetch('http://localhost:8000/getall/product', {
    //     })
        
    //     .then((res) => {
    //           console.log(res)       
    //     }).then(
    //       data => console.log(data))
        
    //     .catch((e) => {
    //       console.log(e);
    //       let msg = "fail"
    //     })
    
    
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(data.email + ":" +  data.password));
    // headers.append('Origin','http://localhost:8000');

    const t = 'tttt'
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
   
    // myHeaders.append('Authorization', `Bearer ${t}`);
    // const api =  fetch('http://localhost:8000/admin/', {
    // method: 'GET',
    //  })


     
     

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

    //console.log(reorder);



      


    const change = (event) => {
        event.preventDefault()
        const name = event.target.name
        const info = document.getElementById(Style.info);
        const order = document.getElementById(Style.order);
        const tea = document.getElementById(Style.tea);
        const admin = document.getElementById(Style.admin);
        const user = document.getElementById(Style.user);
        const banner = document.getElementById(Style.banner);
        const category = document.getElementById(Style.category);

   



        if (event.target.name == "info") {

            info.style.display = 'block';
            order.style.display = 'none';
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'none';
            banner.style.display = 'none';
            category.style.display = 'none';


            
        } else  if (event.target.name == "order") {

            info.style.display = 'none'
            tea.style.display = 'none';
            order.style.display = 'block'
            admin.style.display = 'none';
            user.style.display = 'none';
            banner.style.display = 'none';
            category.style.display = 'none';

            
        }        else  if (event.target.name == "tea") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'block';
            admin.style.display = 'none';
            user.style.display = 'none';
            banner.style.display = 'none';
            category.style.display = 'none';

        }         else  if (event.target.name == "admin") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'block';
            user.style.display = 'none';
            banner.style.display = 'none';
            category.style.display = 'none';

        }         else  if (event.target.name == "user") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'block';
            banner.style.display = 'none';
            category.style.display = 'none';

        }  else  if (event.target.name == "banner") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'none';
            banner.style.display = 'block';
            category.style.display = 'none';

        }   else  if (event.target.name == "category") {

            info.style.display = 'none'
            order.style.display = 'none'
            tea.style.display = 'none';
            admin.style.display = 'none';
            user.style.display = 'none';
            banner.style.display = 'none';
            category.style.display = 'block';

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

                                    <div >
                                        <button name="banner" onClick={change}> banner</button>
                                    </div>

                                    <div >
                                        <button name="category" onClick={change}> category</button>
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


            {product.map((data) => (

         
                 <div className="card" key={data._id}> 

                <List
                    price={data.size[0]['price']}
                    id={data._id}
                    name={data.name}
                    img={data.imgUrl[0]}
                    />    
                   </div>
              
            

)   )   }

            </div>
 

            <div className={Style.admin} id={Style.admin}>
                <h1 > ADMIN</h1>
                <button className={Style.add}> <Link to={"/admin/addadmin"}> ADD NEW</Link> </button>

                {admin.map((project) => (

                    <div className="card" key={project._id}> 



                    <AdminList
                        id={project._id}
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

                {user.map((project, id) => (

                    <div className="card" key={project._id}> 



                    <UserList
                        id={project._id}
                        name={project.name}
                        img={project.imgUrl}
                        email={project.email}
                        />    
                        </div>


                    )   )   }
            </div>

            <div className={Style.banner} id={Style.banner}>
                    <h1> BANNERS</h1>

                    <button className={Style.add}> <Link to={"/admin/addbanner"}> ADD NEW</Link> </button>


                    {banner.map((data) => (

         
                    <div className="card" key={data._id}> 

                    <Bannerlist
                    id={data._id}
                    name={data.text}
                    img={data.imgUrl[0]}
                    />    
                    </div>



                    )   )   }


            </div>


            <div className={Style.category} id={Style.category}>
                <h1> CATEGORIES</h1>

                <button className={Style.add}> <Link to={"/admin/addcategory"}> ADD NEW</Link> </button>



                {category.map((data) => (

         
                    <div className="card" key={data._id}> 

                    <Categorylist
                    id={data._id}
                    name={data.name}
                    img={data.imgUrl[0]}
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