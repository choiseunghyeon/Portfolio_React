import React from "react";
import SkillsCardList from "../components/skills/SkillsCardList";

function SkillContainer({ state }: any) {
  return <SkillsCardList items={state} />;
}

export default SkillContainer;
