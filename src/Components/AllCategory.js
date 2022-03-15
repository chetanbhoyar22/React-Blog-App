import React from "react";
import { useContext, useState } from "react";
import { BlogContext } from "./BlogContext";
import { useParams } from "react-router-dom";
import TopPost from "./TopPost";
import Advertisement from "./Advertisement";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [rows] = useContext(BlogContext);
  const { cat } = useParams();
  const [load, setLoad] = useState(true);

  return (
    <div className="blogBody">
      <div>
        <p className="mainCategory">{cat}</p>
        <hr className="mainCategoryHr" />

        {rows
          .filter(
            (value) =>
              (load ? value.ID <= 6 : value.ID <= 8) && value.Category === cat
          )
          .map((val) => (
            <div>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="blogContainer">
                  <img src={val.Image} className="blogImg" alt="" />
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
            {load ? "Load More" : "View Less"}
          </button>
        </div>
      </div>
      <div>
        <TopPost />
        <Advertisement />
      </div>
    </div>
  );
};

export default AllCategory;