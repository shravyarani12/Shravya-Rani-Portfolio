import React from "react";
import "./Intro.css";
import bg from "../assests/bg.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Shravya Rani</span> <br /> React
          Developer
        </span>
        <p className="introPara">
          A talented professional with more than 7years of experience in IT
          Industry having passion for tailored solutions <br /> seeking position
          of UI, Full Stack or Senior Software Developer positions
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
