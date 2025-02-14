import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp";
import SignInForm from "./components/signIn";
import Home from './pages/home/home';
import Header from "./components/Header";

import Blog from "./pages/Blog";
import Search from "./components/search";



function App() {
  return (

   
  <Router >
    <Navbar/>
    
    
    <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignInForm" element={<SignInForm/>} />
    
      <Route path="/Header" element={<Header/>} />

      <Route path="/" element={<Home/>} />

      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Search" element={<Search/>}/>

    </Routes>

     

  </Router>

  );
}

export default App;