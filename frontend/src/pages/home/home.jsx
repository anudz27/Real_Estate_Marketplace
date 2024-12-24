import React from "react";
import '../../styles/home.css';

import homeImage from '../../assets/img/4.jpg';

const Home = () => {
  return (
    <div>
      <div className="container">
        <img src={homeImage} alt="Home" className="img-home" />
      </div>
      <div className="container-home">

      </div>
    </div>
  );
}
export default Home;