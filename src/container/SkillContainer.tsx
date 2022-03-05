import React from "react";
import { useSelector } from "react-redux";
import { selectSkill } from "src/store/selector";
import SkillsCardList from "../components/skills/SkillsCardList";

function SkillContainer() {
  const state = useSelector(selectSkill);
  return <SkillsCardList iconInfoList={state.iconInfoList} />;
}

export default SkillContainer;
