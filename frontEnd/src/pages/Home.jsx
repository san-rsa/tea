import Banner from "../components/sub component/Banner";
import Nav from "../components/sub component/Nav";
import Trending from "../components/Trending";
import Category from "../components/Category"
import Slist from "../components/Slist";

import Carousel from "../components/sub component/Carousel"
import "../styles/style.css"




function App() {
  return (
    <div>
           
        <Nav />


        <Banner />
           
        <Trending />
                          <Carousel />

{/* 
            <Banner /> */}

              <Category />

              <Slist />

    </div>
  );
}

export default App;
