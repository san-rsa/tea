import {Carousel } from 'react-bootstrap';
//  import {Sty} from'bootstrap/dist/css/bootstrap.min.css';
import Bannerlist from "./list/Bannerlist"
import {React, useState, useEffect} from "react";
import Style from "../../styles/Carousel.module.css"



// let slideIndex2 = 0
// function showSlidesNews() {
//     let i;
//     let card = document.getElementsByClassName("");
//     let slides = document.getElementsByClassName(Style.carousel);
 

//     for (i = 0; i < slides.length; i++) {
//      slides[i].style.width = "0";
//       console.log(slides)
      
//     }
//     slideIndex2++;
//     if (slideIndex2 > slides.length) {slideIndex2 = 1}
  
//     slides[slideIndex2-1].style.width = "100%";
  
//     setTimeout(showSlidesNews, 7000); // Change image every 2 seconds   
  
//   };

 
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
          <Carousel fade>
      <Carousel.Item>
      <img src={require("../../img/Rectangle 6.png")} alt="tea banner"/>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../../img/Rectangle 5.png")} alt="tea banner"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../../img/Rectangle 6.png")} alt="tea banner"/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



<div id="carouselExampleFade" class="carousel slide carousel-fade">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="..." class="d-block w-100" alt="..."/>
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="..."/>
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="..."/>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>




<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>









<div> 
          {banner.slice(0, 2).map((project) => (

            <div className={Style.carousel} key={project._id}> 
            
              <Bannerlist
                  text={project.text}
                  img={project.imgUrl}
                />    
                </div>
            
            
            )   )   }
        </div>







     </div>
  );
}


export default CarouselFadeExample;