import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    display: "inline-block",
  },
  textAlignLeft: {
    textAlign: "left !important",
  },
  inlinBlock: {
    display: "inline-block",
  },
  // 기존 flex: 1로 TimelineItem을 가운데로 맞춰주기 위해 해당 element 반대편에 공간을 차지하는 스타일이 적용되어 있음
  zeroFlex: {
    flex: 0,
  },
}));

const MyTimeLineItem = React.memo(({ item }) => {
  const { year, title, body, component, textAlignLeft, icon } = item;
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="body1" color="textSecondary">
          {year}
        </Typography>
        <Paper
          elevation={3}
          className={`${classes.paper} ${
            textAlignLeft && classes.textAlignLeft
          }`}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">
            {body}
            <div>{component}</div>
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
});

const MyTimeLine = React.memo(({ items }) => {
  return (
    <Timeline align="alternate">
      {items.map((item) => (
        <MyTimeLineItem item={item} key={item.id} />
      ))}
    </Timeline>
  );
});

export default MyTimeLine;
