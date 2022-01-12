import React from "react";
import MyTimeLine from "../components/info/MyTimeLine";
import Greeting from "../components/info/Greeting";
function InfoContainer({ state }: any) {
  return (
    <>
      <Greeting />
      <MyTimeLine items={state} />
    </>
  );
}

export default InfoContainer;
