import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@material-ui/lab";
import { Paper, Typography, withWidth } from "@material-ui/core";
import { TimeLine } from "../../types/portfolio";
import IconComponent from "../common/IconComponent";
import SkillFuncItems from "../common/SkillFuncItems";

const useStyles = makeStyles({
  paper: {
    padding: "6px 16px",
    display: "inline-block",
  },
  textAlignLeft: {
    textAlign: "left",
    // textAlign: "left !important",
  },
  inlinBlock: {
    display: "inline-block",
  },
  // 기존 flex: 1로 TimelineItem을 가운데로 맞춰주기 위해 해당 element 반대편에 공간을 차지하는 스타일이 적용되어 있음
  zeroFlex: {
    "&:before": {
      flex: 0,
      padding: 0,
    },
  },
});

type Width = {
  width: Breakpoint;
};

type MyTimeLineItemProps = Width & TimeLine;

const MyTimeLineItem = React.memo(({ year, title, body, skills, functions, textAlignLeft, icon, width }: MyTimeLineItemProps) => {
  const customClass = useStyles();
  return (
    <TimelineItem data-testid="timelineItem" classes={width === "xs" ? { missingOppositeContent: customClass.zeroFlex } : undefined}>
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
        <Paper elevation={3} className={`${customClass.paper} ${textAlignLeft && customClass.textAlignLeft}`}>
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

type MyTimeLineProps = Width & {
  items: TimeLine[];
};

const MyTimeLine = React.memo(({ items, width }: MyTimeLineProps) => {
  // width에 현재 브라우저 크기 상태값이 들어 있음 (md, sm, lg 등)
  console.log(width);
  return (
    <Timeline align={width === "xs" ? "left" : "alternate"}>
      {items.map(item => (
        <MyTimeLineItem {...item} width={width} key={item.id} />
      ))}
    </Timeline>
  );
});

export default withWidth()(MyTimeLine);
