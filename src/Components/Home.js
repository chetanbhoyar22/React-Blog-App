import React from "react";
import TopHome from "./Inside-Home/TopHome";
import TheLatest from "./Inside-Home/TheLatest";
import LatestArticles from "./Inside-Home/LatestArticles";
import LatestStories from "./Inside-Home/LatestStories";

const Home = () => {
  return (
    <div>
      <TopHome />
      <TheLatest />
      <LatestArticles />
      <LatestStories />
    </div>
  );
};

export default Home;