import React from "react";
import MyTimeLine from "../components/info/MyTimeLine";
import { timeLineItems } from "../config/GlobalVariables";
import Greeting from "../components/info/Greeting";

const InfoPage = () => {
  return (
    <>
      <Greeting />
      <MyTimeLine items={timeLineItems} />
    </>
  );
};

export default InfoPage;
