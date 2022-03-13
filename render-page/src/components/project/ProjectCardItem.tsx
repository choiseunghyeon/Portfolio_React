import React, { useState } from "react";
import { Card, CardHeader, CardActions, CardContent, CardMedia, Collapse, Typography, IconButton, Theme, IconButtonProps } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SkillFuncItems from "../common/SkillFuncItems";
import { ProejctInfo } from "../../types/portfolio";
import IconComponent from "../common/IconComponent";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCardItem({ description, functions, icons, imageSrc, skills, subtitle, title }: ProejctInfo) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia component="img" image={imageSrc} title="project image" height="300" />
      <CardHeader title={title} subheader={subtitle} sx={{ padding: "16px 16px 0 16px" }} />
      <CardContent sx={{ padding: "16px 16px 0 16px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {icons &&
          icons.map((icon, index) => (
            <div key={index} style={{ padding: "0 8px" }}>
              <IconComponent {...icon} fontSize="1.45rem" />
            </div>
          ))}
        <ExpandMore data-testid="projectCardItemExpand" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component="div">
            <SkillFuncItems skills={skills} functions={functions} />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default React.memo(ProjectCardItem);
