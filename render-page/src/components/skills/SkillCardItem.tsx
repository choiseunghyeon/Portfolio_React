import React from "react";
import { Typography, Card } from "@mui/material";
import { IconInfo } from "../../types/portfolio";
import IconComponent from "../common/IconComponent";

function SkillCardItem({ icon, title }: IconInfo) {
  return (
    <Card
      sx={{
        textAlign: "center",
        padding: "10px",
      }}>
      <IconComponent icon={icon} fontSize="2.8rem" />
      <Typography noWrap variant="h5" component="h2">
        {title}
      </Typography>
      {/* <LinearProgress variant="determinate" value={75} /> */}
    </Card>
  );
}

export default React.memo(SkillCardItem);
