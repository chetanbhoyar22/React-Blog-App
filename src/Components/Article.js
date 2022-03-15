import React from "react";
import { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { useParams } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import MoreFromSiren from "./MoreFromSiren";

const Article = () => {
  const [rows] = useContext(BlogContext);
  const { Id } = useParams();
  const { cat } = useParams();
  return (
    <div>
      {rows
        .filter((value) => value.ID === Id && value.Category === cat)
        .map((val) => (
          <div className="articleContainer">
            <p className="articleTitle">{val.Title}</p>
            <img src={val.Image} alt="" className="articleImg" />
            <p>
              {val.Body} {val.Body}
            </p>
            <p>Let's talk about them,</p>
            <p>
              {val.Body} {val.Body}
            </p>
            <p>
              <BsHandThumbsUp />
              &emsp;
              <b>
                <i>9.5k Likes</i>
              </b>
            </p>
            <br />
            <hr />
            <div className="articleProfileBox">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                alt="userImg"
                className="articleProfileImg"
              />
              <div>
                <p>Written By</p>
                <p>
                  &emsp;<b>{val.Author}</b>
                </p>
                <p>&emsp;{val.Date}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      <MoreFromSiren />
    </div>
  );
};

export default Article;