import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./views/pages/contact";
import Home from "./views/pages/home";
import Services from "./views/pages/services";
import Story from "./views/pages/story";
import Navbar from "./views/components/navbar";

const App=(props)=>{

  return (
    <div>
 <Navbar></Navbar>
 <h4 className="h3 text-decoration-none">I am navbar</h4>
 
 <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="story" element={<Story></Story>}></Route>
  <Route path="services" element={<Services></Services>}></Route>
  <Route path="contact" element={<Contact></Contact>}></Route>
 </Routes>
 {/* <Home></Home> */}
    </div>
   
  )
    
}
export default App;