import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Courses from "../Courses/Courses";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Courses></Courses>
      <News></News>
    </div>
  );
};

export default Home;
