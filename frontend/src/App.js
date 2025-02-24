import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp";
import SignInForm from "./components/signIn";
import Home from './pages/home/home';
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Search from "./components/search";
import properties from "./property";
import PropertyCart from './components/propertyCart';
import PropertiesCards  from "./components/propertiesCards";
import Topics from './components/topics';
import Footer from './components/footer';
import Service from "./components/service";


function App() {
  return (

   
  <Router >  
    <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignInForm" element={<SignInForm/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/properties" element={<properties/>}/>
      <Route path="/PropertyCart" element={<PropertyCart/>}/>
      <Route path="/PropertiesCards" element={<PropertiesCards/>}/>
      <Route path="/Topics" element={<Topics/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Service" element={<Service/>}/>



    </Routes>

     

  </Router>

  );
}

export default App;