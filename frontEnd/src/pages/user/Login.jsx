import React, { useState, useEffect, createContext, useContext  } from "react";

import Nav from "../../components/sub component/Nav"
import Input from "./sub/Inputs";
import { Link, useNavigate } from "react-router-dom";
import Style from "../../styles/Login.module.css"



const Login = ({ img}) => {
     const AuthContext = createContext();

    const [data, setInputs] = useState({});
    const [token, setTokens] = useState('');
    const [data2, setData] = useState('');

    const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
    const navigate = useNavigate();

 const AuthProvider = ({ children }) => {
  const [token, setTokens] = useState(null);
  const [loading, setLoading] = useState(true); // <-- Add a loading state
    const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false); // Mark loading as complete after setting the token
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const  handleSubmit = async (event) => {
      event.preventDefault();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(data.email + ":" +  data.password));
    // headers.append('Origin','http://localhost:8000');

    const t = 'tttt'
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
   
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${t}`);
    const api = await fetch('http://localhost:8000/auth/login/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data)
     })

     const { tokens } = await api.json();
    setTokens(tokens);


     let apis = await api.json()

     console.log(apis)
  
  
  // .then((res) => {
  //       const { token } = res.json();
  //      // setToken(token);
        
  //       console.log(token, res)    
  //      if (res.status == 200)     {
  //       navigate("/user"); 
  //      } 
  //       console.log(res.status)
  
  //   }).then((info) => {
  //     const { token } = info.json();
  //     //setToken(token);
      
  //     console.log(token)    
  //     console.log(info)

     
  // }).catch((e) => {
  //     console.log(e);
     
  //   })       
     



 
  
      console.log( data)






      // try {
      //   const response =fetch('http://localhost:8000/login/', {
      //       method: 'POST',
      //       headers: myHeaders,
      //       body: JSON.stringify(data)
      //       })   
      //   setToken(response.data.token);
      //   localStorage.setItem("token", response.data.token);
      //   navigate("/dashboard");
      // } catch (error) {
      //   console.error("Authentication failed:", error);
      //   setToken(null);
      //   localStorage.removeItem("token");
      //   if (error.response && error.response.data) {
      //     setErrorMessage(error.response.data); // Set the error message if present in the error response
      //   } else {
      //     setErrorMessage("An unexpected error occurred. Please try again.");
      //   }}  







      
    }


    return (
        <div>
         <Nav />

<form>
        <div className="form">

            <h1> SIGN IN</h1>

                <div className={Style.inp}>
                    
            <Input name="email" type={"email"} onchange={handleChange} value={data.email} class={Style.email} label={"email"} />
            <Input name="password" type={"password"} onchange={handleChange} value={data.password} class={Style.password} label={"password"} />
                </div>

            <button className="login" onClick={handleSubmit}> Log in</button> 


            <h3 > New here you can sign up <Link to={"/register"}> here now</Link> </h3>
        </div>
</form>
            </div>
        

    )
}





export default Login