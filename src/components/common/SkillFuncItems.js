import React from "react";

const SkillsFuncList = React.memo(({ skills, functions }) => {
  return (
    <>
      적용 기술:
      <ul style={{ marginBlockStart: 0 }}>
        {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      주요 기능:
      <ul style={{ marginBlockStart: 0 }}>
        {functions && functions.map((func) => <li key={func}>{func}</li>)}
      </ul>
    </>
  );
});

export default SkillsFuncList;
