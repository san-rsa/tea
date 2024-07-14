import React, { useState } from "react";
import List  from "../components/sub component/list/List";
import Style from "../styles/Desc.module.css"
import Nav from "../components/sub component/Nav"

const list =[ {
    getImageSrc: () => require( "../img/Rectangle 3 (1).png"),
    name: "bournevita",
    price: "£ 5.00"
},  {
    getImageSrc: () => require("../img/Rectangle 3 (2).png"),
    name: "top tea",
    price: "£ 4.00"
},
{
    getImageSrc: () => require( "../img/Rectangle 3.png"),
    name: "lip tea",
    price: "£ 9.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "milo",
    price: "£ 5.00"
},
{
    getImageSrc: () => require("../img/Rectangle 3 (1).png"),
    name: "lat tea",
    price: "£ 7.00"
}
]



const Description = ({ text, img}) => {

    const [quan, setquan] = useState(Number(1))
    const [prc, setprc] = useState(Number(5))

    function qty(params) {
        setquan(params.target.value);
        setprc(Number(params.target.value) * 5 )
    }


    function add(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) + 1;
           let pr = Number(no)*5;
           setprc(pr);
          return no;
        });
       }

       function minus(p) {
        p.preventDefault()
        setquan(prevItems => {
           let no= Number(prevItems) - 1;
           let pr = Number(no) * 5;
           setprc(pr)
          return no;
        });
       }


    return (
        <div>
         <Nav />
            <div className={Style.desc}>


            <div className={Style.tea}>
            <div className={Style.imgD}>
            <img src={require("../img/Rectangle 6.png")} alt=""/>
        </div>

            <div className={Style.rtea}>
            <h1>Milo</h1>

<form>
<div className={Style.quan}>
<div className={Style.count}>
    <button onClick={minus} value={quan}> - </button>
    <input type="number" min={0} name="qty" onChange={qty} value={quan} max={99} maxLength={2} />
    <button onClick={add} value={quan}> + </button>
</div>

<div className={Style.price}>
    <h2> £ {prc} </h2>
</div>

<div className={Style.weight}>
    <h3> WEIGHT</h3>
    <button> 400g </button>
    <button> 700g </button>
    <button> 800g </button>
</div>

<button className={Style.cartB}>ADD TO CART</button>
</div>
</form>
            </div>
            </div>

        <div className={Style.ingredient}>
            <h3>INGREDIENT</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Enim lorem elementum dui ornare id amet placerat. Eget mollis pellentesque ultrices est neque. Platea est mus nunc vitae nunc ultrices ultrices quam. A nunc massa id pellentesque. Ut urna elementum.</p>
        </div>

        <div className={Style.details}>
            <h3>DETAILS</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Enim lorem elementum dui ornare id amet placerat. Eget mollis pellentesque ultrices est neque. Platea est mus nunc vitae nunc ultrices ultrices quam. A nunc massa id pellentesque. Ut urna elementum.</p>
        </div>

        <div className={Style.others}>
            <h3>YOU MIGHT ALSO LIKE</h3>
           
            {list.map((project) => (

<div className={Style.card}> 

  <List
      price={project.price}
      name={project.name}
      img={project.getImageSrc()}
    />    
    </div>


)   )   }
        </div>


     </div>
        </div>

    )
}





export default Description