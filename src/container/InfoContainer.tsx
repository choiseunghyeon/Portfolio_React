import React from "react";
import MyTimeLine from "../components/info/MyTimeLine";
import Greeting from "../components/info/Greeting";
import { useSelector } from "react-redux";
import { getTimeline } from "src/store/selector";
function InfoContainer() {
  const state = useSelector(getTimeline);
  return (
    <>
      <Greeting />
      <MyTimeLine items={state} />
    </>
  );
}

export default InfoContainer;
