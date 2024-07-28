//  import {Sty} from'bootstrap/dist/css/bootstrap.min.css';
import Bannerlist from "./list/Bannerlist"
import {React, useState, useEffect} from "react";
import Style from "../../styles/Carousel.module.css"


let slideIndex2 = 0


// Initiate the constrols
const carousel = document.querySelector('.carousel');


// Start slideshow
document.addEventListener('DOMContentLoaded', () => {
  setInterval(nextSlide, 5000);
  });

/**
 * Changes the slide to the next
 */

async function nextSlide() {
  const lastElement = carousel.children[carousel.childElementCount - 1];

  let current = document.querySelector('.carousel-item');
  if (current == lastElement) {
    current.classList.remove('active');
    carousel.children[1].classList.add('active');
  } else {
    current.classList.remove('active');
    current.nextElementSibling.classList.add('active');
  }
}

















 
function CarouselFadeExample() {



    const [banner, setbanner] = useState([])


    console.log( process.env.REACT_APP_API_LINK)

    useEffect(() => {
        fetch("http://localhost:8000" + "/getall/banner")
        .then((res) =>  res.json())
        .then((data) => setbanner(data.data));
    }, []);

// showSlidesNews()

  return (
    <div>






    <section className="carousel">

      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title One</h1>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title Two</h1>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title Three</h1>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title Four</h1>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title Five</h1>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg"
          alt=""
        />
        <h1 className="title">Nature Title Six</h1>
      </div>
    </section>
 

    

          {banner.slice(0, 2).map((project) => (

            <div className={Style.carousel} key={project._id}> 
            
              <Bannerlist
                  text={project.text}
                  img={project.imgUrl}
                />    
                </div>
            
            
            )   )   }



     </div>
  );
}


export default CarouselFadeExample;



async function showSlidesNews () {
    let i;
    let card = document.getElementsByClassName("");
    let slides = document.getElementsByClassName(Style.carousel);
 

    for (i = 0; i < slides.length; i++) {
     slides[i].style.width = "0";
      console.log(slides)
      
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
  
    slides[slideIndex2-1].style.width = "100%";
  
    setTimeout(showSlidesNews, 7000); // Change image every 2 seconds   
  
  };