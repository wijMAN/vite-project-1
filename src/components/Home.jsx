import React from "react";

import "../styles/home.scss";
import pic from "../assets/2.webp"

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            impedit fuga totam magni sunt deleniti facilis.Wij pull
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={pic} alt="graphics" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt eos quam harum ad itaque, accusamus nostrum, distinctio earum voluptatem laboriosam, magnam voluptatibus adipisci placeat? Consectetur impedit error mollitia beatae!</p>
        </div>
      </div>

    </>
  );
};

export default Home;
