import React from "react";

const CourseCard = ({ course }) => {
  const { title, image_url, details } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            style={{ height: "300px" }}
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">{title}</h2>
          <p className="text-center">{details.slice(0, 100)}. .</p>
          <div className="card-actions justify-center">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
              }}
              className="btn text-white "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
