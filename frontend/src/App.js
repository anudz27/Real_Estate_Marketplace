import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp";
import SignInForm from "./components/SignIn";
import Home from './pages/home/home';

function App() {
  return (

   
  <Router >
    <Navbar/>
    <Home/>
    <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignInForm" element={<SignInForm/>} />
      
    </Routes>

     

  </Router>

  );
}

export default App;
