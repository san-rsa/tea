 import {React, useState, useEffect} from "react";
import List from "./sub component/list/List";
import "../styles/style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Menu = () => {




//     const [product, setproduct] = useState([])


//     console.log( process.env.REACT_APP_API_LINK)

//     useEffect(() => {
//         fetch(process.env.REACT_APP_API_LINK + "getall/product")
//         .then((res) =>  res.json())
//         .then((data) => setproduct(data.data));
//     }, []);














//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };



        

//     <div>  
//        <h1>TRENDING</h1>

//     <div className="trending">

 
//         {product.slice(0, 4).map((project) => (

// <div className="card" key={project._id}> 

//   <List
//       id={project._id}
//       price={project.size[0].price}
//       name={project.name}
//       img={project.imgUrl}
//       size={project.size[0]._id}
//     />    
//     </div>


// )   )   }
//     </div>
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//    </div>

//   }

// export default Menu

















import Slider from "react-slick";

function AutoPlay() {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
          />
        );
      }

      


        const [product, setproduct] = useState([])


    console.log( process.env.REACT_APP_API_LINK)

    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK + "getall/product")
        .then((res) =>  res.json())
        .then((data) => setproduct(data.data));
    }, []);


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (

        <div className="trending">

        <h1>TRENDING</h1>

    <div className="slider-container">
      <Slider {...settings}>

            {product?.map((project) => (
 

        <List
        id={project._id}
        price={project.size[0].price}
        name={project.name}
        img={project.imgUrl}
        size={project.size[0]._id}
        />    


            )   )   }      
            </Slider>

</div>
        </div>
  );
}

export default AutoPlay;

















// import {React, useState, useEffect} from "react";
// import List from "./sub component/list/List";
// import "../styles/style.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Menu = () => {




//     const [product, setproduct] = useState([])


//     console.log( process.env.REACT_APP_API_LINK)

//     useEffect(() => {
//         fetch(process.env.REACT_APP_API_LINK + "getall/product")
//         .then((res) =>  res.json())
//         .then((data) => setproduct(data.data));
//     }, []);














//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };



        

//     <div>  
//        <h1>TRENDING</h1>

//     {/* <div className="trending">

 
//         {product.slice(0, 4).map((project) => (

// <div className="card" key={project._id}> 

//   <List
//       id={project._id}
//       price={project.size[0].price}
//       name={project.name}
//       img={project.imgUrl}
//       size={project.size[0]._id}
//     />    
//     </div>


// )   )   }
//     </div> */}
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//    </div>

//   }

// export default Menu



