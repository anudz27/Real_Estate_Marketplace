import React from "react";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header'; 
import Search from '../../components/search';
import PropertiesCards from '../../components/propertiesCards';
import Topics from "../../components/topics";
import Footer from "../../components/footer";
import Service from "../../components/service";


const Home = () => {
  return (
    
    <>
     <Navbar/>
      <Header/>
      <PropertiesCards/>
      <Topics/>
      <Service/>
      <Footer/>
     
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