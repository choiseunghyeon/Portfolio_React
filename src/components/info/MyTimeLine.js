import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Paper, Typography, withWidth } from "@material-ui/core";

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
    "&:before": {
      flex: 0,
      padding: 0,
    },
  },
}));

const MyTimeLineItem = React.memo(({ item, width }) => {
  const { year, title, body, component, textAlignLeft, icon } = item;
  const classes = useStyles();
  return (
    <TimelineItem
      classes={
        width === "xs" ? { missingOppositeContent: classes.zeroFlex } : null
      }
    >
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

const MyTimeLine = React.memo(({ items, width }) => {
  // width에 현재 브라우저 크기 상태값이 들어 있음 (md, sm, lg 등)
  console.log(width);
  return (
    <Timeline align={width === "xs" ? "left" : "alternate"}>
      {items.map((item) => (
        <MyTimeLineItem item={item} width={width} key={item.id} />
      ))}
    </Timeline>
  );
});

export default withWidth()(MyTimeLine);
