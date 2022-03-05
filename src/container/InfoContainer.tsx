import React from "react";
import MyTimeLine from "../components/info/MyTimeLine";
import Greeting from "../components/info/Greeting";
import { useSelector } from "react-redux";
import { selectTimeline } from "src/store/selector";
function InfoContainer() {
  const state = useSelector(selectTimeline);
  return (
    <>
      <Greeting />
      <MyTimeLine items={state} />
    </>
  );
}

export default InfoContainer;
