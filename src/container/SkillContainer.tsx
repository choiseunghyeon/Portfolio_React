import React from "react";
import SkillsCardList from "../components/skills/SkillsCardList";

function SkillContainer({ state }: any) {
  return <SkillsCardList iconInfoList={state.iconInfoList} />;
}

export default SkillContainer;
