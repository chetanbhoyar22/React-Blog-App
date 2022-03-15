import React from "react";
import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import { Link } from "react-router-dom";
/* eslint-disable */

const TheLatest = () => {
  const [rows] = useContext(BlogContext);

  return (
    <div className="TheLatestContainer">
      <p className="mainCategory">The Latest</p>
      <hr className="mainCategoryHr" />

      <div className="TheLatestBox">
        {rows
          .filter(
            (value) =>
              (value.ID == "2" && value.Category === "Bollywood") ||
              (value.ID == "5" &&
                (value.Category === "Fitness" || value.Category === "Tourism"))
          )
          .map((val) => (
            <Link
              to={`/article/${val.Category}/${val.ID}`}
              className="TheLatestContent"
            >
              <img src={val.Image} className="TheLatestImg" alt="" />
              <p className="title">{val.Title}</p>
              <p className="body">{val.Body}</p>
              <p className="body">
                <strong>{val.Category}</strong> / {val.Date}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TheLatest;