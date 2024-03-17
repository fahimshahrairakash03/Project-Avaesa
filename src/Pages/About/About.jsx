import React from "react";
import about from "../../assets/about/About.jpg";

const About = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200 px-9">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/4">
            <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold text-center">About Me</h1>
            <p className="py-6 text-center my-2">
              An award winning journalist currently working for the development
              of the youth towards journalism career.
            </p>
            <p className="py-6 text-center my-2">
              Previously, local demography reportar at Birmingham Mail and BBC
              and reported at the Gurdian
            </p>
            <p className="py-6 text-center my-2">
              A recipient of the different Trust fellowship and Winner of the
              Scott Trust bursary 2019
            </p>
            <p className="py-6 text-center my-2">
              Writing specialisms include news, politics, local government,
              crime, housing and transport.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
