import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img, id}) => {



     async function addToCart(id, quantity) {
        try {
          const response = await fetch("http://localhost:8000/cart/" + id, {
            method: "POST",
            body: JSON.stringify({
              productId: id,
              quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data = await response.json();
          alert("Item Added To Cart");
          console.log(data);
        } catch (err) {
          alert("Something Went Wrong");
          console.log(err);
        }
      }
    return (


        <div className="tcard">
            <Link to={"/product/" + name}>

                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>€ {price}</p>
            </Link>
  
            <button onClick={(e) => addToCart(id, 1)} className="btn btn-md btn-info" > cart </button>
        </div>

    )
}

export default List