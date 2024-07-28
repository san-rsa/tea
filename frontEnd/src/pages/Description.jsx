import React, { useState, useEffect } from "react";
import List  from "../components/sub component/list/List";
import Style from "../styles/Desc.module.css"
import Nav from "../components/sub component/Nav"
import { useParams, Link } from "react-router-dom";




const Description = ({ text, img}) => {

    const [product, setproduct] = useState([])
    const [info, setinfo] = useState({})
    const [quan, setquan] = useState(Number(0))
    const [prc, setprc] = useState(Number())
    const [price, setprice] = useState(Number())
    const [weight, setweight] = useState(Number())



    
    const link = useParams().id

   


       function wght(event) {
        event.preventDefault() 
        
        console.log(event.target.name)
        
        if (event.target.name == 0) {

            const weight0 = document.getElementById("weight0")
            const weight1 = document.getElementById("weight1")
            const weight2 = document.getElementById("weight2")

            weight0.classList.add(Style.active)
            weight1.classList.remove(Style.active)
            weight2.classList.remove(Style.active)






            setprc(info.size[0].price )
            setquan(1)
            setprice(info.size[0].price )
            setweight(0)



            
        } else  if (event.target.name == 1) {


            const weight0 = document.getElementById("weight0")
            const weight1 = document.getElementById("weight1")
            const weight2 = document.getElementById("weight2")

            weight0.classList.remove(Style.active)
            weight1.classList.add(Style.active)
            weight2.classList.remove(Style.active)



            setprc(info.size[1].price )
            setquan(1)
            setprice(info.size[1].price )
            setweight(1)







            
        }        else  if (event.target.name == 2) {

            const weight0 = document.getElementById("weight0")
            const weight1 = document.getElementById("weight1")
            const weight2 = document.getElementById("weight2")


            weight0.classList.remove(Style.active)
            weight1.classList.remove(Style.active)
            weight2.classList.add(Style.active)



            setprc(info.size[2].price )
            setquan(1)
            setprice(info.size[2].price )
            setweight(2)


        }  

       }


    
        useEffect(() => {
            fetch("http://localhost:8000" + "/getone/product/"+ link)
            .then((res) =>  res.json())
            .then((data) => setinfo(data));
        }, []);

        useEffect(() => {
            fetch("http://localhost:8000" + "/getall/product")
            .then((res) =>  res.json())
            .then((data) => setproduct(data.data));
        }, []);
    
 
    
 function qty(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * prc )

        
        if (quan <= 0) {
            setquan(1)
           }
    }


    function add(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) + 1;
           let pr = Number(no)*prc;
           setprice(pr);
          return no;
        });
       }

       function minus(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) - 1;
           let pr = Number(no) * prc;
           setprice(pr);

           if (prevItems <= 1) {
            setquan(1)
           }



          return no;
        });
       }
   console.log( info)

    return (
        <div>
         <Nav />
            <div className={Style.desc}>


            <div className={Style.tea}>
            <div className={Style.imgD}>
            <img src={info.imgUrl} alt=""/>
        </div>

            <div className={Style.rtea}>
            <h1>{info.name}</h1>

<form>
<div className={Style.quan}>
<div className={Style.count}>
    <button onClick={minus} value={quan}> - </button>
    <input type="number" min={0} name="qty" onChange={qty} value={quan} max={99} maxLength={2} />
    <button onClick={add} value={quan}> + </button>
</div>

<div className={Style.price}>
    <h2> £ {price} </h2>
</div>

<div className={Style.weight}>
    <h3> WEIGHT</h3>

    {info.size?.map((project, id) => (
    

        <button onClick={wght} name={id} value={weight} id={"weight"+id} className={Style.weightb}> {project.weight} </button>



        )   )   }


    {/* <button onClick={wght} name="size1"> {info.size[0]['weight']} </button>
    <button onClick={wght} name="size2"> {info.size[1]['weight']} </button>
    <button onClick={wght} name="size3"> {info.size[2]['weight']} </button> */}

</div>

<button className={Style.cartB}>ADD TO CART</button>
</div>
</form>
            </div>
            </div>


        <div className={Style.details}>
            <h3>DETAILS</h3>
            <p>{info.description}.</p>
        </div>

        <div className={Style.others}>
            <h3>YOU MIGHT ALSO LIKE</h3>
           
            {product.slice(0, 4).map((project) => (

                <div className="card" key={project._id}> 

                <List
                    id={project._id}
                    price={project.size[0].price}
                    name={project.name}
                    img={project.imgUrl}
                    />    
                    </div>


                )   )   }
        </div>


     </div>
        </div>

    )
}





export default Description