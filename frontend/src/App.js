import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './pages/home/home';

function App() {
  return (
   
   <Router >
<Navbar/>
<Routes>
<Route path="/SignUp" element={<SignUp/>} />
  </Routes>

     

   </Router>

  );
}

export default App;
