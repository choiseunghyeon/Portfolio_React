import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HttpsIcon from "@material-ui/icons/Https";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SkillFuncItems from "./common/SkillFuncItems";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    display: "inline-block",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  displayInlineBlock: {
    display: "inline-block",
  },
  textAlignLeft: {
    textAlign: "left !important",
  },
}));

export default function MyTimeLine({ items }) {
  const { skills: SMskills, functions: SMfunctions } = items[0];
  const { skills: whatToEatSkills, functions: whatToEatFunctions } = items[1];
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            2015년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              백석대학교 입학
            </Typography>
            <Typography variant="subtitle2">
              ICT학부 정보보호학과 입학 및 정보보호 동아리(HUB) 가입
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            2016년 ~ 2017년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HttpsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              차세대 보안리더 양성프로그램(BOB) 진행
            </Typography>
            <Typography variant="subtitle2">
              BOB5기 교육 이수 및 웹 해킹 및 보안 프로젝트 진행
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            2017년 ~ 2018년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <EmojiPeopleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              군대 입대 및 전역
            </Typography>
            <Typography variant="subtitle2">
              <div>경찰청 사이버 수사 기획에서 근무</div>
              실적 취합 사이트 개발 및 유지보수
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            2018년 ~ 2019년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            className={`${classes.paper} ${classes.textAlignLeft}`}
          >
            <Typography variant="h6" component="h1">
              Smart Mirror 개발
            </Typography>
            <Typography variant="subtitle2">
              <SkillFuncItems skills={SMskills} functions={SMfunctions} />
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            2020년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              오늘 뭐 먹지? 개발
            </Typography>
            <Typography variant="subtitle2">
              <SkillFuncItems
                skills={whatToEatSkills}
                functions={whatToEatFunctions}
              />
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            현재
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AccountCircle />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              취업 중...
            </Typography>
            <Typography variant="subtitle2"></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
