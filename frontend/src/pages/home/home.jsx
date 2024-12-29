import React from "react";
import '../../styles/home.css';

import homeImage from '../../assets/img/4.jpg';

const Home = () => {
  return (
    <div>
      <div className="container block border  w-11/12 mx-auto my-auto">
        <img src={homeImage} alt="Home" className="img-home rounded-3xl" />
      </div>
      <div className="container-home">
        <p>Welcome to the homepage!</p>
      </div>
    </div>
  );
}
export default Home;