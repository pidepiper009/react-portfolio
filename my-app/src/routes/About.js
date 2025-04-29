import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT ME"
        text="A friendly Software Developer, skilled in React and Spring Boot."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
