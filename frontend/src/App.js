import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/signIn';

function App() {
  return (
   
   <Router >
<Navbar/>
<Routes>
<Route path="/SignUp" element={<SignUp/>} />
<Route path="/SignIn" element={<SignIn/>} />
  </Routes>

     

   </Router>

  );
}

export default App;
