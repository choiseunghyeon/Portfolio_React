import React from "react";
import MyTimeLine from "../components/MyTimeLine";
import { projectInfo } from "../config/GlobalVariables";
const Home = () => {
  return <MyTimeLine items={projectInfo} />;
};

export default Home;
