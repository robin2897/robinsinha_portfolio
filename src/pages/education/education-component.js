import React from 'react';
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent,
    TimelineConnector, TimelineContent, TimelineDot
} from "@material-ui/lab";
import { Typography, Paper, ThemeProvider, Grid } from "@material-ui/core";
import { TweenMax, Elastic } from "gsap";

import { customMaterialTheme } from "../../MaterialUiTheme";

import './education.scss'

export class EducationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.descriptionElement = null;
        this.timelineElement = null;
    }

    componentDidMount() {
        TweenMax.fromTo(this.descriptionElement, 0.2, {opacity: 0, y: 50}, {opacity: 1, y: 0}).play();
        TweenMax.fromTo(this.timelineElement, 0.2, {opacity: 0, y: 50}, {opacity: 1, y: 0, onComplete: timelineComplete}).play();

        function timelineComplete() {
            TweenMax.fromTo(".education-timeline-card", 1.2, {transform: 'translateY(100px)', opacity:0}, {ease: Elastic.easeOut, transform: 'translateY(0px)', opacity:1}).play();
        }
    }

    render() {
        var timelineTheme = customMaterialTheme();
        return (
            <section className="education-landing">
                <div className="education-container">
                    <div className="education-content">
                        <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <div className="education-description" ref={div => this.descriptionElement = div}>
                                    <h1>My Academic Qualification</h1>
                                </div>
                            </Grid>
                            <Grid item lg={12} container>
                                <ThemeProvider theme={timelineTheme}>
                                    <Timeline ref={div => this.timelineElement = div}>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>2016-21</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="education-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>B.TECH. + M.TECH (DUAL)</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Major:</b> Biotechnology
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Amity University, Sector-125 NOIDA, UP, INDIA</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Status: </b> Currenting Pursuing
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>2015-16</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="education-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>XII</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Board:</b> CBSE
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Modern School, Sector-11 NOIDA, UP, INDIA</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Status:</b> Completed
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>2013-14</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="education-timeline-card">
                                                <Typography variant="subtitle1" component="h1">
                                                        <b>X</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Board:</b> CBSE
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Modern School, Sector-11 NOIDA, UP, INDIA</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <b>Status:</b> Completed
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}
