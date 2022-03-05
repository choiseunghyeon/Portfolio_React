import React from "react";
import { useSelector } from "react-redux";
import { getSkill } from "src/store/selector";
import SkillsCardList from "../components/skills/SkillsCardList";

function SkillContainer() {
  const state = useSelector(getSkill);
  return <SkillsCardList iconInfoList={state.iconInfoList} />;
}

export default SkillContainer;
