import React from "react";

const NewsBox = ({title,description, url, i}) => {
  return (
    <div className="news-box" >
      <div className="heading">
        <h3>{title}</h3>
      </div>
      <div className="description">
        <p>
        {description}
        </p>
       <a  href={url}>more info</a>
      </div>
    </div>
  );
};

export default NewsBox;
