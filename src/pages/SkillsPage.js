import React from "react";

import { SkillsCardList } from "../components/common/CardList";
import { skillsInfo } from "../config/GlobalVariables";
const Skills = () => {
  return <SkillsCardList items={skillsInfo} />;
};

export default Skills;
