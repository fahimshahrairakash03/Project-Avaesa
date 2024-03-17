import React from "react";

const NewsCard = ({ n }) => {
  const { title, image_url, details } = n;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img className="h-full" src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 20)}. .</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
