import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as React from 'react'

// 1. import `ChakraProvider` component
import "./styles/style.css"
  // 2. Wrap ChakraProvider at the root of your app

  

function App() {
 
  return (
 
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<ProjectsSection/> } />
        <Route path="/project/graphicsdesign" element={<Projects/> } />
        <Route path="/project/ui/uxresearchanddesign" element={<Projects/> } />
        <Route path="/project/webdesignanddevelopment" element={<Projects/> } /> */}
    </Routes>
  </BrowserRouter>    
 
  );
}

export default App;