import React from "react";
import { skillsInfo } from "../config/GlobalVariables";
import SkillsCardList from "../components/skills/SkillsCardList";

const SkillsPage = () => {
  return <SkillsCardList items={skillsInfo} />;
};

export default SkillsPage;
