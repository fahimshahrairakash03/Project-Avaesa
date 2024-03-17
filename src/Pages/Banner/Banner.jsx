import React from "react";
import bannerImg from "../../assets/lottie/bannerImg.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 px-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <Lottie animationData={bannerImg} loop={true} />
          </div>
          <div className="w-1/2">
            <h1 className="font-extrabold lg:text-6xl mb-5 ">
              {" "}
              Start Learning <br />
              and explore your <br />
              Journey
            </h1>
            <Link to="/courses">
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
                }}
                className="btn text-white w-36 font-bold lg:me-4 hover:-translate-y-1 hover:scale-110 duration-300 "
              >
                Start Learning
              </button>
            </Link>
            <Link>
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #c94b4b 0%, #4b134f 100%)",
                }}
                className="btn text-white w-36  mt-2 hover:-translate-y-1 hover:scale-110 duration-300 "
              >
                Join Us Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
