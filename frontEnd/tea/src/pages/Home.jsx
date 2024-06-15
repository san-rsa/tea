import Banner from "../components/sub component/Banner";
import Nav from "../components/sub component/Nav";
import Trending from "../components/Trending";
import Category from "../components/Category"
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/style.css"




function App() {
  return (
    <div>
           
        <Nav />
        <Banner 
            text={"xxxxxxxxxxxxxx"}
            img={require("../img/Rectangle 5.png")}/>
           
              <Trending />
            

            <Banner 
              text={"xxxx xxxxx xxxx"}
              img={require("../img/Rectangle 6.png")}/>

              <Category />

    </div>
  );
}

export default App;
