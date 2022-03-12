import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Paper, Typography } from "@mui/material";

import { TimeLine } from "../../types/portfolio";
import IconComponent from "../common/IconComponent";
import SkillFuncItems from "../common/SkillFuncItems";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  zeroFlex: {
    "&:before": {
      flex: 0,
      padding: 0,
    },
  },
});

type MyTimeLineItemProps = TimeLine & {
  isMobile?: boolean;
};

const MyTimeLineItem = React.memo(({ year, title, body, skills, functions, isMobile, icon }: MyTimeLineItemProps) => {
  const customClass = useStyles();
  return (
    <TimelineItem data-testid="timelineItem" classes={isMobile ? { missingOppositeContent: customClass.zeroFlex } : undefined}>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          <IconComponent icon={icon} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="body1" color="textSecondary">
          {year}
        </Typography>
        <Paper
          elevation={3}
          sx={{
            textAlign: "left",
            padding: "6px 16px",
            display: "inline-block",
          }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">
            {body}
            {skills && functions && <SkillFuncItems skills={skills} functions={functions} />}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
});

export type MyTimeLineProps = {
  items: TimeLine[];
};

const MyTimeLine = React.memo(({ items }: MyTimeLineProps) => {
  // width에 현재 브라우저 크기 상태값이 들어 있음 (md, sm, lg 등)
  return (
    <>
      {/* Mobile 전용 Timeline */}
      <Timeline
        sx={{
          display: { xs: "block", sm: "none" },
        }}
        position="right">
        {items.map(item => (
          <MyTimeLineItem key={item.id} isMobile {...item} />
        ))}
      </Timeline>

      {/* PC 전용 Timeline */}
      <Timeline
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        position="alternate">
        {items.map(item => (
          <MyTimeLineItem key={item.id} {...item} />
        ))}
      </Timeline>
    </>
  );
});

export default MyTimeLine;
