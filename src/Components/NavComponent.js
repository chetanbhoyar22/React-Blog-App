import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "./BlogContext";
/* eslint-disable */

const NavComponent = () => {
  const [rows] = useContext(BlogContext);
  return (
    <div>
      <div className="heading">
        <p className="vertical">The</p>
        <p className="horizontal">Siren</p>
      </div>
      <div className="nav-links">
        <Link to="/home" className="link">
          Home
        </Link>
        {rows
          .filter((value) => value.ID == 1)
          .map((val) => (
            <Link to={`/category/${val.Category}`} className="link">
              {val.Category}
            </Link>
          ))}
      </div>
      <hr className="hr-line" />
    </div>
  );
};
export default NavComponent;