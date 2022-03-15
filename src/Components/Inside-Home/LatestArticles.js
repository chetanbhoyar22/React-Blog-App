import React from "react";
import { useContext, useState } from "react";
import { BlogContext } from "../BlogContext";
import TopPostHome from "./TopPostHome";
import Advertisement from "../Advertisement";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const [rows] = useContext(BlogContext);
  const [load, setLoad] = useState(true);
  return (
    <>
      <p className="mainCategory">Latest Articles</p>
      <hr className="mainCategoryHr" />
      <div className="blogBody">
        <div>
          {rows
            .filter(
              (value) =>
                (load ? value.ID <= 6 : value.ID <= 8) &&
                value.Category === "Bollywood"
            )
            .map((val) => (
              <div>
                <Link to={`/article/${val.Category}/${val.ID}`}>
                  <div className="blogContainer">
                    <img src={val.Image} alt="" className="blogImg" />
                    <div className="blogContent">
                      <p className="blogTitle">{val.Title}</p>
                      <p className="blogDetail">{val.Body}</p>
                      <p className="blogCategory">{val.Category}</p>
                    </div>
                  </div>
                </Link>
                <hr className="blogLine" />
              </div>
            ))}
          <div className="btn">
            <button onClick={() => setLoad(!load)} className="btn">
              {load ? "View More" : "View Less"}
            </button>
          </div>
        </div>
        <div>
          <TopPostHome />
          <Advertisement />
        </div>
      </div>
    </>
  );
};

export default LatestArticles;