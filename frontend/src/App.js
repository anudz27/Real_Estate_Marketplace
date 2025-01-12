import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp";
import SignInForm from "./components/SignIn";
import Home from './pages/home/home';
import Header from "./components/Header";
import Blog from "./pages/Blog";


function App() {
  return (

   
  <Router >
    <Navbar/>
    
    <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignInForm" element={<SignInForm/>} />
    
      <Route path="/Header" element={<Header/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Blog" element={<Blog/>}/>
    </Routes>

     

  </Router>

  );
}

export default App;