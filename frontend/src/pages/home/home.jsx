import React from "react";

import Header from '../../components/Header'; 
import Search from '../../components/search';
import PropertiesCards from '../../components/propertiesCards';



const Home = () => {
  return (
    
    <>
      <Header/>
      <PropertiesCards/>
     
    </>
    // <div>
    //   <div className="container block border  w-11/12 mx-auto my-auto">
    //     <img src={homeImage} alt="Home" className="img-home rounded-3xl" />
    //   </div>
    //   <div className="container-home">
    //     <p>Welcome to the homepage!</p>
    //   </div>
    // </div>
  );
}
export default Home;