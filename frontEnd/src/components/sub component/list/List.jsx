import React from "react";
import { Link } from "react-router-dom";
const List = ({name, price, img, id}) => {



     async function addToCart() {
        try {
          const response = await fetch(process.env.REACT_APP_API_LINK + "add/cart", {
            method: "POST",
            credentials: "include",
            headers: { "Content-type": "application/json; charset=UTF-8", },
            body: JSON.stringify({
              productId: id,
              quantity: 1,
              weight: 0
            }),

          });
          const data = await response.json();
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
  
            <button onClick={(e) => addToCart()}className="btn btn-md btn-info" > cart </button>
        </div>

    )
}

export default List