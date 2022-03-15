import React from "react";
import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const LatestStories = () => {
  const [rows] = useContext(BlogContext);

  const [load, setLoad] = useState(true);

  return (
    <div className="TheLatestContainer">
      <p className="mainCategory">Latest Stories</p>
      <hr className="mainCategoryHr" />
      <p className="hr-2" />
      <div className="TheLatestBox">
        {rows
          .filter(
            (value) =>
              (load ? value.ID === "3" : value.ID <= 3) &&
              (value.Category === "Food" ||
                value.Category === "Fitness" ||
                value.Category === "Tourism")
          )
          .map((val) => (
            <>
              <Link
                to={`/article/${val.Category}/${val.ID}`}
                className="TheLatestStories"
              >
                <img src={val.Image} alt="img" className="LatestImg" />
                <p className="title">{val.Title}</p>
                <p className="body">{val.Body}</p>
                <p className="body">
                  <strong>{val.Category}</strong> / {val.Date}
                </p>
              </Link>
            </>
          ))}
      </div>
      <p className="hr-2" />
      <div className="btn">
        <button onClick={() => setLoad(!load)} className="btn">
          {load ? "View More" : "View Less"}
        </button>
      </div>
    </div>
  );
};

export default LatestStories;